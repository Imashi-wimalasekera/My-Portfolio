'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
  FaGithub,
  FaFigma,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiSpringboot,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiJira,
} from 'react-icons/si';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    skills: [
      { name: 'HTML', icon: FaHtml5, color: 'text-orange-500', isImage: false },
      { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500', isImage: false },
      { name: 'React', icon: FaReact, color: 'text-cyan-400', isImage: false },
      { name: 'Next JS', icon: SiNextdotjs, color: 'text-white', isImage: false },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400', isImage: false },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600', isImage: false },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    skills: [
      { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-500', isImage: false },
      { name: 'Node JS', icon: SiNodedotjs, color: 'text-green-500', isImage: false },
      { name: 'Express JS', icon: SiExpress, color: 'text-gray-300', isImage: false },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', isImage: false },
      { name: 'MySQL', icon: null, color: 'text-blue-500', isImage: true, imageSrc: '/mysql-logo.svg' },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    skills: [
      { name: 'React Native', icon: FaReact, color: 'text-cyan-400', isImage: false },
      { name: 'Flutter', icon: null, color: 'text-blue-400', isImage: true, imageSrc: '/Flutter_logo.svg.png' },
    ],
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    skills: [
      { name: 'C', icon: () => <span className="text-3xl font-bold">C</span>, color: 'text-blue-600', isImage: false },
      { name: 'Java', icon: FaJava, color: 'text-orange-500', isImage: false },
      { name: 'JavaScript', icon: () => <span className="text-3xl font-bold">JS</span>, color: 'text-yellow-400', isImage: false },
      { name: 'Python', icon: null, color: 'text-blue-500', isImage: true, imageSrc: '/Python.png' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: [
      { name: 'Git', icon: null, color: 'text-orange-600', isImage: true, imageSrc: '/Git_icon.svg.png' },
      { name: 'GitHub', icon: FaGithub, color: 'text-white', isImage: false },
      { name: 'Figma', icon: FaFigma, color: 'text-purple-500', isImage: false },
      { name: 'Postman', icon: SiPostman, color: 'text-orange-500', isImage: false },
      { name: 'Jira', icon: SiJira, color: 'text-blue-600', isImage: false },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center px-4 md:px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-gray-900 via-purple-950 to-black opacity-70" aria-hidden />

      <div className="relative max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="text-center text-5xl md:text-6xl font-bold text-white mb-20"
        >
          Technology Skills
        </motion.h2>

        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 * catIndex }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-slate-400 mb-8 text-center">
                {category.title}
              </h3>

              <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.1 * catIndex + 0.05 * skillIndex,
                      }}
                      whileHover={{ scale: 1.15, y: -8 }}
                      className="group flex flex-col items-center gap-3"
                    >
                      <div className="relative flex items-center justify-center w-20 h-20 rounded-xl bg-linear-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/30 shadow-lg shadow-purple-500/10 transition-all duration-300 group-hover:bg-linear-to-br group-hover:from-purple-600/40 group-hover:to-purple-800/40 group-hover:border-purple-400 group-hover:shadow-purple-500/50">
                        {skill.isImage && skill.imageSrc ? (
                          <Image
                            src={skill.imageSrc}
                            alt={skill.name}
                            width={80}
                            height={80}
                            className="w-11 h-11 object-contain"
                            priority
                          />
                        ) : IconComponent ? (
                          <IconComponent className={`text-4xl ${skill.color}`} />
                        ) : null}
                      </div>
                      <p className="text-sm text-slate-300 font-semibold text-center whitespace-nowrap group-hover:text-purple-300 transition-colors">
                        {skill.name}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
