// /contexts/ProfileContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

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

const getUserKeys = () => {
  // usa auth_user_id si existe (tu MainApp lo guarda ahí),
  // si no, usamos 'guest' para mantener compatibilidad.
  const uid = localStorage.getItem('auth_user_id') ?? 'guest';
  return {
    profilesKey: `profiles:${uid}`,
    currentKey: `currentProfile:${uid}`,
    // claves globales para compatibilidad con código antiguo:
    globalProfilesKey: 'profiles',
    globalCurrentKey: 'currentProfile'
  };
};

const readProfilesFromStorage = (): Profile[] | null => {
  try {
    const { profilesKey, globalProfilesKey } = getUserKeys();
    let saved = localStorage.getItem(profilesKey);
    if (!saved) saved = localStorage.getItem(globalProfilesKey);
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
};

const readCurrentFromStorage = (): Profile | null => {
  try {
    const { currentKey, globalCurrentKey } = getUserKeys();
    let saved = localStorage.getItem(currentKey);
    if (!saved) saved = localStorage.getItem(globalCurrentKey);
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
};

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profiles, setProfiles] = useState<Profile[]>(() => {
    const loaded = readProfilesFromStorage() ?? [];
    console.log('🔍 ProfileContext - Profiles cargados al inicializar:', loaded);
    return loaded;
  });
  const [currentProfile, setCurrentProfile] = useState<Profile | null>(() => {
    const loaded = readCurrentFromStorage();
    console.log('🔍 ProfileContext - CurrentProfile cargado al inicializar:', loaded);
    return loaded;
  });

  // Guardar profiles en storage (clave por usuario y clave global)
  useEffect(() => {
    try {
      const { profilesKey, globalProfilesKey } = getUserKeys();
      const payload = JSON.stringify(profiles);
      localStorage.setItem(profilesKey, payload);
      localStorage.setItem(globalProfilesKey, payload);
    } catch (e) {
      console.error('Error guardando profiles en localStorage', e);
    }
  }, [profiles]);

  // Guardar currentProfile en storage (clave por usuario y global)
  useEffect(() => {
    try {
      const { currentKey, globalCurrentKey } = getUserKeys();
      if (currentProfile) {
        const payload = JSON.stringify(currentProfile);
        localStorage.setItem(currentKey, payload);
        localStorage.setItem(globalCurrentKey, payload);
      } else {
        // si es null, removemos la clave por usuario (y la global si existe)
        localStorage.removeItem(currentKey);
        // opcional: no eliminamos globalCurrentKey para compatibilidad
      }
    } catch (e) {
      console.error('Error guardando currentProfile en localStorage', e);
    }
  }, [currentProfile]);

  // CRUD
  const addProfile = (profile: Omit<Profile, 'id'>) => {
    const newProfile: Profile = {
      ...profile,
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    };
    setProfiles(prev => [...prev, newProfile]);
  };

  const updateProfile = (id: string, updates: Partial<Profile>) => {
    setProfiles(prev => prev.map(p => (p.id === id ? { ...p, ...updates } : p)));
    if (currentProfile?.id === id) {
      setCurrentProfile(prev => prev ? { ...prev, ...updates } : null);
    }
  };

  const deleteProfile = (id: string) => {
    setProfiles(prev => prev.filter(p => p.id !== id));
    if (currentProfile?.id === id) {
      setCurrentProfile(null);
    }
  };

  const selectProfile = (profile: Profile | null) => {
    if (!profile) {
      setCurrentProfile(null);
      return;
    }
    // clonamos para evitar que editar current mutile el objeto en la lista
    setCurrentProfile({ ...profile, preferences: { ...profile.preferences } });
  };

  const createDefaultProfiles = () => {
    console.log('🛠️ ProfileContext - createDefaultProfiles ejecutándose');
    const newProfiles = defaultProfiles.map((p, i) => ({ ...p, id: `default-${i}-${Date.now()}` }));
    console.log('🎯 ProfileContext - Creando nuevos perfiles por defecto:', newProfiles);
    setProfiles(newProfiles);
    // No establecer currentProfile automáticamente, dejar que el usuario elija
  };

  const clearCurrentProfile = () => setCurrentProfile(null);

  // Inicialización: crear perfiles por defecto si no existen
  useEffect(() => {
    console.log('🚀 ProfileContext - useEffect de inicialización ejecutándose');
    const saved = readProfilesFromStorage();
    console.log('🔍 ProfileContext - Saved en useEffect:', saved);
    console.log('📊 ProfileContext - Profiles.length en estado:', profiles.length);
    console.log('🔑 ProfileContext - auth_user_id:', localStorage.getItem('auth_user_id'));
    
    // Si no hay perfiles guardados, crear los por defecto
    if (!saved || saved.length === 0) {
      console.log('🆕 ProfileContext - No hay profiles guardados, creando defaults');
      createDefaultProfiles();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // solo al montar

  // Función para forzar la creación de perfiles por defecto
  const forceCreateDefaultProfiles = () => {
    console.log('🆕 ProfileContext - Forzando creación de perfiles por defecto');
    createDefaultProfiles();
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