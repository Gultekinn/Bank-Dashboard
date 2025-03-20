'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-20">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>

      <div className="flex items-center gap-4">
        <LanguageSwitcher />

        {/* User Profile Button */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gray-200 p-2 rounded-full focus:outline-none"
          >
            👤
          </button>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-20"
            >
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
}
