import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { SearchBar } from './components/SearchBar';
import { TabNav } from './components/TabNav';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { TabAbout } from './components/TabAbout';
import { TabSkills } from './components/TabSkills';
import { TabProjects } from './components/TabProjects';
import { TabContact } from './components/TabContact';
import { TabMap } from './components/TabMap';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={`min-h-screen flex flex-col transition-colors duration-200 ${darkMode ? 'dark bg-google-dark-body text-gray-200' : 'bg-white text-gray-800'}`}>
        {/* Top Header Search Bar */}
        <SearchBar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Tab Navigation Menu */}
        <TabNav />

        {/* Two-Column Search Results Layout */}
        <main className="flex-grow px-4 py-6 md:py-8 md:pl-[170px] md:pr-10 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Left Column (Main Search Results - 652px exact Google width on desktop) */}
            <div className="w-full lg:w-[652px] flex-shrink-0">
              <Routes>
                <Route path="/" element={<TabAbout />} />
                <Route path="/skills" element={<TabSkills />} />
                <Route path="/projects" element={<TabProjects />} />
                <Route path="/contact" element={<TabContact />} />
                <Route path="/map" element={<TabMap />} />
              </Routes>
            </div>

            {/* Right Column (Sidebar Knowledge Panel - stacks below on mobile) */}
            <div className="w-full lg:w-[360px] flex-shrink-0 lg:self-start">
              <Sidebar />
            </div>
          </div>
        </main>

        {/* Footer Bar */}
        <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </Router>
  );
}

export default App;
