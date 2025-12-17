'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss } from 'react-icons/si';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const technologies = [
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'React', icon: SiReact },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
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
                width={60} 
                height={60}
                className="w-12 h-12"
              />
              <span className="text-purple-400 text-xl font-bold">Imashi</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Where imagination meets logic, and ideas take form. Forever learning, forever evolving.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>Made with</span>
              <FaHeart className="text-red-500 text-xs" />
              <span>and lots of</span>
              <span className="text-lg">☕</span>
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-purple-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section - Connect & Built With */}
          <div className="space-y-6">
            {/* Social Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Let&apos;s Connect</h3>
              <div className="flex gap-3">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-gray-800 border border-purple-500/50 flex items-center justify-center hover:bg-purple-600 hover:border-purple-400 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5 text-purple-400" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-gray-800 border border-purple-500/50 flex items-center justify-center hover:bg-purple-600 hover:border-purple-400 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5 text-purple-400" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-gray-800 border border-purple-500/50 flex items-center justify-center hover:bg-purple-600 hover:border-purple-400 transition-all duration-300"
                  aria-label="Email"
                >
                  <FaEnvelope className="w-5 h-5 text-purple-400" />
                </motion.a>
              </div>
            </div>

            {/* Built With */}
            <div>
              <p className="text-slate-400 text-sm mb-3">Built with</p>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className="flex items-center gap-1.5 text-slate-400 text-xs"
                    >
                      <Icon className="text-purple-400" />
                      <span>{tech.name}</span>
                    </div>
                  );
                })}
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
