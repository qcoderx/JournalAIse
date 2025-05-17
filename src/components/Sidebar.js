// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, PencilSquareIcon, MicrophoneIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'; // Example icons

// Replace with your actual logo
const Logo = () => (
  <div className="text-white text-2xl font-bold p-4 mb-5 flex items-center justify-center">
    {/* <img src="/path/to/your/logo.svg" alt="journalAIse Logo" className="h-10 w-auto" /> */}
    journalAIse
  </div>
);

const NavItem = ({ to, icon: Icon, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-150 ease-in-out
       ${isActive
        ? 'bg-primary text-white shadow-lg'
        : 'text-gray-300 hover:bg-blue-700 hover:text-white'
      }`
    }
  >
    <Icon className="h-6 w-6 mr-3" />
    {children}
  </NavLink>
);

function Sidebar() {
  return (
    <div className="w-64 bg-neutral-dark text-white flex flex-col space-y-2 p-4 shadow-lg">
      <Logo />
      <nav className="flex-grow">
        <ul className="space-y-2">
          <li><NavItem to="/dashboard" icon={HomeIcon}>Dashboard</NavItem></li>
          <li><NavItem to="/script-editor" icon={PencilSquareIcon}>Script Editor</NavItem></li>
          <li><NavItem to="/audio-transcription" icon={MicrophoneIcon}>Audio Transcription</NavItem></li>
          <li><NavItem to="/settings" icon={Cog6ToothIcon}>Settings</NavItem></li>
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} journalAIse</p>
      </div>
    </div>
  );
}

export default Sidebar;
