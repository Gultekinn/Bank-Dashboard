'use client';

import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Language Selector Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-200 transition-colors"
        aria-label="Change Language"
      >
        <Globe className="w-5 h-5 text-gray-800" />
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-800" />
        </motion.div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10"
        >
          <ul className="py-2">
            <li
              onClick={() => i18n.changeLanguage('en')}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              English
            </li>
            <li
              onClick={() => i18n.changeLanguage('tr')}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Türkçe
            </li>
            <li
              onClick={() => i18n.changeLanguage('az')}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Azərbaycan
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
}
