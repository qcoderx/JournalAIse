// src/components/Header.js
import React from 'react';
import { UserCircleIcon, BellIcon } from '@heroicons/react/24/outline';

function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-10">
      <div>
        {/* Potentially breadcrumbs or current page title */}
        <h1 className="text-xl font-semibold text-neutral-dark">Welcome, Journalist!</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 hover:text-primary">
          <BellIcon className="h-6 w-6" />
        </button>
        <button className="text-gray-500 hover:text-primary">
          <UserCircleIcon className="h-8 w-8" />
        </button>
      </div>
    </header>
  );
}

export default Header;
