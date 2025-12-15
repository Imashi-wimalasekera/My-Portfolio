'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const menuItems = ['HOME', 'About', 'Education', 'Skills', 'Projects', 'Contact'];

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
          {menuItems.map((item, index) => (
            <li key={item}>
              <Link 
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                  index === 0 ? 'text-purple-500' : 'text-gray-300'
                }`}
              >
                {item}
                {index === 0 && (
                  <motion.div 
                    className="h-0.5 bg-purple-500 mt-1"
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
