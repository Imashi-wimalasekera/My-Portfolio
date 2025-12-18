'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { useState } from 'react';
import { IconType } from 'react-icons';

function MagneticLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setPosition({ x: x * 0.3, y: y * 0.3 });
      }}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
    >
      <Link
        href={href}
        className="text-slate-400 hover:text-purple-400 transition-colors text-sm"
      >
        {children}
      </Link>
    </motion.div>
  );
}

function MagneticIcon({ icon: Icon, label, href }: { icon: IconType; label: string; href: string }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <motion.a
      href={href}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setPosition({ x: x * 0.3, y: y * 0.3 });
      }}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      whileTap={{ scale: 0.95 }}
      className="w-10 h-10 rounded-full bg-gray-800 border border-purple-500/50 flex items-center justify-center hover:bg-purple-600 hover:border-purple-400 transition-all duration-300"
      aria-label={label}
    >
      <Icon className="w-5 h-5 text-purple-400" />
    </motion.a>
  );
}

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];


  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-purple-950 to-black border-t border-purple-900/50 px-2 md:px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Left Section - Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image 
                src="/logo 6.png" 
                alt="Logo" 
                width={100} 
                height={100}
                className="w-20 h-20"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Where imagination meets logic, and ideas take form. Forever learning, forever evolving.
            </p>
          </div>

          {/* Middle Section - Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <MagneticLink key={link.name} href={link.href}>
                  {link.name}
                </MagneticLink>
              ))}
            </div>
          </div>

          {/* Right Section - Connect & Built With */}
          <div className="space-y-6">
            {/* Social Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Let&apos;s Connect</h3>
              <div className="flex gap-3">
                <MagneticIcon icon={FaEnvelope} label="Email" href="mailto:imashi0815@gmail.com" />
                <MagneticIcon icon={FaGithub} label="GitHub" href="https://github.com/Imashi-wimalasekera" />
                <MagneticIcon icon={FaLinkedin} label="LinkedIn" href="https://www.linkedin.com/in/imashi-wimalasekera" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-purple-900/30 pt-6">
          <p className="text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} Imashi Wimalasekera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
