import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useProfiles } from '../contexts/ProfileContext';
import Login from './Login';
import Header from './Header';
import Sidebar from './Sidebar';
import ContentSection from './ContentSection';
import LiveTV from './LiveTV';
import InfoModal from './InfoModal';
import ProfileSelector from './ProfileSelector';
import { mockMovies, mockSeries, mockKidsContent, mockComedyContent, ContentItem } from '../data/mockContent';

const MainApp: React.FC = () => {
  const { currentUser } = useAuth();
  const { t } = useLanguage();
  const { currentProfile } = useProfiles();
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  if (!currentUser) {
    return <Login />;
  }

  if (!currentProfile) {
    return <ProfileSelector />;
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Implement search logic here
  };

  const handlePlay = (item: ContentItem) => {
    console.log('Playing:', item.title);
    // Implement video player logic here
  };

  const handleInfo = (item: ContentItem) => {
    setSelectedItem(item);
    setIsInfoModalOpen(true);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-8">
            <ContentSection
              title={t('popular-movies')}
              items={mockMovies}
              onPlay={handlePlay}
              onInfo={handleInfo}
            />
            <ContentSection
              title={t('trending-series')}
              items={mockSeries}
              onPlay={handlePlay}
              onInfo={handleInfo}
            />
            <ContentSection
              title={t('for-kids')}
              items={mockKidsContent}
              onPlay={handlePlay}
              onInfo={handleInfo}
            />
          </div>
        );
      case 'movies':
        return (
          <ContentSection
            title={t('movies')}
            items={mockMovies}
            onPlay={handlePlay}
            onInfo={handleInfo}
          />
        );
      case 'series':
        return (
          <ContentSection
            title={t('series')}
            items={mockSeries}
            onPlay={handlePlay}
            onInfo={handleInfo}
          />
        );
      case 'kids':
        return (
          <ContentSection
            title={t('kids')}
            items={mockKidsContent}
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
      />

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
