import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import { roadmaps } from '../data/content';

export default function RoadmapPage() {
  const [activeMap, setActiveMap] = useState(roadmaps[0].id);

  return (
    <>
      <PageHero
        badge="YOUR PATH TO INDUSTRY-READY"
        title="Finally,"
        accentTitle="Clarity."
        subtitle="See exactly what your journey looks like — semester by semester, skill by skill, project by project."
        ctaText="Start Your Journey"
        ctaHref="/apply"
        secondaryCtaText="View Programs"
        secondaryCtaHref="/programs"
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Year Selector */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {roadmaps.map((r) => (
              <button key={r.id} onClick={() => setActiveMap(r.id)}
                className={`px-5 py-3 rounded-xl font-semibold text-sm transition-all ${
                  activeMap === r.id ? 'bg-brand-700 text-white shadow-md' : 'bg-surface-100 text-surface-700 hover:bg-surface-200'
                }`}>
                {r.title}
              </button>
            ))}
          </div>

          {/* Active Roadmap */}
          {roadmaps.filter(r => r.id === activeMap).map((r) => (
            <motion.div key={r.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-surface-900 text-center mb-12">{r.title} Roadmap</h2>

              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-100 hidden sm:block" />

                <div className="space-y-8">
                  {r.semesters.map((sem, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                      className="relative sm:pl-16">
                      {/* Timeline dot */}
                      <div className="hidden sm:flex absolute left-3.5 top-6 w-5 h-5 rounded-full bg-brand-600 border-4 border-brand-100 z-10" />

                      <div className="bg-surface-50 rounded-2xl p-6 sm:p-8 border border-surface-200">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-xs font-bold text-white bg-brand-700 px-3 py-1 rounded-full">{sem.name}</span>
                          <span className="text-sm font-semibold text-surface-500">{sem.focus}</span>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                          {/* Skills */}
                          <div>
                            <h4 className="font-bold text-surface-900 text-sm mb-3 flex items-center gap-2">
                              <span className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center text-xs">🧠</span> Skills
                            </h4>
                            <ul className="space-y-2">
                              {sem.skills.map((s, j) => (
                                <li key={j} className="flex items-center gap-2 text-sm text-surface-600">
                                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full flex-shrink-0" />{s}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Projects */}
                          <div>
                            <h4 className="font-bold text-surface-900 text-sm mb-3 flex items-center gap-2">
                              <span className="w-6 h-6 rounded bg-green-100 flex items-center justify-center text-xs">🛠️</span> Projects
                            </h4>
                            <ul className="space-y-2">
                              {sem.projects.map((p, j) => (
                                <li key={j} className="flex items-center gap-2 text-sm text-surface-600">
                                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />{p}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Milestone */}
                          <div>
                            <h4 className="font-bold text-surface-900 text-sm mb-3 flex items-center gap-2">
                              <span className="w-6 h-6 rounded bg-amber-100 flex items-center justify-center text-xs">🎯</span> Milestone
                            </h4>
                            <div className="bg-white rounded-xl p-4 border border-amber-200">
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                                <span className="text-sm font-medium text-surface-700">{sem.milestone}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Skills Progression */}
          <div className="mt-20">
            <h3 className="text-2xl font-extrabold text-surface-900 text-center mb-10">Skills Progression Matrix</h3>
            <div className="overflow-x-auto">
              <div className="min-w-[600px] space-y-3">
                {[
                  { skill: 'Programming Fundamentals', s1: '⬛⬛⬛⬜⬜', s2: '⬛⬛⬛⬛⬜' },
                  { skill: 'Web Development', s1: '⬛⬛⬜⬜⬜', s2: '⬛⬛⬛⬛⬜' },
                  { skill: 'Git & GitHub', s1: '⬛⬛⬛⬜⬜', s2: '⬛⬛⬛⬛⬛' },
                  { skill: 'DSA', s1: '⬛⬜⬜⬜⬜', s2: '⬛⬛⬛⬜⬜' },
                  { skill: 'Portfolio Building', s1: '⬛⬛⬜⬜⬜', s2: '⬛⬛⬛⬛⬜' },
                  { skill: 'Interview Skills', s1: '⬜⬜⬜⬜⬜', s2: '⬛⬛⬛⬜⬜' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-4 bg-surface-50 rounded-xl px-4 py-3 border border-surface-100">
                    <span className="text-sm font-medium text-surface-700 w-48 flex-shrink-0">{row.skill}</span>
                    <div className="flex-1 grid grid-cols-2 gap-4">
                      <span className="text-sm font-mono">{row.s1}</span>
                      <span className="text-sm font-mono">{row.s2}</span>
                    </div>
                  </div>
                ))}
                <div className="flex items-center gap-4 px-4">
                  <span className="w-48 flex-shrink-0" />
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    <span className="text-xs text-surface-500 font-semibold">Semester 1</span>
                    <span className="text-xs text-surface-500 font-semibold">Semester 2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-surface-900 via-brand-900 to-brand-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg text-brand-200 mb-8">The roadmap is clear. The next step is yours.</p>
          <Link to="/apply" className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold text-lg rounded-2xl hover:shadow-xl hover:shadow-accent-500/25 transition-all active:scale-95">
            Start Your Journey — Apply Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
