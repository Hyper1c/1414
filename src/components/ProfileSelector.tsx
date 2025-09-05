import React, { useState } from 'react';
import { useProfiles } from '../contexts/ProfileContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Plus, Edit, Trash2, Settings } from 'lucide-react';

const ProfileSelector: React.FC = () => {
  const { profiles, currentProfile, selectProfile, addProfile, deleteProfile, createDefaultProfiles } = useProfiles();
  const { t } = useLanguage();
  const [isAddingProfile, setIsAddingProfile] = useState(false);
  const [newProfileName, setNewProfileName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('👤');

  const avatars = ['👤', '👶', '👨‍👩‍👧‍👦', '👨', '👩', '👴', '👵', '👨‍💻', '👩‍💻', '🎭', '🎨', '🎮', '🏃‍♂️', '🚴‍♀️'];

  React.useEffect(() => {
    if (profiles.length === 0) {
      createDefaultProfiles();
    }
  }, [profiles.length, createDefaultProfiles]);

  const handleAddProfile = () => {
    if (newProfileName.trim()) {
      addProfile({
        name: newProfileName.trim(),
        avatar: selectedAvatar,
        isAdult: true,
        isActive: false,
        preferences: {
          language: 'es',
          autoplay: true,
          subtitles: false,
          quality: 'high'
        }
      });
      setNewProfileName('');
      setSelectedAvatar('👤');
      setIsAddingProfile(false);
    }
  };

  const handleDeleteProfile = (profileId: string) => {
    if (window.confirm(t('delete-profile-confirm'))) {
      deleteProfile(profileId);
    }
  };

  if (currentProfile) {
    return (
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">SirNet</h1>
          <div className="mb-8">
            <div className="text-6xl mb-4">{currentProfile.avatar}</div>
            <h2 className="text-2xl text-white mb-2">{currentProfile.name}</h2>
            <p className="text-gray-400">{t('welcome')}</p>
          </div>
          <button
            onClick={() => selectProfile(null!)}
            className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            {t('logout')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-6xl font-bold text-white mb-12">SirNet</h1>
        
        <h2 className="text-2xl text-white mb-8">{t('select-profile')}</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="group cursor-pointer transition-transform hover:scale-105"
              onClick={() => selectProfile(profile)}
            >
              <div className="relative">
                <div className="w-24 h-24 bg-gray-800 rounded-lg flex items-center justify-center text-4xl mb-3 group-hover:bg-gray-700 transition-colors">
                  {profile.avatar}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteProfile(profile.id);
                  }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  title={t('delete-profile')}
                >
                  <Trash2 size={12} />
                </button>
              </div>
              <p className="text-white text-sm">{profile.name}</p>
            </div>
          ))}
          
          {profiles.length < 5 && (
            <div
              className="cursor-pointer transition-transform hover:scale-105"
              onClick={() => setIsAddingProfile(true)}
            >
              <div className="w-24 h-24 bg-gray-800 rounded-lg flex items-center justify-center text-4xl mb-3 hover:bg-gray-700 transition-colors">
                <Plus size={32} className="text-gray-400" />
              </div>
              <p className="text-gray-400 text-sm">{t('add-profile')}</p>
            </div>
          )}
        </div>

        {isAddingProfile && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-gray-900 rounded-lg p-6 max-w-md w-full mx-4">
              <h3 className="text-xl text-white mb-4">{t('add-profile')}</h3>
              
              <div className="mb-4">
                <label className="block text-white text-sm mb-2">{t('profile-avatar')}</label>
                <div className="grid grid-cols-7 gap-2">
                  {avatars.map((avatar) => (
                    <button
                      key={avatar}
                      onClick={() => setSelectedAvatar(avatar)}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl transition-colors ${
                        selectedAvatar === avatar ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
                      }`}
                    >
                      {avatar}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-white text-sm mb-2">{t('profile-name')}</label>
                <input
                  type="text"
                  value={newProfileName}
                  onChange={(e) => setNewProfileName(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                  placeholder={t('profile-name')}
                  maxLength={20}
                />
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={() => setIsAddingProfile(false)}
                  className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  {t('cancel')}
                </button>
                <button
                  onClick={handleAddProfile}
                  disabled={!newProfileName.trim()}
                  className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                >
                  {t('save-profile')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileSelector;
