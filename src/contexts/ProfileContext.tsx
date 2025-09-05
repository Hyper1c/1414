import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Profile {
  id: string;
  name: string;
  avatar: string;
  isAdult: boolean;
  isActive: boolean;
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
  selectProfile: (profile: Profile) => void;
  createDefaultProfiles: () => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

const defaultProfiles: Omit<Profile, 'id'>[] = [
  {
    name: 'Usuario 1',
    avatar: '👤',
    isAdult: true,
    isActive: true,
    preferences: {
      language: 'es',
      autoplay: true,
      subtitles: false,
      quality: 'high'
    }
  },
  {
    name: 'Niños',
    avatar: '👶',
    isAdult: false,
    isActive: false,
    preferences: {
      language: 'es',
      autoplay: true,
      subtitles: true,
      quality: 'medium'
    }
  },
  {
    name: 'Familiar',
    avatar: '👨‍👩‍👧‍👦',
    isAdult: true,
    isActive: false,
    preferences: {
      language: 'es',
      autoplay: false,
      subtitles: true,
      quality: 'high'
    }
  }
];

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profiles, setProfiles] = useState<Profile[]>(() => {
    const saved = localStorage.getItem('profiles');
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  });

  const [currentProfile, setCurrentProfile] = useState<Profile | null>(() => {
    const saved = localStorage.getItem('currentProfile');
    if (saved) {
      return JSON.parse(saved);
    }
    return null;
  });

  useEffect(() => {
    localStorage.setItem('profiles', JSON.stringify(profiles));
  }, [profiles]);

  useEffect(() => {
    if (currentProfile) {
      localStorage.setItem('currentProfile', JSON.stringify(currentProfile));
    }
  }, [currentProfile]);

  const addProfile = (profile: Omit<Profile, 'id'>) => {
    const newProfile: Profile = {
      ...profile,
      id: Date.now().toString(),
    };
    setProfiles(prev => [...prev, newProfile]);
  };

  const updateProfile = (id: string, updates: Partial<Profile>) => {
    setProfiles(prev => prev.map(profile => 
      profile.id === id ? { ...profile, ...updates } : profile
    ));
    
    if (currentProfile?.id === id) {
      setCurrentProfile(prev => prev ? { ...prev, ...updates } : null);
    }
  };

  const deleteProfile = (id: string) => {
    setProfiles(prev => prev.filter(profile => profile.id !== id));
    
    if (currentProfile?.id === id) {
      setCurrentProfile(null);
    }
  };

  const selectProfile = (profile: Profile) => {
    setCurrentProfile(profile);
  };

  const createDefaultProfiles = () => {
    if (profiles.length === 0) {
      const newProfiles = defaultProfiles.map((profile, index) => ({
        ...profile,
        id: `default-${index}`,
      }));
      setProfiles(newProfiles);
      setCurrentProfile(newProfiles[0]);
    }
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
    }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfiles = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfiles must be used within a ProfileProvider');
  }
  return context;
};
