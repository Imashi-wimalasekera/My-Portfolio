'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    id: 'project1',
    title: 'PaperSync',
    description: 'Aplicação de NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios',
    technologies: ['React', 'SpringBoot', 'MySQL'],
    badge: 'Move.it',
    weekInfo: 'Next Level Week #04',
    image: '/placeholder-project.jpg',
  },
  {
    id: 'project2',
    title: 'Portfolio Website',
    description: 'Aplicação de NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios',
    technologies: ['Next JS', 'Typescript', 'Tailwind CSS'],
    badge: 'Move.it',
    weekInfo: 'Next Level Week #04',
    image: '/placeholder-project.jpg',
  },
  {
    id: 'project3',
    title: 'Move.it',
    description: 'Aplicação de NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios',
    technologies: ['React JS', 'Typescript'],
    badge: 'Move.it',
    weekInfo: 'Next Level Week #04',
    image: '/placeholder-project.jpg',
  },
  {
    id: 'project4',
    title: 'E-Commerce Platform',
    description: 'Aplicação de NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios',
    technologies: ['Next JS', 'Node JS', 'MongoDB'],
    badge: 'E-Commerce',
    weekInfo: 'Next Level Week #05',
    image: '/placeholder-project.jpg',
  },
  {
    id: 'project5',
    title: 'Task Manager App',
    description: 'Aplicação de NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    badge: 'Task Manager',
    weekInfo: 'Next Level Week #06',
    image: '/placeholder-project.jpg',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative min-h-screen px-4 md:px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-950 to-black opacity-70" aria-hidden />

      <div className="relative max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-5xl md:text-6xl font-bold text-white mb-16 flex items-center justify-center gap-3"
        >
          <span className="text-purple-400">&lt;/&gt;</span>
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 * index }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative bg-gray-900/70 border border-purple-900 rounded-2xl p-6 shadow-xl shadow-purple-500/10 backdrop-blur transition-all duration-300 group-hover:bg-gray-900/90 group-hover:border-purple-500 group-hover:shadow-2xl group-hover:shadow-purple-500/30 h-full flex flex-col">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-slate-400">{project.description}</p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold text-purple-300 border border-purple-500/50 rounded-full bg-purple-500/10 transition-colors group-hover:border-purple-400 group-hover:text-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Badge and Image */}
                <div className="flex-1 relative mb-4">
                  <div className="absolute top-3 left-3 z-10 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg">
                    <p className="font-bold text-sm">{project.badge}</p>
                    <p className="text-xs text-purple-200">{project.weekInfo}</p>
                  </div>
                  <div className="w-full h-48 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg overflow-hidden flex items-center justify-center">
                    <div className="text-center text-white opacity-70">
                      <p className="text-sm">Project Image</p>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg font-semibold hover:from-purple-500 hover:to-purple-700 transition-all duration-300 border border-purple-500/50"
                >
                  View Project
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
