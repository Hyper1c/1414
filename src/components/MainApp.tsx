import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useProfiles } from '../contexts/ProfileContext';
import Login from './Login';
import Header from './Header';
import Sidebar from './Sidebar';
import ContentSection from './ContentSection';
import ContentCard from './ContentCard';
import LiveTV from './LiveTV';
import InfoModal from './InfoModal';
import ProfileSelector from './ProfileSelector';
import { MoviePlayer } from './MoviePlayer';
import { mockMovies, mockSeries, mockKidsContent, mockComedyContent } from '../data/mockContent';
import type { ContentItem } from '../data/mockContent';

const MainApp: React.FC = () => {
  const { currentUser } = useAuth();
  const { t } = useLanguage();
  const { currentProfile, clearCurrentProfile, profiles, forceCreateDefaultProfiles } = useProfiles();
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [showProfileSelector, setShowProfileSelector] = useState(false);
  const [currentMovie, setCurrentMovie] = useState<ContentItem | null>(null);
  const [isMoviePlayerOpen, setIsMoviePlayerOpen] = useState(false);

  // Manejar la lógica de perfiles cuando el usuario se autentica
  useEffect(() => {
    if (currentUser) {
      const savedUserId = localStorage.getItem('auth_user_id');
      const currentUserId = currentUser.uid;
      
      console.log('🎯 MainApp - Usuario autenticado:', currentUserId);
      console.log('🎯 MainApp - Profiles disponibles:', profiles.length);
      
      // Si es un usuario diferente, limpiar perfil actual
      if (savedUserId && savedUserId !== currentUserId) {
        clearCurrentProfile();
      }
      
      // Si no hay perfiles, crear los por defecto
      if (profiles.length === 0) {
        console.log('🎯 MainApp - No hay perfiles, creando por defecto');
        forceCreateDefaultProfiles();
      }
      
      // Mostrar selector de perfiles si no hay perfil actual
      if (!currentProfile) {
        setShowProfileSelector(true);
      }
    }
  }, [currentUser, currentProfile, clearCurrentProfile, profiles.length, forceCreateDefaultProfiles]);

  // Ocultar selector cuando se selecciona un perfil
  useEffect(() => {
    if (currentProfile && showProfileSelector) {
      setShowProfileSelector(false);
    }
  }, [currentProfile, showProfileSelector]);

  if (!currentUser) {
    return <Login />;
  }

  console.log('🎯 MainApp - showProfileSelector:', showProfileSelector);
  console.log('🎯 MainApp - currentProfile:', currentProfile);
  console.log('🎯 MainApp - currentUser:', currentUser);

  if (showProfileSelector || !currentProfile) {
    console.log('🎯 MainApp - Mostrando ProfileSelector');
    return <ProfileSelector onProfileSelected={() => setShowProfileSelector(false)} />;
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  const handlePlay = (item: ContentItem) => {
    if (item.streamUrl) {
      // Abrir modal Info y reproducir podría ir aquí; por ahora hacemos open en nueva pestaña
      window.open(item.streamUrl, '_blank');
    } else {
      alert('Este contenido no tiene un enlace de reproducción configurado.');
    }
  };

  const handleInfo = (item: ContentItem) => {
    setSelectedItem(item);
    setIsInfoModalOpen(true);
  };

  const handlePlayInPage = (item: ContentItem) => {
    if (item.streamUrl) {
      setCurrentMovie(item);
      setIsMoviePlayerOpen(true);
      setIsInfoModalOpen(false);
    } else {
      alert('Este contenido no tiene un enlace de reproducción configurado.');
    }
  };

  const handleCloseMoviePlayer = () => {
    setIsMoviePlayerOpen(false);
    setCurrentMovie(null);
  };

  const filterItems = (items: ContentItem[]) => {
    if (!searchQuery.trim()) return items;
    return items.filter((it) =>
      it.title.toLowerCase().includes(searchQuery) ||
      it.genre.toLowerCase().includes(searchQuery) ||
      String(it.year).includes(searchQuery)
    );
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-8">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4 px-4">
                <h2 className="text-2xl font-bold text-white">{t('popular-movies')}</h2>
                <button
                  onClick={() => setActiveSection('movies')}
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                >
                  {t('see-more')}
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
                {filterItems(mockMovies).slice(0, 5).map((item) => (
                  <div key={item.id} className="w-full">
                    <ContentCard item={item} onPlay={handlePlay} onInfo={handleInfo} />
                  </div>
                ))}
              </div>
            </div>
            <ContentSection
              title={t('trending-series')}
              items={filterItems(mockSeries)}
              onPlay={handlePlay}
              onInfo={handleInfo}
            />
            <ContentSection
              title={t('for-kids')}
              items={filterItems(mockKidsContent)}
              onPlay={handlePlay}
              onInfo={handleInfo}
            />
          </div>
        );
      case 'movies':
        return (
          <ContentSection
            title={t('movies')}
            items={filterItems(mockMovies)}
            onPlay={handlePlay}
            onInfo={handleInfo}
          />
        );
      case 'series':
        return (
          <ContentSection
            title={t('series')}
            items={filterItems(mockSeries)}
            onPlay={handlePlay}
            onInfo={handleInfo}
          />
        );
      case 'kids':
        return (
          <ContentSection
            title={t('kids')}
            items={filterItems(mockKidsContent)}
            onPlay={handlePlay}
            onInfo={handleInfo}
          />
        );
      case 'comedy':
        return (
          <ContentSection
            title={t('comedy')}
            items={mockComedyContent}
            onPlay={handlePlay}
            onInfo={handleInfo}
          />
        );
      case 'live-tv':
        return <LiveTV />;
      default:
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-white mb-4">{t('section-development')}</h2>
            <p className="text-gray-400">{t('coming-soon')}</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header
        onSearch={handleSearch}
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />
      
      <Sidebar
        isOpen={isMenuOpen}
        activeSection={activeSection}
        onSectionChange={(section) => {
          setActiveSection(section);
          setIsMenuOpen(false);
        }}
      />

      <main className={`transition-all duration-300 ${isMenuOpen ? 'ml-64' : 'ml-0'} pt-6`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderContent()}
        </div>
      </main>

      <InfoModal
        item={selectedItem}
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
        onPlay={handlePlay}
        onPlayInPage={handlePlayInPage}
      />

      {isMoviePlayerOpen && currentMovie && (
        <MoviePlayer
          movie={currentMovie}
          onClose={handleCloseMoviePlayer}
        />
      )}

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default MainApp;
