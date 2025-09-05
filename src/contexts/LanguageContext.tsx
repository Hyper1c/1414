import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traducciones
const translations = {
  es: {
    // Navegación
    'home': 'Inicio',
    'movies': 'Películas',
    'series': 'Series',
    'kids': 'Infantil',
    'comedy': 'Comedia',
    'live-tv': 'TV en Vivo',
    
    // TV en Vivo
    'select-channel': 'Selecciona un canal',
    'select-channel-desc': 'Elige un canal de la lista para comenzar a ver',
    'loading-channel': 'Cargando canal...',
    'channel-count': 'Mostrando {count} de {total} canales',
    'no-channels-found': 'No se encontraron canales',
    'no-channels-desc': 'Intenta con otros términos de búsqueda o cambia la categoría',
    'search-channels': 'Buscar canales...',
    'refresh': 'Refrescar',
    'system': 'Sistema',
    'diagnostics': 'Información de diagnóstico',
    'system-info': 'Información del Sistema',
    
    // Categorías
    'all-channels': 'Todos los Canales',
    'movies-category': 'Películas',
    'kids-category': 'Infantil',
    'national': 'Nacional',
    'sports': 'Deportes',
    'entertainment': 'Entretenimiento',
    'music': 'Música',
    'news': 'Noticias',
    
    // Controles
    'mute': 'Silenciar',
    'unmute': 'Activar sonido',
    'fullscreen': 'Pantalla completa',
    'play': 'Reproducir',
    'pause': 'Pausar',
    
    // Errores
    'error-loading': 'Error al cargar',
    'error-playing': 'Error al reproducir',
    'server-down': 'El servidor puede estar caído',
    'check-connection': 'Verifica tu conexión a internet',
    'format-not-supported': 'Formato de video no soportado',
    'network-error': 'Error de red',
    'timeout': 'Timeout',
    'server-slow': 'El servidor puede estar lento o caído',
    
    // Perfiles
    'profiles': 'Perfiles',
    'add-profile': 'Agregar Perfil',
    'edit-profile': 'Editar Perfil',
    'delete-profile': 'Eliminar Perfil',
    'profile-name': 'Nombre del Perfil',
    'profile-avatar': 'Avatar del Perfil',
    'save-profile': 'Guardar Perfil',
    'cancel': 'Cancelar',
    'delete': 'Eliminar',
    'are-you-sure': '¿Estás seguro?',
    'delete-profile-confirm': '¿Estás seguro de que quieres eliminar este perfil?',
    'profile-deleted': 'Perfil eliminado',
    'profile-saved': 'Perfil guardado',
    'select-profile': 'Seleccionar Perfil',
    'manage-profiles': 'Administrar Perfiles',
    
    // Contenido
    'popular-movies': 'Películas Populares',
    'trending-series': 'Series Trending',
    'for-kids': 'Para Niños',
    'section-development': 'Sección en desarrollo',
    'coming-soon': 'Esta sección estará disponible pronto',
    
    // Autenticación
    'login': 'Iniciar Sesión',
    'logout': 'Cerrar Sesión',
    'email': 'Correo Electrónico',
    'password': 'Contraseña',
    'sign-in': 'Iniciar Sesión',
    'welcome': 'Bienvenido',
    
    // Acciones
    'search': 'Buscar',
    'filter': 'Filtrar',
    'close': 'Cerrar',
    'save': 'Guardar',
    'edit': 'Editar',
    'loading': 'Cargando...',
  },
  en: {
    // Navigation
    'home': 'Home',
    'movies': 'Movies',
    'series': 'Series',
    'kids': 'Kids',
    'comedy': 'Comedy',
    'live-tv': 'Live TV',
    
    // Live TV
    'select-channel': 'Select a channel',
    'select-channel-desc': 'Choose a channel from the list to start watching',
    'loading-channel': 'Loading channel...',
    'channel-count': 'Showing {count} of {total} channels',
    'no-channels-found': 'No channels found',
    'no-channels-desc': 'Try different search terms or change the category',
    'search-channels': 'Search channels...',
    'refresh': 'Refresh',
    'system': 'System',
    'diagnostics': 'Diagnostic Information',
    'system-info': 'System Information',
    
    // Categories
    'all-channels': 'All Channels',
    'movies-category': 'Movies',
    'kids-category': 'Kids',
    'national': 'National',
    'sports': 'Sports',
    'entertainment': 'Entertainment',
    'music': 'Music',
    'news': 'News',
    
    // Controls
    'mute': 'Mute',
    'unmute': 'Unmute',
    'fullscreen': 'Fullscreen',
    'play': 'Play',
    'pause': 'Pause',
    
    // Errors
    'error-loading': 'Error loading',
    'error-playing': 'Error playing',
    'server-down': 'The server may be down',
    'check-connection': 'Check your internet connection',
    'format-not-supported': 'Video format not supported',
    'network-error': 'Network error',
    'timeout': 'Timeout',
    'server-slow': 'The server may be slow or down',
    
    // Profiles
    'profiles': 'Profiles',
    'add-profile': 'Add Profile',
    'edit-profile': 'Edit Profile',
    'delete-profile': 'Delete Profile',
    'profile-name': 'Profile Name',
    'profile-avatar': 'Profile Avatar',
    'save-profile': 'Save Profile',
    'cancel': 'Cancel',
    'delete': 'Delete',
    'are-you-sure': 'Are you sure?',
    'delete-profile-confirm': 'Are you sure you want to delete this profile?',
    'profile-deleted': 'Profile deleted',
    'profile-saved': 'Profile saved',
    'select-profile': 'Select Profile',
    'manage-profiles': 'Manage Profiles',
    
    // Content
    'popular-movies': 'Popular Movies',
    'trending-series': 'Trending Series',
    'for-kids': 'For Kids',
    'section-development': 'Section in development',
    'coming-soon': 'This section will be available soon',
    
    // Authentication
    'login': 'Login',
    'logout': 'Logout',
    'email': 'Email',
    'password': 'Password',
    'sign-in': 'Sign In',
    'welcome': 'Welcome',
    
    // Actions
    'search': 'Search',
    'filter': 'Filter',
    'close': 'Close',
    'save': 'Save',
    'edit': 'Edit',
    'loading': 'Loading...',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'es'; // Por defecto en español
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations[typeof language]];
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
