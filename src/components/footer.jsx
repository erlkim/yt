// Footer.js
import { useState } from 'react';
import { FaGithub, FaKeyboard, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { SiYoutube } from 'react-icons/si';
import { BsStars } from 'react-icons/bs';

export default function Footer() {
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-8 sm:py-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {/* Platform Features */}
          <div className="w-full">
            <h3 className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text mb-4">
              Platform Features
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                <span>Ad-Free Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>
                <span>Curated Content</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                <span>Open Source</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>
                <span>Distraction-Free</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                <span>Multiple Playlists</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>
                <span>Saved Progress</span>
              </div>
            </div>
          </div>

          {/* Keyboard Shortcuts */}
          <div className="w-full">
            <h3 className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text mb-4 flex items-center gap-2">
              <FaKeyboard className="inline-block" />
              Keyboard Shortcuts
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm text-gray-400">
              <div className="flex items-center justify-between">
                <span>Play/Pause</span>
                <kbd className="px-2 py-1 bg-gray-800 rounded">Space</kbd>
              </div>
              <div className="flex items-center justify-between">
                <span>Forward 10s</span>
                <kbd className="px-2 py-1 bg-gray-800 rounded">→</kbd>
              </div>
              <div className="flex items-center justify-between">
                <span>Backward 10s</span>
                <kbd className="px-2 py-1 bg-gray-800 rounded">←</kbd>
              </div>
              <div className="flex items-center justify-between">
                <span>Toggle Fullscreen</span>
                <kbd className="px-2 py-1 bg-gray-800 rounded">F</kbd>
              </div>
            </div>
          </div>

          {/* GitHub Section with API Instructions */}
          
            

            {/* API Key Instructions Dropdown */}
            

        {/* Credits Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex justify-center items-center">
            <div className="flex flex-col sm:flex-row items-center gap-2 text-center">
              <div className="text-lg sm:text-xl font-mono font-bold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text flex items-center">
                {"<"}<SiYoutube className="text-[#FF0000] mx-1 text-xl sm:text-2xl" />YouTubePlayer {"/>"}
              </div>
              <div className="flex items-center flex-wrap justify-center gap-2 text-sm">
                <span className="text-gray-400 hidden sm:inline">•</span>
                <span className="text-gray-400">Developed by</span>
                <a href="https://isalman.dev" target="_blank" rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300">Salman Qureshi</a>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">Redesigned by</span>
                <div className="flex items-center">
                  <a href="https://hothead.vercel.app" target="_blank" rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300">Zaid Adil</a>
                  <BsStars className="text-yellow-400 ml-1 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
