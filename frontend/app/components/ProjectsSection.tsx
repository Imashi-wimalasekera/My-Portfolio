'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 'project1',
    title: 'PaperSync',
    year: '2024-2025',
    description: 'A full-stack web and mobile application developed for the Department of Technical Education and Training (DTET) to manage resource persons, examination workflows, and automated payment processes.',
    details: 'This group project involved developing a full-stack web and mobile system for the Department of Technical Education and Training (DTET) to streamline the management of resource persons and examination-related processes. The application supports secure exam paper uploads, assignment of paper setters, and efficient submission tracking through an admin-managed workflow, while web and mobile interfaces enhance accessibility and convenience. Frontend and backend components are integrated using REST APIs to ensure reliable communication and a smooth, user-friendly experience across the system.',
    technologies: ['React', 'SpringBoot', 'MySQL'],
    badge: 'Group Project',
    image: '/papersync.png',
    features: [
      'Resource person management and exam responsibility assignment',
      'Secure exam paper upload and submission workflow',
      'Admin dashboard for assigning paper setters and verifying submissions',
      'Automated and structured exam management process',
      'Mobile application support for on-the-go access and tracking',
    ],
    links: {
      code: 'https://github.com/Jaynejay/CodeRella-Project',
    },
  },
  {
    id: 'project2',
    title: 'Portfolio Website',
    year: '2025',
    description: 'A personal portfolio website designed to showcase my projects, skills, and experience through a clean, modern, and responsive user interface.',
    details: 'This personal portfolio website was built to showcase my projects, technical skills, and academic background through a clean and modern design. Developed using modern frontend technologies, it features well-structured sections such as About Me, Projects, Education, and Contact, ensuring smooth navigation and responsiveness across devices. The project highlights my attention to detail, design sensibility, and ability to create clean, maintainable, and professional frontend applications.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS',],
    badge: 'Individual Project',
    image: '/portfolio.png',
    features: [
      'Responsive design optimized for mobile, tablet, and desktop',
      'Dedicated sections for projects, education, and contact information',
      'Contact form for easy communication',
      'ast performance and optimized structure',
    ],
    links: {
      demo: '#',
      code: 'https://github.com/Imashi-wimalasekera/My-Portfolio',
    },
  },
  {
    id: 'project3',
    title: 'SportsVision',
    year: '2025',
    description: 'SportsVision is a React Native sports app that provides real-time team, player, and match information with favourites, authentication, and dark mode support.',
    details: 'SportsVision is a modern sports companion mobile app developed using React Native and Expo. It enables users to browse teams, players, and match schedules with live data from TheSportsDB API. The application includes user authentication with validation, Redux-based state management, persistent favourites using AsyncStorage, smooth navigation, and a fully themed light/dark UI.',
    technologies: ['React Native', 'Expo', 'Redux toolkit', 'AsyncStorage'],
    badge: 'Individual Project',
    image: '/sportsvision.jpg',
    features: [
      'Multi-league support powered by TheSportsDB API',
      'Favourites system with persistent storage',
      'Clean, responsive UI built with React Native + Expo',
      'Seamless navigation with Stack & Tab navigators',
      'Dark mode with a fully-themed UI experience',
    ],
    links: {
      code: 'https://github.com/Imashi-wimalasekera/SportVision-React-native-app',
    },
  },
  {
    id: 'project4',
    title: 'QuizMaster',
    year: '2025',
    description: 'Real-time multiplayer quiz game with live client-server communication.',
    details: 'QuizMaster is a real-time multiplayer quiz game designed to demonstrate practical applications of Java network programming concepts. The system integrates multithreading, socket programming, RMI, and synchronized client–server communication to support seamless real-time interactions between multiple players.',
    technologies: ['HTML', 'CSS', 'Java', 'Firebase'],
    badge: 'Group Project',
    image: '/quiz.png',
    features: [
      'Multiplayer lobbies with real-time scoring',
      'Admin question management and categories',
      'Responsive Web Interface',
      'Persistent leaderboards stored in Firebase',
    ],
    links: {
      demo: 'https://quiz-app-90b6a.web.app/',
      code: 'https://github.com/nethmalgunawardhana/assignment-quiz-app',
    },
  },
  {
    id: 'project5',
    title: 'MedTrack App',
    year: '2025',
    description: 'MedTrack is a Flutter-based medicine reminder app that helps users manage medication schedules with timely notifications, dose tracking, refill alerts, and caregiver monitoring support using Firebase.',
    details: 'SMedTrack is a mobile application developed using Flutter and Firebase to address the issue of medication non-adherence. The app enables users to schedule medicine reminders, track taken and missed doses, and receive refill alerts when medicine stock runs low. It also includes a caregiver mode that allows trusted caregivers to monitor adherence and receive notifications if a dose is missed. Designed with simplicity and reliability in mind, MedTrack helps patients, caregivers, and families ensure safer and more consistent medication management.',
    technologies: ['Flutter', 'Firebase'],
    badge: 'Ongoing',
    image: '/medtrack.png',
    features: [
      'Medication scheduling and reminder notifications',
      'Dose tracking with adherence history',
      'Refill alerts based on stock levels',
      'Caregiver mode with missed-dose notifications',
    ],
    links: {
      code: 'https://github.com/Imashi-wimalasekera/MedTrack-App',
    },
  },
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<typeof projects[number] | null>(null);

  return (
    <section id="projects" className="relative min-h-screen px-4 md:px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-950 to-black opacity-70" aria-hidden />

      <div className="relative max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-5xl md:text-6xl font-bold text-white mb-16"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div
                className="relative bg-gray-900/70 border border-purple-900 rounded-2xl p-6 shadow-xl shadow-purple-500/10 backdrop-blur transition-all duration-300 group-hover:bg-gray-900/90 group-hover:border-purple-500 group-hover:shadow-2xl group-hover:shadow-purple-500/30 h-full flex flex-col cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                onClick={() => setActiveProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveProject(project);
                  }
                }}
              >
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-3xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-base text-slate-400">{project.description}</p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-semibold text-purple-300 border border-purple-500/50 rounded-full bg-purple-500/10 transition-colors group-hover:border-purple-400 group-hover:text-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Badge and Image */}
                <div className="flex-1 relative mb-4">
                  <div className="absolute top-3 right-3 z-10 bg-purple-600/70 text-white px-3 py-1 rounded-md shadow-md backdrop-blur-sm">
                    <p className="font-semibold text-xs">{project.badge}</p>
                  </div>
                  <div className="relative w-full h-48 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg overflow-hidden flex items-center justify-center">
                    {project.image && project.image !== '/placeholder-project.jpg' ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="text-center text-white opacity-70">
                        <p className="text-sm">Project Image</p>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {activeProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={() => setActiveProject(null)}
              />
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 180, damping: 18 }}
                className="relative max-w-7xl w-full bg-gray-900/90 border border-purple-800 rounded-3xl shadow-2xl shadow-purple-500/20 overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="relative h-full min-h-[500px] bg-gradient-to-br from-purple-600 to-indigo-700 overflow-hidden flex items-center justify-center">
                    {activeProject.image && activeProject.image !== '/placeholder-project.jpg' ? (
                      <>
                        <Image
                          src={activeProject.image}
                          alt={activeProject.title}
                          fill
                          className="object-contain p-8"
                          priority
                          quality={95}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-black/10" />
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-700" />
                    )}
                    <div className="absolute inset-0 p-6 text-white flex flex-col justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent">
                      <p className="text-sm text-purple-200 mb-2">{activeProject.year}</p>
                      <h3 className="text-3xl font-bold leading-tight mb-3">{activeProject.title}</h3>
                      <p className="text-sm text-purple-100">{activeProject.badge}</p>
                    </div>
                  </div>
                  <div className="p-6 space-y-6">
                    <p className="text-lg text-slate-200 leading-relaxed">{activeProject.details}</p>
                    <div className="space-y-3 pt-2">
                      <p className="text-lg font-semibold text-slate-300">Key Highlights</p>
                      <ul className="list-disc list-inside space-y-2 text-slate-300">
                        {activeProject.features.map((item) => (
                          <li key={item} className="text-base text-slate-300">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">{activeProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm font-semibold text-purple-200 border border-purple-500/50 rounded-full bg-purple-500/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className={`flex gap-3 ${activeProject.links.demo ? '' : 'justify-center'}`}>
                      {activeProject.links.demo && (
                        <a
                          href={activeProject.links.demo}
                          className="px-4 py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Demo
                        </a>
                      )}
                      <a
                        href={activeProject.links.code}
                        className="px-4 py-2 rounded-lg border border-purple-500 text-purple-200 font-semibold hover:bg-purple-500/10 transition-colors"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-3 right-3 text-slate-400 hover:text-white text-2xl"
                  aria-label="Close"
                >
                  ×
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
