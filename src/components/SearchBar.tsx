import React from 'react';
import { Search, X, Sun, Moon } from 'lucide-react';

interface SearchBarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ darkMode, setDarkMode }) => {
  return (
    <header className="sticky top-0 z-50 flex flex-col md:flex-row md:items-center justify-between px-4 py-4 md:py-6 bg-white dark:bg-google-dark-body border-b border-google-gray-border dark:border-google-gray-darkborder gap-4 transition-colors duration-200">
      <div className="flex items-center justify-between md:justify-start gap-6 w-full md:w-auto">
        {/* Google Logo */}
        <div className="flex items-center select-none cursor-pointer">
          <span className="text-2xl md:text-3xl font-medium tracking-tight font-sans">
            <span className="text-google-blue">G</span>
            <span className="text-google-red">o</span>
            <span className="text-google-yellow">o</span>
            <span className="text-google-blue">g</span>
            <span className="text-google-green">l</span>
            <span className="text-google-red">e</span>
          </span>
        </div>

        {/* Search Input Box */}
        <div className="flex-grow md:flex-initial md:w-[600px] flex items-center bg-white dark:bg-google-dark-search-bg border border-google-gray-border dark:border-google-gray-darkborder hover:shadow-md focus-within:shadow-md rounded-full px-4 py-2 md:py-2.5 transition-shadow">
          <input
            type="text"
            value="Aman Pal"
            readOnly
            className="flex-grow bg-transparent text-sm md:text-base text-gray-900 dark:text-white font-normal outline-none cursor-default select-none"
          />
          <div className="flex items-center gap-3 text-google-gray-text dark:text-google-gray-darktext border-l border-google-gray-border dark:border-google-gray-darkborder pl-3 ml-2">
            <div title="Clear">
              <X className="w-4 h-4 md:w-5 h-5 cursor-pointer hover:text-google-red transition-colors" />
            </div>
            <div title="Search">
              <Search className="w-4 h-4 md:w-5 h-5 cursor-pointer text-google-blue hover:opacity-80" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center justify-end gap-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-google-dark-panel text-google-gray-text dark:text-google-gray-darktext transition-colors"
          aria-label="Toggle Theme"
          title="Toggle Light/Dark Theme"
        >
          {darkMode ? <Sun className="w-5 h-5 text-google-yellow" /> : <Moon className="w-5 h-5 text-google-gray-text" />}
        </button>

        {/* Avatar with Custom Tooltip */}
        <div className="relative group">
          <div className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-purple-600 rounded-full text-white font-semibold text-sm select-none border border-white/20 shadow-sm cursor-pointer hover:opacity-90">
            A
          </div>
          {/* Custom Tooltip Card */}
          <div className="absolute right-0 top-10 w-60 p-3 bg-white dark:bg-google-dark-panel border border-google-gray-border dark:border-google-gray-darkborder rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 text-left pointer-events-none">
            <p className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Google Account</p>
            <p className="text-sm font-bold text-gray-900 dark:text-white mt-1">Aman Pal</p>
            <p className="text-xs text-google-gray-text dark:text-google-gray-darktext truncate mt-0.5">amanpal2711@gmail.com</p>
          </div>
        </div>
      </div>
    </header>
  );
};
