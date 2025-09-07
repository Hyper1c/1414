import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { 
  User, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  sendPasswordResetEmail
} from 'firebase/auth';
import { auth } from '../firebase/config';

interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const login = async (email: string, password: string) => {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    try {
      localStorage.setItem('auth_user_id', cred.user.uid);
      localStorage.setItem('auth_user_email', cred.user.email || '');
      console.log('🔐 AuthContext - Usuario logueado:', cred.user.uid);
    } catch (error) {
      console.error('Error guardando datos de usuario:', error);
    }
  };

  const logout = async () => {
    await signOut(auth);
    try {
      const userId = localStorage.getItem('auth_user_id');
      if (userId) {
        localStorage.removeItem(`currentProfile:${userId}`);
      }
      localStorage.removeItem('auth_user_id');
      localStorage.removeItem('auth_user_email');
    } catch {}
  };

  const resetPassword = async (email: string) => {
    await sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('🔐 AuthContext - Estado de autenticación cambiado:', user?.uid || 'null');
      setCurrentUser(user);
      setLoading(false);
      if (user) {
        try {
          localStorage.setItem('auth_user_id', user.uid);
          localStorage.setItem('auth_user_email', user.email || '');
          console.log('🔐 AuthContext - Usuario autenticado, datos guardados');
        } catch (error) {
          console.error('Error guardando datos de usuario:', error);
        }
      } else {
        try {
          localStorage.removeItem('auth_user_id');
          localStorage.removeItem('auth_user_email');
          console.log('🔐 AuthContext - Usuario desautenticado, datos limpiados');
        } catch (error) {
          console.error('Error limpiando datos de usuario:', error);
        }
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    logout,
    resetPassword,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
