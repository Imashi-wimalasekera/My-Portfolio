'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const menuItems = ['HOME', 'About', 'Education', 'Skills', 'Projects', 'Contact'];
  const [activeSection, setActiveSection] = useState('HOME');

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => ({
        name: item,
        element: document.getElementById(item.toLowerCase())
      }));

      let currentSection = 'HOME';
      
      sections.forEach(({ name, element }) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            currentSection = name;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Name */}
        <Link href="/" className="text-xl font-bold text-white">
          Rohan Patil
        </Link>

        {/* Navigation Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <li key={item}>
              <Link 
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors relative ${
                  activeSection === item ? 'text-purple-500' : 'text-gray-300 hover:text-purple-400'
                }`}
              >
                {item}
                {activeSection === item && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500"
                    layoutId="underline"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}
