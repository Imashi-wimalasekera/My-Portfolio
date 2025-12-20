'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [taglineKey, setTaglineKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTaglineKey((k) => k + 1), 6000);
    return () => clearInterval(id);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -13;
    const rotateYValue = ((x - centerX) / centerX) * 13;
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const floatingIcons = [
    // Top row - evenly distributed
    { id: 'star1', content: <span className="text-2xl text-purple-300">★</span>, className: 'top-[10%] left-[8%]', animType: 'zoom' },
    { id: 'dot1', content: <span className="text-3xl text-purple-300">•</span>, className: 'top-[15%] left-[25%]', animType: 'drift' },
    { id: 'sparkle1', content: <span className="text-xl text-purple-300">✦</span>, className: 'top-[8%] left-[42%]', animType: 'zoom' },
    { id: 'diamond1', content: <span className="text-2xl text-fuchsia-300">◆</span>, className: 'top-[12%] left-[58%]', animType: 'drift' },
    { id: 'star2', content: <span className="text-xl text-purple-400">★</span>, className: 'top-[10%] left-[75%]', animType: 'zoom' },
    { id: 'dot2', content: <span className="text-2xl text-blue-300">•</span>, className: 'top-[15%] left-[90%]', animType: 'drift' },
    
    // Upper-middle row
    { id: 'sparkle2', content: <span className="text-2xl text-purple-300">✦</span>, className: 'top-[28%] left-[12%]', animType: 'drift' },
    { id: 'brackets', content: <span className="text-3xl font-mono">&lt;/&gt;</span>, className: 'top-[30%] left-[55%] text-purple-400', animType: 'zoom' },
    { id: 'star3', content: <span className="text-3xl text-pink-300">★</span>, className: 'top-[25%] left-[48%]', animType: 'drift' },
    { id: 'dot3', content: <span className="text-4xl text-indigo-300">•</span>, className: 'top-[32%] left-[65%]', animType: 'zoom' },
    { id: 'sparkle3', content: <span className="text-lg text-cyan-300">✦</span>, className: 'top-[28%] left-[82%]', animType: 'drift' },
    
    // Middle row
    { id: 'diamond2', content: <span className="text-xl text-pink-300">◆</span>, className: 'top-[45%] left-[5%]', animType: 'zoom' },
    { id: 'star4', content: <span className="text-lg text-purple-200">★</span>, className: 'top-[50%] left-[20%]', animType: 'drift' },
    { id: 'db', content: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
          <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
          <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
        </svg>
      ), className: 'top-[25%] left-[92%] text-blue-400', animType: 'zoom' },
    { id: 'sparkle4', content: <span className="text-2xl text-pink-400">✦</span>, className: 'top-[52%] right-[8%]', animType: 'drift' },
    
    // Lower-middle row
    { id: 'dot4', content: <span className="text-3xl text-purple-400">•</span>, className: 'top-[65%] left-[10%]', animType: 'drift' },
    { id: 'star5', content: <span className="text-2xl text-purple-300">★</span>, className: 'top-[68%] left-[28%]', animType: 'zoom' },
    { id: 'angle', content: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      ), className: 'top-[70%] left-[45%] text-indigo-400', animType: 'drift' },
    { id: 'sparkle5', content: <span className="text-xl text-purple-400">✦</span>, className: 'top-[68%] left-[62%]', animType: 'zoom' },
    { id: 'star6', content: <span className="text-xl text-pink-200">★</span>, className: 'top-[65%] left-[78%]', animType: 'drift' },
    
    // Bottom row
    { id: 'star7', content: <span className="text-2xl text-purple-400">★</span>, className: 'top-[85%] left-[15%]', animType: 'zoom' },
    { id: 'sparkle6', content: <span className="text-lg text-purple-400">✦</span>, className: 'top-[88%] left-[32%]', animType: 'drift' },
    { id: 'dot5', content: <span className="text-2xl text-blue-400">•</span>, className: 'top-[87%] left-[68%]', animType: 'drift' },
    { id: 'star8', content: <span className="text-lg text-purple-400">★</span>, className: 'top-[85%] left-[85%]', animType: 'zoom' },
    
    // Additional scattered for fullness
    { id: 'spark', content: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ), className: 'top-[38%] left-[15%] text-purple-500', animType: 'drift' },
    { id: 'figma', content: (
        <svg className="w-10 h-10 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 2h4a4 4 0 010 8H8z" />
          <path d="M8 10h4a4 4 0 010 8H8z" />
          <path d="M8 2a4 4 0 000 8V2z" />
          <path d="M12 2h4a4 4 0 010 8h-4z" />
          <path d="M12 10a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      ), className: 'top-[68%] right-[12%]', animType: 'zoom' },
    { id: 'dot6', content: <span className="text-4xl text-indigo-400">•</span>, className: 'top-[18%] right-[15%]', animType: 'drift' },
    
    // Additional sparkles and squares to fill empty spaces
    { id: 'sparkle7', content: <span className="text-lg text-pink-300">✦</span>, className: 'top-[20%] left-[18%]', animType: 'zoom' },
    { id: 'sparkle8', content: <span className="text-xl text-pink-400">✦</span>, className: 'top-[35%] left-[38%]', animType: 'drift' },
    { id: 'sparkle9', content: <span className="text-lg text-pink-300">✦</span>, className: 'top-[42%] left-[60%]', animType: 'zoom' },
    { id: 'sparkle10', content: <span className="text-xl text-pink-400">✦</span>, className: 'top-[58%] left-[18%]', animType: 'drift' },
    { id: 'sparkle11', content: <span className="text-lg text-pink-300">✦</span>, className: 'top-[72%] left-[35%]', animType: 'zoom' },
    { id: 'sparkle12', content: <span className="text-xl text-pink-400">✦</span>, className: 'top-[78%] left-[70%]', animType: 'drift' },
    { id: 'sparkle13', content: <span className="text-lg text-pink-300">✦</span>, className: 'top-[15%] left-[52%]', animType: 'zoom' },
    { id: 'sparkle14', content: <span className="text-xl text-pink-400">✦</span>, className: 'top-[48%] left-[42%]', animType: 'drift' },
    
    // Small squares in various positions
    { id: 'square1', content: <span className="text-lg text-purple-400">■</span>, className: 'top-[22%] left-[35%]', animType: 'zoom' },
    { id: 'square2', content: <span className="text-base text-pink-400">■</span>, className: 'top-[38%] left-[52%]', animType: 'drift' },
    { id: 'square3', content: <span className="text-lg text-blue-400">■</span>, className: 'top-[52%] left-[25%]', animType: 'zoom' },
    { id: 'square4', content: <span className="text-base text-fuchsia-400">■</span>, className: 'top-[62%] left-[50%]', animType: 'drift' },
    { id: 'square5', content: <span className="text-lg text-indigo-400">■</span>, className: 'top-[75%] left-[22%]', animType: 'zoom' },
    { id: 'square6', content: <span className="text-base text-purple-300">■</span>, className: 'top-[82%] left-[58%]', animType: 'drift' },
    { id: 'square7', content: <span className="text-lg text-pink-300">■</span>, className: 'top-[12%] left-[68%]', animType: 'zoom' },
    { id: 'square8', content: <span className="text-base text-blue-300">■</span>, className: 'top-[45%] left-[72%]', animType: 'drift' },
    { id: 'square9', content: <span className="text-lg text-fuchsia-300">■</span>, className: 'top-[55%] left-[8%]', animType: 'zoom' },
    { id: 'square10', content: <span className="text-base text-indigo-300">■</span>, className: 'top-[32%] left-[88%]', animType: 'drift' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-gray-900 via-purple-950 to-black opacity-70 pointer-events-none" aria-hidden />
      {/* Background floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((icon, index) => {
          const isZoom = icon.animType === 'zoom';
          return (
            <motion.div
              key={icon.id}
              className={`absolute ${icon.className} opacity-30`}
              animate={isZoom ? {
                scale: [1, 1.4, 1],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.6, 0.3],
              } : {
                x: [-40, 40, -35],
                y: [0, -18, 6],
                rotate: [0, 8, -8, 0],
                scale: [1, 1.08, 0.95, 1],
              }}
              transition={{
                duration: isZoom ? 4 + index * 0.3 : 6 + index * 0.4,
                delay: index * 0.2,
                repeat: Infinity,
                repeatType: isZoom ? 'loop' : 'mirror',
                ease: 'easeInOut',
              }}
            >
              {icon.content}
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2"
          >
            <h2 className="text-4xl font-bold text-purple-500">Hey</h2>
            <motion.span
              animate={{ rotate: [0, 20, -20, 20, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                repeatDelay: 2,
                ease: "easeInOut" 
              }}
              className="text-4xl"
            >
              👋
            </motion.span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              I&apos;m Imashi
              <br />
              Wimalasekera
            </h1>
            <motion.p 
              key={taglineKey}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.9,
                  },
                },
              }}
              className="mt-4 text-xl md:text-2xl font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
            >
              {Array.from("IT Undergraduate | Full Stack Developer").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { type: "spring", stiffness: 100, damping: 10 },
                    },
                  }}
                  className="hover:text-purple-200 transition-colors"
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-4 pt-4"
          >
            {/* LinkedIn */}
            <motion.a 
              href="https://www.linkedin.com/in/imashi-wimalasekera/" 
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>

            {/* GitHub */}
            <motion.a 
              href="https://github.com/Imashi-wimalasekera" 
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
            </motion.a>

            {/* Email */}
            <motion.a 
              href="mailto:imashi0815@gmail.com" 
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors"
              aria-label="Email"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.a
              href="/Imashi_Wimalasekera.pdf"
              download
              className="px-6 py-3 border border-purple-500 text-purple-400 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </motion.a>
            <motion.a
              href="#projects"
              className="px-6 py-3 border border-gray-600 text-gray-300 rounded-full hover:border-purple-500 hover:text-purple-400 transition-all duration-300 inline-flex items-center justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex items-center justify-center"
          style={{ perspective: "1000px" }}
        >
          {/* Outer Circle Border */}
          <div className="absolute w-[340px] h-[340px] md:w-[420px] md:h-[420px] lg:w-[490px] lg:h-[490px] rounded-full border-2 border-purple-400/40"></div>
          
          {/* Main Circle Container with Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ 
              scale: 1,
              rotateX: rotateX,
              rotateY: rotateY
            }}
            transition={{ 
              scale: { duration: 0.8, delay: 0.6, type: "spring" },
              rotateX: { duration: 0.3 },
              rotateY: { duration: 0.3 }
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] cursor-pointer"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Purple Gradient Circle Background */}
            <div className="absolute inset-0 rounded-full opacity-90 shadow-2xl" style={{ background: "linear-gradient(to bottom right, #7B4AE2, #9D6BE8, #6A3DD9)", boxShadow: "0 25px 50px -12px rgba(123, 74, 226, 0.5)" }}></div>
            
            {/* Image Container */}
            <div className="absolute inset-4 rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src="/imashi.jpeg"
                alt="Imashi Wimalasekera"
                fill
                className="object-cover object-top scale-110"
                priority
              />
            </div>
          </motion.div>

          {/* Code brackets decoration at bottom */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute -bottom-8 right-8 bg-gray-800 px-4 py-2 rounded-lg shadow-xl border border-purple-500"
          >
            <span className="text-purple-400 font-mono text-xl">&lt;/&gt;</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
