'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const menuItems = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'];
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => ({
        name: item,
        element: document.getElementById(item.toLowerCase())
      }));

      let currentSection = 'Home';
      
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
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-gray-800/50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo 6.png" 
            alt="Logo" 
            width={90} 
            height={90}
            className="w-18 h-18"
          />
        </Link>

        {/* Navigation Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <li key={item}>
              <Link 
                href={`#${item.toLowerCase()}`}
                className={`text-lg font-medium transition-colors relative ${
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
