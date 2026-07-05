import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  github?: string | null;
  demo?: string | null;
  desc: string;
  tags: string[];
}

export const TabProjects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Workspace Agent",
      desc: "A multi-domain AI assistant using the Claude API's tool-calling to orchestrate Gmail, Google Calendar, Google Sheets and GitHub, with a human-approval gate before any action executes.",
      tags: ["React", "Node.js", "Claude API", "Tool-calling"],
      github: null,
      demo: null,
    },
    {
      title: "Job Portal System",
      desc: "Architected a MERN portal with role-based JWT auth, serving 500+ listings and 300+ users. Designed 15 REST endpoints and MongoDB schemas, cutting API response time 30% via indexing while tracking 50+ applications per job. Deployed frontend on Vercel and backend on Render.",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Tailwind CSS"],
      github: "https://github.com/amanpal2711/HireFlow---Job-Portal-System",
      demo: "https://hire-flow-kappa.vercel.app/",
    },
    {
      title: "AI-Powered Travel Itinerary Planner",
      desc: "AI-driven planner generating personalised itineraries via the Gemini API (200+ requests, <2s response). JWT-secured REST APIs and normalised MongoDB collections cut data redundancy 25%; UI scored Lighthouse 95+ and is 100% mobile-usable.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini AI API", "Tailwind CSS"],
      github: "https://github.com/amanpal2711/Ai-Powered-Travel-Itenerary-Planner-",
      demo: "https://orbitra2.vercel.app/",
    },
    {
      title: "Real-Time Chat Application",
      desc: "Chat app supporting 100+ concurrent users with <100ms latency via Socket.io, secured with JWT and HTTP-only cookies. State managed with Zustand (cut boilerplate 40%); typing indicators lifted engagement 20% in testing.",
      tags: ["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/amanpal2711/RTCA",
      demo: null,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Search Header */}
      <div className="pt-2">
        <span className="text-sm text-google-gray-text dark:text-google-gray-darktext block mb-1">
          https://iaman.vercel.app › projects
        </span>
        <h2 className="text-lg md:text-xl font-normal text-google-blue hover:underline leading-tight mb-1 cursor-pointer">
          Aman Pal: Software Development Projects
        </h2>
        <p className="text-[13.5px] text-google-gray-text dark:text-google-gray-darktext leading-relaxed font-normal">
          A selection of projects — from AI tool-calling agents to full-stack web apps — built end to end and deployed live.
        </p>
      </div>

      {/* Projects Results List */}
      <div className="space-y-6 my-6">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="rounded-2xl border p-5 bg-white dark:bg-google-dark-panel border-google-gray-border dark:border-google-gray-darkborder hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex justify-between items-baseline flex-wrap gap-x-4 mb-2">
              <span className="font-semibold text-base md:text-lg text-google-blue flex items-center flex-wrap gap-2">
                <span>{proj.title}</span>
                {proj.title === "Workspace Agent" && (
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-bold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full animate-pulse border border-green-200 dark:border-green-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Currently Working
                  </span>
                )}
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-bold bg-blue-100 dark:bg-blue-900/30 text-google-blue dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-800 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-google-blue animate-pulse" />
                    Live Link
                  </a>
                )}
              </span>
            </div>
            
            {proj.github && (
              <div className="flex gap-4 mb-3 text-xs">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 font-semibold text-google-blue hover:underline"
                >
                  GitHub <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}

            <p className="text-sm text-google-gray-text dark:text-google-gray-darktext leading-relaxed mb-4">
              {proj.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {proj.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-3 py-1 rounded-full bg-google-blue/10 dark:bg-google-blue/20 text-google-blue"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
