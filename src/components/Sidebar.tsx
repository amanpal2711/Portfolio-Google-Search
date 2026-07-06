import React from 'react';
import { Mail, Phone, Linkedin, Github, Link, Globe } from 'lucide-react';
import myImg from '../assets/myImg.png';

export const Sidebar: React.FC = () => {
  return (
    <div className="w-full bg-white dark:bg-google-dark-panel border border-google-gray-border dark:border-google-gray-darkborder rounded-2xl p-6 shadow-sm transition-colors duration-200">
      {/* Profile Photo Area */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border border-google-gray-border dark:border-google-gray-darkborder mb-4 bg-gray-50 dark:bg-google-dark-body">
          <img
            src={myImg}
            alt="Aman Pal"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.innerHTML = `
                  <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-google-blue to-purple-600 text-white text-3xl font-semibold select-none">
                    AP
                  </div>
                `;
              }
            }}
          />
        </div>
        <h1 className="text-xl md:text-2xl font-normal text-gray-900 dark:text-white text-center">
          Aman Pal
        </h1>
        <p className="text-sm text-google-gray-text dark:text-google-gray-darktext mt-1 text-center font-normal">
          Full Stack Developer | Software Engineer
        </p>
      </div>

      {/* Short Bio */}
      <div className="text-center text-[13.5px] leading-relaxed text-gray-700 dark:text-gray-300 px-2 mb-6 border-b border-google-gray-border dark:border-google-gray-darkborder pb-6">
        B.Tech graduate (2026) in AI & Data Science engineering full-stack MERN apps that have served 200+ users, with a focus on secure auth, real-time features, and clean REST APIs.
      </div>

      {/* Contact & Profiles */}
      <div className="space-y-4">
        {/* Email */}
        <div className="flex items-start gap-3">
          <Mail className="w-4 h-4 text-google-gray-text dark:text-google-gray-darktext mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <span className="font-semibold text-gray-900 dark:text-white block">Email</span>
            <a
              href="mailto:amanpal2711@gmail.com"
              className="text-google-blue hover:underline break-all block"
            >
              amanpal2711@gmail.com
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-3">
          <Phone className="w-4 h-4 text-google-gray-text dark:text-google-gray-darktext mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <span className="font-semibold text-gray-900 dark:text-white block">Phone</span>
            <a
              href="tel:+919027978592"
              className="text-google-blue hover:underline block"
            >
              +91 9027978592
            </a>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="flex items-start gap-3">
          <Linkedin className="w-4 h-4 text-google-gray-text dark:text-google-gray-darktext mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <span className="font-semibold text-gray-900 dark:text-white block">LinkedIn</span>
            <a
              href="https://linkedin.com/in/amanpal2711"
              target="_blank"
              rel="noopener noreferrer"
              className="text-google-blue hover:underline block"
            >
              linkedin.com/in/amanpal2711
            </a>
          </div>
        </div>

        {/* GitHub */}
        <div className="flex items-start gap-3">
          <Github className="w-4 h-4 text-google-gray-text dark:text-google-gray-darktext mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <span className="font-semibold text-gray-900 dark:text-white block">GitHub</span>
            <a
              href="https://github.com/amanpal2711"
              target="_blank"
              rel="noopener noreferrer"
              className="text-google-blue hover:underline block"
            >
              github.com/amanpal2711
            </a>
          </div>
        </div>

        {/* Portfolio Link */}
        <div className="flex items-start gap-3">
          <Link className="w-4 h-4 text-google-gray-text dark:text-google-gray-darktext mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <span className="font-semibold text-gray-900 dark:text-white block">Portfolio</span>
            <a
              href="https://iaman.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-google-blue hover:underline block"
            >
              iaman.vercel.app
            </a>
          </div>
        </div>

        {/* Google Portfolio Link */}
        <div className="flex items-start gap-3">
          <Globe className="w-4 h-4 text-google-blue mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <span className="font-semibold text-gray-900 dark:text-white block flex items-center gap-1.5">
              Google Profile
            </span>
            <a
              href="https://iaman.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-google-blue hover:underline block"
            >
              iaman.vercel.app
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
