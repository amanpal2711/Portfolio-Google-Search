import React from 'react';
import { Play, ExternalLink } from 'lucide-react';

interface VideoCard {
  id: number;
  title: string;
  date: string;
  link: string;
  bgClass: string;
}

export const ProjectVideos: React.FC = () => {
  const videos: VideoCard[] = [
    {
      id: 1,
      title: "Workspace Agent — Demo Walkthrough",
      date: "2026",
      link: "https://github.com/amanpal2711",
      bgClass: "from-blue-600 to-indigo-900",
    },
    {
      id: 2,
      title: "Job Portal System — Live Demo Tour",
      date: "2025",
      link: "https://github.com/amanpal2711/HireFlow---Job-Portal-System",
      bgClass: "from-teal-500 to-emerald-800",
    },
    {
      id: 3,
      title: "AI Travel Planner — Trip Planning Flow",
      date: "2025",
      link: "https://github.com/amanpal2711/Ai-Powered-Travel-Itenerary-Planner-",
      bgClass: "from-orange-500 to-red-800",
    },
  ];

  return (
    <div className="my-8">
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-normal text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <Play className="w-5 h-5 fill-current text-google-red" />
        <span>Project videos</span>
      </h2>

      {/* Grid of Video Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {videos.map((vid) => (
          <a
            key={vid.id}
            href={vid.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-white dark:bg-google-dark-panel border border-google-gray-border dark:border-google-gray-darkborder rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            {/* Thumbnail Container */}
            <div className={`relative h-28 bg-gradient-to-br ${vid.bgClass} flex items-center justify-center text-white overflow-hidden`}>
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-black" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/25 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center bg-white/90 dark:bg-black/80 rounded-full text-google-blue group-hover:scale-105 transition-transform duration-200 shadow-md">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="p-3 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-medium leading-snug text-google-blue group-hover:underline line-clamp-2 mb-1">
                  {vid.title}
                </h3>
                <div className="text-xs text-google-gray-text dark:text-google-gray-darktext">
                  Portfolio · Aman Pal
                </div>
              </div>
              <div className="text-xs text-google-gray-text dark:text-google-gray-darktext mt-2 flex items-center justify-between">
                <span>{vid.date}</span>
                <span className="flex items-center gap-0.5 text-google-blue">
                  View <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-4 flex">
        <a
          href="https://github.com/amanpal2711"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 border border-google-gray-border dark:border-google-gray-darkborder rounded-full text-sm font-medium text-google-blue hover:bg-google-blue/5 transition-colors dark:text-google-blue dark:hover:bg-google-blue/10"
        >
          View all
        </a>
      </div>
    </div>
  );
};
