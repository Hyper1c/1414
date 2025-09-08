// /contexts/ProfileContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  collection, 
  doc, 
  onSnapshot, 
  setDoc, 
  deleteDoc, 
  query, 
  where,
  getDocs 
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from './AuthContext';

export interface Profile {
  id: string;
  name: string;
  avatar: string;
  isAdult: boolean;
  isActive: boolean;
  pin?: string | null;
  requiresPin?: boolean;
  preferences: {
    language: string;
    autoplay: boolean;
    subtitles: boolean;
    quality: 'low' | 'medium' | 'high';
  };
}

interface ProfileContextType {
  profiles: Profile[];
  currentProfile: Profile | null;
  addProfile: (profile: Omit<Profile, 'id'>) => void;
  updateProfile: (id: string, updates: Partial<Profile>) => void;
  deleteProfile: (id: string) => void;
  selectProfile: (profile: Profile | null) => void;
  createDefaultProfiles: () => void;
  forceCreateDefaultProfiles: () => void;
  clearCurrentProfile: () => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

const defaultProfiles: Omit<Profile, 'id'>[] = [
  {
    name: 'Usuario 1',
    avatar: '👤',
    isAdult: true,
    isActive: true,
    pin: null,
    requiresPin: false,
    preferences: { language: 'es', autoplay: true, subtitles: false, quality: 'high' }
  },
  {
    name: 'Usuario 2',
    avatar: '👶',
    isAdult: false,
    isActive: false,
    pin: null,
    requiresPin: false,
    preferences: { language: 'es', autoplay: true, subtitles: true, quality: 'medium' }
  },
  {
    name: 'Usuario 3',
    avatar: '👨‍👩‍👧‍👦',
    isAdult: true,
    isActive: false,
    pin: null,
    requiresPin: false,
    preferences: { language: 'es', autoplay: false, subtitles: true, quality: 'high' }
  }
];

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [currentProfile, setCurrentProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Sincronización en tiempo real con Firestore
  useEffect(() => {
    if (!currentUser) {
      setProfiles([]);
      setCurrentProfile(null);
      setIsLoading(false);
      return;
    }

    console.log('🔄 ProfileContext - Configurando listener para usuario:', currentUser.uid);

    // Listener en tiempo real para los perfiles del usuario
    const profilesQuery = query(
      collection(db, 'profiles'),
      where('userId', '==', currentUser.uid)
    );

    const unsubscribe = onSnapshot(profilesQuery, (snapshot) => {
      const profilesData: Profile[] = [];
      
      snapshot.forEach((doc) => {
        const data = doc.data();
        profilesData.push({
          id: doc.id,
          name: data.name,
          avatar: data.avatar,
          isAdult: data.isAdult,
          isActive: data.isActive,
          pin: data.pin,
          requiresPin: data.requiresPin,
          preferences: data.preferences
        });
      });

      console.log('🔄 ProfileContext - Perfiles sincronizados desde Firestore:', profilesData);
      setProfiles(profilesData);
      setIsLoading(false);

      // Si no hay perfiles, crear los por defecto
      if (profilesData.length === 0) {
        console.log('🆕 ProfileContext - No hay perfiles, creando defaults');
        createDefaultProfilesInFirestore();
      }
    }, (error) => {
      console.error('Error en listener de perfiles:', error);
      setIsLoading(false);
    });

    return () => {
      console.log('🔄 ProfileContext - Desconectando listener');
      unsubscribe();
    };
  }, [currentUser]);

  // Crear perfiles por defecto en Firestore
  const createDefaultProfilesInFirestore = async () => {
    if (!currentUser) return;

    try {
      for (const profile of defaultProfiles) {
        const profileId = `${currentUser.uid}_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
        await setDoc(doc(db, 'profiles', profileId), {
          ...profile,
          userId: currentUser.uid,
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
      console.log('✅ ProfileContext - Perfiles por defecto creados en Firestore');
    } catch (error) {
      console.error('Error creando perfiles por defecto:', error);
    }
  };

  // CRUD con sincronización en Firestore
  const addProfile = async (profile: Omit<Profile, 'id'>) => {
    if (!currentUser) return;

    try {
      const profileId = `${currentUser.uid}_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
      await setDoc(doc(db, 'profiles', profileId), {
        ...profile,
        userId: currentUser.uid,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log('✅ ProfileContext - Perfil agregado a Firestore');
    } catch (error) {
      console.error('Error agregando perfil:', error);
    }
  };

  const updateProfile = async (id: string, updates: Partial<Profile>) => {
    if (!currentUser) return;

    try {
      const profileRef = doc(db, 'profiles', id);
      await setDoc(profileRef, {
        ...updates,
        updatedAt: new Date()
      }, { merge: true });
      
      // Actualizar perfil actual si es el mismo
      if (currentProfile?.id === id) {
        setCurrentProfile(prev => prev ? { ...prev, ...updates } : null);
      }
      
      console.log('✅ ProfileContext - Perfil actualizado en Firestore');
    } catch (error) {
      console.error('Error actualizando perfil:', error);
    }
  };

  const deleteProfile = async (id: string) => {
    if (!currentUser) return;

    try {
      await deleteDoc(doc(db, 'profiles', id));
      
      // Limpiar perfil actual si es el mismo
      if (currentProfile?.id === id) {
        setCurrentProfile(null);
        localStorage.removeItem('selected_profile_id');
      }
      
      console.log('✅ ProfileContext - Perfil eliminado de Firestore');
    } catch (error) {
      console.error('Error eliminando perfil:', error);
    }
  };

  const selectProfile = (profile: Profile | null) => {
    if (!profile) {
      setCurrentProfile(null);
      localStorage.removeItem('selected_profile_id');
      return;
    }
    
    // Clonar para evitar mutaciones
    setCurrentProfile({ ...profile, preferences: { ...profile.preferences } });
    localStorage.setItem('selected_profile_id', profile.id);
  };

  const createDefaultProfiles = async () => {
    console.log('🛠️ ProfileContext - createDefaultProfiles ejecutándose');
    await createDefaultProfilesInFirestore();
  };

  const clearCurrentProfile = () => setCurrentProfile(null);

  // Restaurar perfil seleccionado desde localStorage
  useEffect(() => {
    if (profiles.length > 0 && !currentProfile) {
      const savedProfileId = localStorage.getItem('selected_profile_id');
      if (savedProfileId) {
        const savedProfile = profiles.find(p => p.id === savedProfileId);
        if (savedProfile) {
          console.log('🔄 ProfileContext - Restaurando perfil guardado:', savedProfile.name);
          setCurrentProfile(savedProfile);
        }
      }
    }
  }, [profiles, currentProfile]);

  const forceCreateDefaultProfiles = async () => {
    console.log('🆕 ProfileContext - Forzando creación de perfiles por defecto');
    await createDefaultProfiles();
  };

  return (
    <ProfileContext.Provider value={{
      profiles,
      currentProfile,
      addProfile,
      updateProfile,
      deleteProfile,
      selectProfile,
      createDefaultProfiles,
      forceCreateDefaultProfiles,
      clearCurrentProfile,
    }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfiles = () => {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error('useProfiles must be used within a ProfileProvider');
  return ctx;
};