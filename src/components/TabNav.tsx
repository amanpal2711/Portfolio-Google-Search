import React from 'react';
import { NavLink } from 'react-router-dom';
import { Search, PenLine, LayoutGrid, Phone, MapPin } from 'lucide-react';

export const TabNav: React.FC = () => {
  const tabs = [
    { name: 'About', path: '/', icon: Search },
    { name: 'Skills', path: '/skills', icon: PenLine },
    { name: 'Projects', path: '/projects', icon: LayoutGrid },
    { name: 'Contact', path: '/contact', icon: Phone },
    { name: 'Map', path: '/map', icon: MapPin },
  ];

  return (
    <nav className="border-b border-google-gray-border dark:border-google-gray-darkborder bg-white dark:bg-google-dark-body px-4 transition-colors duration-200">
      <div className="flex overflow-x-auto hide-scrollbar pl-0 md:pl-[170px] space-x-6 md:space-x-8">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <NavLink
              key={tab.name}
              to={tab.path}
              className={({ isActive }) =>
                `flex items-center gap-2 py-3 px-1 border-b-[3px] text-sm md:text-[15px] font-medium transition-all duration-150 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'border-google-blue text-google-blue'
                    : 'border-transparent text-google-gray-text dark:text-google-gray-darktext hover:text-gray-900 dark:hover:text-white'
                }`
              }
            >
              <Icon className="w-4 h-4" />
              <span>{tab.name}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
