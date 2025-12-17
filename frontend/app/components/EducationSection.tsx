'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const educationItems = [
  {
    id: 'uom',
    title: 'University of Moratuwa',
    school: 'BSc. (Hons) in Information Technology',
    period: '2022 - Present',
    gradeLabel: 'CGPA',
    gradeValue: '3.37',
    summary:
      'Currently pursuing a Bachelor’s degree in Information Technology with a strong academic foundation and hands-on experience in software development and modern web technologies.',
    badge: 'Undergraduate',
    logo: '/uni logo.png',
  },
  {
    id: 'dnc',
    title: 'Dhammissara National College',
    school: 'G.C.E. Advanced Level',
    period: '2021',
    gradeLabel: 'Results',
    gradeValue: 'Physics – A | Chemistry – B | Biology – C',
    summary:
      'Completed Advanced Level studies in the Biology stream, developing strong analytical thinking and a solid foundation in science subjects.',
    badge: 'Biology Stream',
    logo: '/scl logo.webp',
  },
  {
    id: 'dnc-ol',
    title: 'Dhammissara National College',
    school: 'G.C.E. Ordinary Level',
    gradeLabel: 'Results',
    gradeValue: "9 A's",
    summary:
      "Successfully completed the G.C.E. Ordinary Level examination with strong performance across a broad range of subjects, establishing a solid academic foundation for advanced studies.",
     logo: '/scl logo.webp',
  },
  {
    id: 'tech-college',
    title: 'Technical College – Kuliyapitiya',
    school: 'National Certificate in Engineering Draughtsmanship',
    gradeLabel: 'NVQ Level',
    gradeValue: '4 (Completed Levels 3 & 4)',
    summary:
      'Completed vocational training in engineering draughtsmanship, gaining practical skills in technical drawing, design interpretation, and precision-based work.',
    logo: '/tec logo.jpg',
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="relative min-h-screen px-4 md:px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-950 to-black opacity-70" aria-hidden />

      <div className="relative max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-5xl md:text-6xl font-bold text-white mb-16"
        >
          Education
        </motion.h2>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-fuchsia-500 to-transparent rounded-full" aria-hidden />

          <div className="space-y-14">
            {educationItems.map((item, index) => {
              const isLeft = index % 2 === 0;
              const cardPosition = isLeft ? 'md:mr-auto' : 'md:ml-auto';
              return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 * index }}
                whileHover={{ y: -5 }}
                className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 group"
              >
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 border-purple-400 bg-gray-900/70 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.35)]">
                  <div className="w-4 h-4 rounded-full bg-purple-400" />
                </div>

                <div className={`w-full md:w-[48%] ${cardPosition} bg-gray-900/70 border border-purple-900 rounded-2xl p-6 md:p-8 shadow-xl shadow-purple-500/10 backdrop-blur transition-all duration-300 group-hover:bg-gray-900/90 group-hover:border-purple-500 group-hover:shadow-2xl group-hover:shadow-purple-500/30`}
                >
                  {item.logo ? (
                    <div className="flex gap-4 items-start mb-4">
                      <Image
                        src={item.logo}
                        alt={`${item.title} logo`}
                        width={70}
                        height={90}
                        className="w-16 h-16 flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-white mb-1">{item.title}</h3>
                        <p className="text-lg text-slate-200 mb-2">{item.school}</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-2xl font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-lg text-slate-200 mb-2">{item.school}</p>
                    </>
                  )}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    {item.badge && (
                      <span className="text-sm px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">
                        {item.badge}
                      </span>
                    )}
                    <span className="text-sm text-slate-300">{item.period}</span>
                  </div>
                  <p className="text-sm text-purple-300 font-semibold mb-4">
                    {item.gradeLabel}: {item.gradeValue}
                  </p>
                  <p className="text-base text-slate-200 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
