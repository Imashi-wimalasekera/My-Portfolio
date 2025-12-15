'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  const features = [
    {
      id: 'fullstack',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Full-stack',
      subtitle: 'Development'
    },
    {
      id: 'learning',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
        </svg>
      ),
      title: 'Build,',
      subtitle: 'Learn,Grow'
    },
    {
      id: 'continuous',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Continuous',
      subtitle: 'Development'
    }
  ];

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-6xl mx-auto w-full">
        {/* About Me Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">About Me</h2>
        </motion.div>

        {/* Description Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-4xl mx-auto">
            I&apos;m an IT Undergraduate at the University of Moratuwa with a strong 
            interest in building modern, reliable web applications. I enjoy working 
            across both frontend and backend technologies, focusing on clean 
            code, usability, and continuous improvement. I&apos;m motivated by learning 
            through projects and collaborating with others to create practical, well-designed solutions.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 h-full transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Text */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xl font-bold text-white">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
