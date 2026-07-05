import React, { useState } from 'react';
import { MapPin, Navigation, Bookmark, Share2 } from 'lucide-react';

export const TabMap: React.FC = () => {
  const [zoom, setZoom] = useState(13);

  return (
    <div className="space-y-6">
      {/* Breadcrumbs & Title */}
      <div className="pt-2">
        <span className="text-xs text-google-gray-text dark:text-google-gray-darktext block mb-1">
          https://google.com/maps › Greater_Noida
        </span>
        <h2 className="text-lg md:text-xl font-normal text-google-blue hover:underline leading-tight mb-1 cursor-pointer">
          Aman's Current Location: Greater Noida, Uttar Pradesh, India
        </h2>
        <p className="text-[13.5px] text-google-gray-text dark:text-google-gray-darktext leading-relaxed font-normal">
          Based in Greater Noida, Uttar Pradesh, India — open to remote roles and on-site opportunities across the NCR.
        </p>
      </div>

      {/* Styled Interactive SVG Map Card */}
      <div className="border border-google-gray-border dark:border-google-gray-darkborder bg-white dark:bg-google-dark-panel rounded-2xl overflow-hidden transition-colors shadow-sm max-w-2xl">
        {/* Map Header details */}
        <div className="p-4 border-b border-google-gray-border dark:border-google-gray-darkborder bg-gray-50 dark:bg-google-dark-body/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-google-red/10 flex items-center justify-center text-google-red">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-gray-900 dark:text-white">
                Greater Noida
              </h3>
              <p className="text-xs text-google-gray-text dark:text-google-gray-darktext">
                Uttar Pradesh, India (Delhi NCR)
              </p>
            </div>
          </div>
          <div className="text-xs text-google-gray-text dark:text-google-gray-darktext sm:text-right font-mono">
            28.4744° N, 77.5040° E
          </div>
        </div>

        {/* Map SVG Area */}
        <div className="relative h-72 md:h-96 bg-blue-50 dark:bg-[#18191a] flex items-center justify-center overflow-hidden select-none">
          {/* Map Grid/Vector Simulation */}
          <svg className="absolute inset-0 w-full h-full text-blue-100 dark:text-white/5 opacity-50" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Roads Layout */}
            <path d="M 0 100 Q 150 150 400 120 T 700 80" fill="none" stroke="#dadce0" strokeWidth="12" className="dark:stroke-google-gray-darkborder" />
            <path d="M 0 100 Q 150 150 400 120 T 700 80" fill="none" stroke="#ffffff" strokeWidth="8" className="dark:stroke-zinc-700" />

            <path d="M 120 0 Q 200 200 180 400" fill="none" stroke="#dadce0" strokeWidth="16" className="dark:stroke-google-gray-darkborder" />
            <path d="M 120 0 Q 200 200 180 400" fill="none" stroke="#ffffff" strokeWidth="12" className="dark:stroke-zinc-700" />

            <path d="M 300 0 L 350 400" fill="none" stroke="#dadce0" strokeWidth="8" className="dark:stroke-google-gray-darkborder" />
            <path d="M 300 0 L 350 400" fill="none" stroke="#ffffff" strokeWidth="6" className="dark:stroke-zinc-700" />

            <path d="M 0 350 C 100 370 200 320 350 360 T 700 340 L 700 400 L 0 400 Z" fill="#b9ddfc" className="dark:fill-sky-950/40" />

            <circle cx="480" cy="180" r="70" fill="#cbf0d1" className="dark:fill-emerald-950/20" />
            <rect x="50" y="20" width="80" height="90" rx="10" fill="#cbf0d1" className="dark:fill-emerald-950/20" />
          </svg>

          {/* Red Pin inside center */}
          <div className="absolute flex flex-col items-center animate-bounce">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-google-red opacity-30 animate-ping" />
              <MapPin className="w-10 h-10 text-google-red fill-current relative" />
            </div>
            <div className="mt-1 bg-black/80 dark:bg-white/90 text-white dark:text-black font-semibold text-[10px] md:text-xs px-2.5 py-1 rounded-full shadow-md whitespace-nowrap">
              Aman Pal's Location
            </div>
          </div>

          {/* Map Controls */}
          <div className="absolute bottom-4 right-4 flex flex-col gap-1.5 shadow-md">
            <button
              onClick={() => setZoom(z => Math.min(z + 1, 18))}
              className="w-8 h-8 rounded bg-white dark:bg-google-dark-panel hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-800 dark:text-white font-bold flex items-center justify-center border border-google-gray-border dark:border-google-gray-darkborder cursor-pointer select-none"
            >
              +
            </button>
            <button
              onClick={() => setZoom(z => Math.max(z - 1, 8))}
              className="w-8 h-8 rounded bg-white dark:bg-google-dark-panel hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-800 dark:text-white font-bold flex items-center justify-center border border-google-gray-border dark:border-google-gray-darkborder cursor-pointer select-none"
            >
              -
            </button>
          </div>

          <span className="absolute bottom-4 left-4 px-2 py-0.5 bg-black/60 text-white rounded text-[10px]">
            Zoom: {zoom}x
          </span>
        </div>

        {/* Map Actions Footer */}
        <div className="p-4 border-t border-google-gray-border dark:border-google-gray-darkborder bg-gray-50 dark:bg-google-dark-body/50 flex justify-around text-xs md:text-sm text-google-blue font-medium">
          <a
            href="https://maps.google.com/?q=Greater+Noida"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:underline"
          >
            <Navigation className="w-4 h-4" />
            <span>Directions</span>
          </a>
          <button className="flex items-center gap-1.5 hover:underline cursor-pointer">
            <Bookmark className="w-4 h-4" />
            <span>Save Location</span>
          </button>
          <button className="flex items-center gap-1.5 hover:underline cursor-pointer">
            <Share2 className="w-4 h-4" />
            <span>Share Map</span>
          </button>
        </div>
      </div>
    </div>
  );
};
