// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardPage from './pages/DashboardPage';
import ScriptingPage from './pages/ScriptingPage';
import AudioTranscriptionPage from './pages/AudioTranscriptionPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-neutral-light">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-neutral-light p-6 md:p-8">
            <Routes>
              <Route path="/" element={<Navigate replace to="/dashboard" />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/script-editor" element={<ScriptingPage />} />
              <Route path="/audio-transcription" element={<AudioTranscriptionPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              {/* Add more routes as needed */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
