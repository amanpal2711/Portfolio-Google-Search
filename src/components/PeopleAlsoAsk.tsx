import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const PeopleAlsoAsk: React.FC = () => {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (id: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "What tech stack does Aman use?",
      answer: "Java, JavaScript (ES6+) and TypeScript as core languages, React.js, HTML5, CSS3 and Tailwind CSS on the frontend, Node.js and Express.js on the backend, with MongoDB, MySQL and SQL for data.",
    },
    {
      id: 2,
      question: "Is Aman a frontend or full-stack developer?",
      answer: "Full-stack — comfortable building REST APIs, database schemas, and authentication as well as responsive, production-ready UIs.",
    },
    {
      id: 3,
      question: "What projects has Aman built?",
      answer: "Workspace Agent, a Job Portal System, an AI-Powered Travel Itinerary Planner, and a Real-Time Chat Application, together serving 200+ users across the MERN stack.",
    },
    {
      id: 4,
      question: "How can I hire Aman?",
      answer: "Reach out directly by email or LinkedIn — both are listed in the sidebar — or check the portfolio site for a downloadable resume.",
    },
  ];

  return (
    <div className="my-8 border border-google-gray-border dark:border-google-gray-darkborder rounded-2xl bg-white dark:bg-google-dark-panel overflow-hidden transition-colors">
      <h2 className="text-xl md:text-2xl font-normal px-4 md:px-6 pt-5 pb-3 text-gray-900 dark:text-white border-b border-google-gray-border dark:border-google-gray-darkborder">
        People also ask
      </h2>
      <div className="divide-y divide-google-gray-border dark:divide-google-gray-darkborder">
        {faqs.map((faq) => {
          const isOpen = !!openItems[faq.id];
          return (
            <div key={faq.id} className="w-full">
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full flex items-center justify-between px-4 md:px-6 py-4 text-left text-sm md:text-[15px] text-gray-900 dark:text-gray-150 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors focus:outline-none cursor-pointer"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 md:w-5 h-5 text-google-gray-text dark:text-google-gray-darktext transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-200 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 md:px-6 pb-5 pt-1 text-sm md:text-[14.5px] leading-relaxed text-google-gray-text dark:text-google-gray-darktext">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
