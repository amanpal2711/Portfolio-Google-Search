import React, { useState } from 'react';
import { Phone, Mail, MapPin, Linkedin, Send } from 'lucide-react';

export const TabContact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:amanpal2711@gmail.com?subject=${encodeURIComponent(
      form.subject || "Portfolio contact"
    )}&body=${encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    )}`;
    window.location.href = mailto;
  };

  const contactCards = [
    { icon: Phone, label: "Mobile", value: "+91 9027978592", href: "tel:+919027978592" },
    { icon: Mail, label: "Email", value: "amanpal2711@gmail.com", href: "mailto:amanpal2711@gmail.com" },
    { icon: MapPin, label: "Address", value: "Greater Noida, Uttar Pradesh, India", href: null },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/amanpal2711", href: "https://linkedin.com/in/amanpal2711" },
  ];

  return (
    <div className="space-y-6">
      {/* Breadcrumbs & Title */}
      <div className="pt-2">
        <span className="text-xs text-google-gray-text dark:text-google-gray-darktext block mb-1">
          https://iaman.vercel.app › contact
        </span>
        <h2 className="text-lg md:text-xl font-normal text-google-blue hover:underline leading-tight mb-1 cursor-pointer">
          Contact Aman Pal: Get In Touch
        </h2>
        <p className="text-[13.5px] text-google-gray-text dark:text-google-gray-darktext leading-relaxed font-normal">
          Fill out the secure messaging form below to query about hiring, collaboration options, or freelance contracts. Submissions route directly to Aman.
        </p>
      </div>

      {/* Grid of contact cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contactCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="rounded-xl p-5 text-center flex flex-col items-center justify-center gap-1.5 bg-gray-50 dark:bg-google-dark-panel border border-google-gray-border dark:border-google-gray-darkborder transition-transform hover:-translate-y-0.5"
            >
              <Icon className="w-5 h-5 text-google-gray-text dark:text-google-gray-darktext mb-1" />
              <span className="font-semibold text-sm text-gray-900 dark:text-white">
                {card.label}
              </span>
              {card.href ? (
                <a
                  href={card.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-google-blue hover:underline font-medium break-all"
                >
                  {card.value}
                </a>
              ) : (
                <span className="text-sm text-google-gray-text dark:text-google-gray-darktext font-medium">
                  {card.value}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Message Form */}
      <form
        onSubmit={handleSend}
        className="rounded-2xl p-6 md:p-8 bg-gray-50 dark:bg-google-dark-panel border border-google-gray-border dark:border-google-gray-darkborder space-y-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Name *
            </label>
            <input
              required
              type="text"
              placeholder="Your name..."
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none bg-white dark:bg-google-dark-body border-google-gray-border dark:border-google-gray-darkborder text-gray-900 dark:text-white focus:border-google-blue transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Email *
            </label>
            <input
              required
              type="email"
              placeholder="Your email..."
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none bg-white dark:bg-google-dark-body border-google-gray-border dark:border-google-gray-darkborder text-gray-900 dark:text-white focus:border-google-blue transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Subject *
          </label>
          <input
            required
            type="text"
            placeholder="Subject..."
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none bg-white dark:bg-google-dark-body border-google-gray-border dark:border-google-gray-darkborder text-gray-900 dark:text-white focus:border-google-blue transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Message *
          </label>
          <textarea
            required
            rows={5}
            placeholder="Message..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none resize-none bg-white dark:bg-google-dark-body border-google-gray-border dark:border-google-gray-darkborder text-gray-900 dark:text-white focus:border-google-blue transition-colors"
          />
        </div>

        <button
          type="submit"
          className="flex items-center gap-2 px-6 py-2.5 bg-google-blue hover:bg-google-blue/90 text-white font-medium text-sm rounded-full transition-colors cursor-pointer shadow-sm hover:shadow"
        >
          <span>Send Message</span>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
