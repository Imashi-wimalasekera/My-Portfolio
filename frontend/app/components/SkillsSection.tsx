'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
  FaPython,
  FaGit,
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
  SiMysql,
  SiPostman,
  SiJira,
} from 'react-icons/si';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    skills: [
      { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
      { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
      { name: 'React', icon: FaReact, color: 'text-cyan-400' },
      { name: 'Next JS', icon: SiNextdotjs, color: 'text-white' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    skills: [
      { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-500' },
      { name: 'Node JS', icon: SiNodedotjs, color: 'text-green-500' },
      { name: 'Express JS', icon: SiExpress, color: 'text-gray-300' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
      { name: 'MySQL', icon: SiMysql, color: 'text-blue-500' },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    skills: [
      { name: 'React Native', icon: FaReact, color: 'text-cyan-400', isImage: false },
      { name: 'Flutter', icon: null, color: 'text-blue-400', isImage: true, imageSrc: '/flutter.jpg' },
    ],
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    skills: [
      { name: 'C', icon: () => <span className="text-3xl font-bold">C</span>, color: 'text-blue-600' },
      { name: 'Java', icon: FaJava, color: 'text-orange-500' },
      { name: 'JavaScript', icon: () => <span className="text-3xl font-bold">JS</span>, color: 'text-yellow-400' },
      { name: 'Python', icon: FaPython, color: 'text-blue-500' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: [
      { name: 'Git', icon: FaGit, color: 'text-orange-600' },
      { name: 'GitHub', icon: FaGithub, color: 'text-white' },
      { name: 'Figma', icon: FaFigma, color: 'text-purple-500' },
      { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
      { name: 'Jira', icon: SiJira, color: 'text-blue-600' },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center px-4 md:px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-950 to-black opacity-70" aria-hidden />

      <div className="relative max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
              viewport={{ once: true }}
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
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.1 * catIndex + 0.05 * skillIndex,
                      }}
                      whileHover={{ scale: 1.15, y: -8 }}
                      className="group flex flex-col items-center gap-3"
                    >
                      <div className="relative flex items-center justify-center w-20 h-20 rounded-xl bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/30 shadow-lg shadow-purple-500/10 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-purple-600/40 group-hover:to-purple-800/40 group-hover:border-purple-400 group-hover:shadow-purple-500/50">
                        {skill.isImage && skill.imageSrc ? (
                          <Image
                            src={skill.imageSrc}
                            alt={skill.name}
                            width={80}
                            height={80}
                            className="w-full h-full object-contain p-2"
                            priority
                          />
                        ) : (
                          <IconComponent className={`text-4xl ${skill.color}`} />
                        )}
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
