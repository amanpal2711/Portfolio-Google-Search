import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, GraduationCap, Award, Briefcase, Calendar } from 'lucide-react';
import { PeopleAlsoAsk } from './PeopleAlsoAsk';
import { ProjectVideos } from './ProjectVideos';

export const TabAbout: React.FC = () => {
  const navigate = useNavigate();

  const relatedSearches = [
    { label: "Aman's Skills", path: "/skills" },
    { label: "Aman's Projects", path: "/projects" },
    { label: "Contact Aman", path: "/contact" },
    { label: "Aman's Location", path: "/map" },
  ];

  return (
    <div className="space-y-8 pt-2">
      {/* Main Snippet - Aman Pal Profile */}
      <div className="group">
        <span className="text-xs text-google-gray-text dark:text-google-gray-darktext block mb-1">
          https://iaman.vercel.app › about
        </span>
        <h2 className="text-lg md:text-xl font-normal text-google-blue group-hover:underline leading-tight mb-1 cursor-pointer">
          Aman Pal: Full Stack Developer | Software Engineer
        </h2>
        <p className="text-[13.5px] text-google-gray-text dark:text-google-gray-darktext leading-relaxed font-normal">
          B.Tech graduate in AI & Data Science (2026), passionate about becoming a skilled full-stack developer — proficient in the MERN stack, TypeScript, and Java, with a strong foundation in building clean, scalable web applications

        </p>
      </div>

      {/* Work Experience Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="w-5 h-5 text-google-blue" />
          <h2 className="text-lg md:text-xl font-normal text-gray-900 dark:text-white">
            Work Experience
          </h2>
        </div>
        
        <div className="border border-google-gray-border dark:border-google-gray-darkborder rounded-2xl p-5 bg-white dark:bg-google-dark-panel">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-2">
            <div>
              <h3 className="font-semibold text-sm md:text-base text-gray-900 dark:text-white">
                Java Full Stack Developer Intern
              </h3>
              <p className="text-sm text-google-blue font-medium mt-0.5">
                Croma Campus, Greater Noida
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs text-google-gray-text dark:text-google-gray-darktext sm:text-right flex-shrink-0 self-start sm:self-auto">
              <Calendar className="w-3.5 h-3.5" />
              <span>May 2025 - Jun 2025</span>
            </div>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-gray-700 dark:text-gray-300">
            <li>Developed a full-stack web app with JWT auth and role-based access for 2 user types, handling 100+ concurrent test users.</li>
            <li>Built 12 REST API endpoints for CRUD operations, integrated MySQL, and ensured reliability with Postman and Jest unit tests (90% coverage); accelerated query performance by 25% via indexing.</li>
            <li>Optimised frontend load time 20% (Lighthouse 92) with lazy loading/code splitting; communicated progress in daily Agile stand-ups, lowering post-deployment bugs by 15%.</li>
          </ul>
        </div>
      </div>

      {/* Education Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="w-5 h-5 text-google-blue" />
          <h2 className="text-lg md:text-xl font-normal text-gray-900 dark:text-white">
            Education
          </h2>
        </div>
        
        <div className="border border-google-gray-border dark:border-google-gray-darkborder rounded-2xl p-5 bg-white dark:bg-google-dark-panel">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-2">
            <div>
              <h3 className="font-semibold text-sm md:text-base text-gray-900 dark:text-white">
                B.Tech, Artificial Intelligence & Data Science
              </h3>
              <p className="text-sm text-google-blue font-medium mt-0.5">
                IIMT College of Engineering, Greater Noida, UP
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs text-google-gray-text dark:text-google-gray-darktext sm:text-right flex-shrink-0 self-start sm:self-auto">
              <Calendar className="w-3.5 h-3.5" />
              <span>2022 - 2026</span>
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            Graduating in 2026 with hands-on experience across REST APIs, database integrations, and responsive front-ends, having engineered 3 full-stack MERN applications serving 200+ users combined.
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-google-blue" />
          <h2 className="text-lg md:text-xl font-normal text-gray-900 dark:text-white">
            Projects
          </h2>
        </div>
        
        <div className="space-y-6">
          {/* Workspace Agent */}
          <div className="group border-l-4 border-google-blue pl-4">
            <span className="text-[11px] text-google-gray-text dark:text-google-gray-darktext block">
              https://github.com/amanpal2711/workspace-agent
            </span>
            <div className="flex items-center justify-between mt-0.5">
              <h3 className="font-semibold text-sm md:text-base text-google-blue group-hover:underline cursor-pointer flex items-center gap-2">
                <span>Workspace Agent</span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-bold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full animate-pulse border border-green-200 dark:border-green-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Currently Working
                </span>
              </h3>
              <span className="text-xs text-google-gray-text dark:text-google-gray-darktext font-medium">
                2026
              </span>
            </div>
            <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 mt-1 leading-relaxed">
              A multi-domain AI assistant using the Claude API's tool-calling to orchestrate Gmail, Google Calendar, Google Sheets and GitHub, with a human-approval gate before any action executes. <strong className="font-semibold text-gray-900 dark:text-white">React, Node.js, Claude API, Tool-calling</strong>.
            </p>
          </div>

          {/* Job Portal System */}
          <div className="group border-l-4 border-google-red pl-4">
            <span className="text-[11px] text-google-gray-text dark:text-google-gray-darktext block">
              https://github.com/amanpal2711/HireFlow---Job-Portal-System
            </span>
            <div className="flex items-center justify-between mt-0.5">
              <h3 className="font-semibold text-sm md:text-base text-google-blue group-hover:underline cursor-pointer flex items-center gap-2 flex-wrap">
                <span>Job Portal System</span>
                <a
                  href="https://hire-flow-kappa.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-bold bg-blue-100 dark:bg-blue-900/30 text-google-blue dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-800 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-google-blue animate-pulse" />
                  Live Link
                </a>
              </h3>
              <span className="text-xs text-google-gray-text dark:text-google-gray-darktext font-medium">
                2025
              </span>
            </div>
            <div className="flex gap-3 mt-1 text-xs">
              <a href="https://github.com/amanpal2711/HireFlow---Job-Portal-System" target="_blank" rel="noreferrer" className="text-google-blue hover:underline font-semibold">GitHub</a>
            </div>
            <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 mt-1.5 leading-relaxed">
              Architected a MERN portal with role-based JWT auth, serving 500+ listings and 300+ users. Designed 15 REST endpoints and MongoDB schemas, cutting API response time 30% via indexing while tracking 50+ applications per job. Deployed frontend on Vercel and backend on Render. <strong className="font-semibold text-gray-900 dark:text-white">MongoDB, Express.js, React.js, Node.js, JWT, Tailwind CSS</strong>.
            </p>
          </div>

          {/* AI Travel Planner */}
          <div className="group border-l-4 border-google-yellow pl-4">
            <span className="text-[11px] text-google-gray-text dark:text-google-gray-darktext block">
              https://github.com/amanpal2711/Ai-Powered-Travel-Itenerary-Planner-
            </span>
            <div className="flex items-center justify-between mt-0.5">
              <h3 className="font-semibold text-sm md:text-base text-google-blue group-hover:underline cursor-pointer flex items-center gap-2 flex-wrap">
                <span>AI-Powered Travel Itinerary Planner</span>
                <a
                  href="https://orbitra2.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-bold bg-blue-100 dark:bg-blue-900/30 text-google-blue dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-800 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-google-blue animate-pulse" />
                  Live Link
                </a>
              </h3>
              <span className="text-xs text-google-gray-text dark:text-google-gray-darktext font-medium">
                2025
              </span>
            </div>
            <div className="flex gap-3 mt-1 text-xs">
              <a href="https://github.com/amanpal2711/Ai-Powered-Travel-Itenerary-Planner-" target="_blank" rel="noreferrer" className="text-google-blue hover:underline font-semibold">GitHub</a>
            </div>
            <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 mt-1.5 leading-relaxed">
              AI-driven planner generating personalised itineraries via the Gemini API (200+ requests, &lt;2s response). JWT-secured REST APIs and normalised MongoDB collections cut data redundancy 25%; UI scored Lighthouse 95+ and is 100% mobile-usable. <strong className="font-semibold text-gray-900 dark:text-white">React.js, Node.js, Express.js, MongoDB, Gemini AI API, Tailwind CSS</strong>.
            </p>
          </div>

          {/* Real-Time Chat Application */}
          <div className="group border-l-4 border-google-green pl-4">
            <span className="text-[11px] text-google-gray-text dark:text-google-gray-darktext block">
              https://github.com/amanpal2711/RTCA
            </span>
            <div className="flex items-center justify-between mt-0.5">
              <h3 className="font-semibold text-sm md:text-base text-google-blue group-hover:underline cursor-pointer">
                Real-Time Chat Application
              </h3>
              <span className="text-xs text-google-gray-text dark:text-google-gray-darktext font-medium">
                2025
              </span>
            </div>
            <div className="flex gap-3 mt-1 text-xs">
              <a href="https://github.com/amanpal2711/RTCA" target="_blank" rel="noreferrer" className="text-google-blue hover:underline font-semibold">GitHub</a>
            </div>
            <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 mt-1.5 leading-relaxed">
              Chat app supporting 100+ concurrent users with &lt;100ms latency via Socket.io, secured with JWT and HTTP-only cookies. State managed with Zustand (cut boilerplate 40%); typing indicators lifted engagement 20% in testing. <strong className="font-semibold text-gray-900 dark:text-white">React.js, Node.js, Express.js, Socket.io, MongoDB, Tailwind CSS</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* People Also Ask (Accordion FAQ) */}
      <PeopleAlsoAsk />

      {/* Videos Section */}
      <ProjectVideos />

      {/* Related Searches Section */}
      <div className="my-8 border-t border-google-gray-border dark:border-google-gray-darkborder pt-6">
        <h2 className="text-xl md:text-2xl font-normal text-gray-900 dark:text-white mb-4">
          Related searches
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {relatedSearches.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                navigate(item.path);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 px-5 py-3 border border-google-gray-border dark:border-google-gray-darkborder rounded-full hover:bg-gray-50 dark:hover:bg-google-dark-panel text-left text-sm text-google-blue font-medium transition-all cursor-pointer shadow-sm hover:shadow"
            >
              <Search className="w-4 h-4 text-google-gray-text dark:text-google-gray-darktext" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
