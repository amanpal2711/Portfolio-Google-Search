import React, { useState } from 'react';

interface Skill {
  label: string;
  badge: string;
  color: string;
  shape: 'square' | 'text' | 'round';
  logo?: string;
}

const FRONTEND_SUMMARY = "JavaScript (ES6+), TypeScript, React Js, HTML5, CSS3, Tailwind CSS";
const BACKEND_SUMMARY = "Java, Node Js, Express Js, REST APIs, MongoDB, MySQL, SQL";

const SKILLS: Skill[] = [
  { label: "Java", badge: "J", color: "#ea580c", shape: "round", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { label: "JavaScript", badge: "JS", color: "#f7df1e", shape: "square", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { label: "TypeScript", badge: "TS", color: "#3178c6", shape: "square", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { label: "React Js", badge: "⚛", color: "#22d3ee", shape: "round", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { label: "HTML5", badge: "5", color: "#e34f26", shape: "square", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { label: "CSS3", badge: "3", color: "#2965f1", shape: "square", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { label: "Tailwind CSS", badge: "~", color: "#06b6d4", shape: "round", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { label: "Node Js", badge: "⬡", color: "#3c873a", shape: "round", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { label: "Express Js", badge: "ex", color: "#6b7280", shape: "text", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { label: "REST APIs", badge: "{}", color: "#6b7280", shape: "text" },
  { label: "MongoDB", badge: "🍃", color: "#22c55e", shape: "round", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { label: "MySQL", badge: "SQL", color: "#00758f", shape: "square", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { label: "Git", badge: "⑂", color: "#f97316", shape: "round", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { label: "GitHub", badge: "gh", color: "#6e7681", shape: "text", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { label: "Postman", badge: "▷", color: "#f97316", shape: "round", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  { label: "Jest", badge: "J", color: "#c21325", shape: "round", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" },
  { label: "Vercel", badge: "▲", color: "#111111", shape: "text", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
  { label: "Render", badge: "R", color: "#46e3b7", shape: "round" },
];

const SkillBadge: React.FC<{ color: string; badge: string; shape: string; logo?: string }> = ({ color, badge, shape, logo }) => {
  const [imgError, setImgError] = useState(false);
  const base = "flex items-center justify-center font-bold text-lg w-14 h-14 select-none";

  if (logo && !imgError) {
    return (
      <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-google-gray-border dark:border-google-gray-darkborder p-2">
        <img
          src={logo}
          alt={badge}
          className="w-10 h-10 object-contain"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  if (shape === "square") {
    return (
      <div
        className={`${base} rounded-md`}
        style={{ backgroundColor: color, color: "#fff" }}
      >
        {badge}
      </div>
    );
  }
  if (shape === "text") {
    return (
      <div className={base} style={{ color }}>
        {badge}
      </div>
    );
  }
  return (
    <div
      className={`${base} rounded-full`}
      style={{ backgroundColor: color + "22", color }}
    >
      {badge}
    </div>
  );
};

export const TabSkills: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Breadcrumbs */}
      <div className="pt-2">
        <span className="text-xs text-google-gray-text dark:text-google-gray-darktext block mb-1">
          https://iaman.vercel.app › skills
        </span>
        <h2 className="text-lg md:text-xl font-normal text-google-blue hover:underline leading-tight mb-1 cursor-pointer">
          Aman Pal: Technical Skills Dashboard
        </h2>
        <p className="text-[13.5px] text-google-gray-text dark:text-google-gray-darktext leading-relaxed font-normal">
          Aman loves building innovative web applications using modern technologies. He is constantly enhancing his skillset and enjoys creating everything from small landing pages to full-stack, interactive web apps with clean, responsive, and scalable code.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="rounded-xl p-5 text-center bg-gray-50 dark:bg-google-dark-panel border border-google-gray-border dark:border-google-gray-darkborder">
          <div className="font-semibold text-base mb-2 text-gray-900 dark:text-white">
            Frontend Skills
          </div>
          <p className="text-xs md:text-sm text-google-gray-text dark:text-google-gray-darktext font-medium">
            {FRONTEND_SUMMARY}
          </p>
        </div>
        <div className="rounded-xl p-5 text-center bg-gray-50 dark:bg-google-dark-panel border border-google-gray-border dark:border-google-gray-darkborder">
          <div className="font-semibold text-base mb-2 text-gray-900 dark:text-white">
            Backend Skills
          </div>
          <p className="text-xs md:text-sm text-google-gray-text dark:text-google-gray-darktext font-medium">
            {BACKEND_SUMMARY}
          </p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {SKILLS.map((skill) => (
          <div
            key={skill.label}
            className="rounded-xl border p-4 flex flex-col items-center gap-3 transition-transform hover:-translate-y-1 hover:shadow-md cursor-default bg-white dark:bg-google-dark-panel border-google-gray-border dark:border-google-gray-darkborder"
            style={{ borderTopColor: skill.color, borderTopWidth: '4px' }}
          >
            <SkillBadge color={skill.color} badge={skill.badge} shape={skill.shape} logo={skill.logo} />
            <span className="font-semibold text-sm text-center text-gray-900 dark:text-white">
              {skill.label}
            </span>
          </div>
        ))}
      </div>

      {/* LeetCode Notice */}
      <p className="text-xs text-google-gray-text dark:text-google-gray-darktext mt-6 italic">
        Currently deepening DSA practice in Java (200+ LeetCode problems solved) alongside the stack above.
      </p>
    </div>
  );
};
