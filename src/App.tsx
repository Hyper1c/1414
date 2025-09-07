import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ProfileProvider } from './contexts/ProfileContext';
import { AuthProvider } from './contexts/AuthContext';
import MainApp from './components/MainApp';

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <ProfileProvider>
          <Router>
            <MainApp />
          </Router>
        </ProfileProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
