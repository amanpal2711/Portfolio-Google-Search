import React from 'react';
import { Linkedin, Github, Instagram, Link } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, setDarkMode }) => {
  return (
    <footer className="w-full mt-auto bg-gray-100 dark:bg-google-dark-panel border-t border-google-gray-border dark:border-google-gray-darkborder text-[13px] text-google-gray-text dark:text-google-gray-darktext transition-colors duration-200">
      {/* Top Location Bar */}
      <div className="px-4 md:px-[170px] py-3 border-b border-google-gray-border dark:border-google-gray-darkborder flex items-center gap-2">
        <span className="w-2.5 h-2.5 bg-gray-400 dark:bg-gray-500 rounded-full inline-block" />
        <span className="font-semibold text-gray-700 dark:text-gray-300">India</span>
        <span className="text-gray-400 dark:text-gray-500">|</span>
        <span>Greater Noida, Uttar Pradesh</span>
        <span className="text-gray-400 dark:text-gray-500">-</span>
        <span className="text-google-blue cursor-default">From your IP address</span>
      </div>

      {/* Bottom Links Bar */}
      <div className="px-4 md:px-[170px] py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left copyright and mock links */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
          <span className="font-medium">amanpal2711@gmail.com</span>
          <a
            href="https://iaman.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Portfolio
          </a>
          <a
            href="https://github.com/amanpal2711"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Source Code
          </a>
        </div>

        {/* Center theme toggle text */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-white cursor-pointer select-none font-medium"
        >
          <span>Dark theme:</span>
          <span className="text-google-blue font-semibold uppercase">
            {darkMode ? 'on' : 'off'}
          </span>
        </button>

        {/* Right social icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/amanpal2711/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-google-blue transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/amanpal2711"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-google-blue transition-colors"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://iaman.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-google-blue transition-colors"
            title="Portfolio Website"
          >
            <Link className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/_____aman_pal_____?igsh=aDNobWUyeWZiOXF1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-google-blue transition-colors"
            title="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
