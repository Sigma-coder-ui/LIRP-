import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, CheckCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import ConsultationModal from '../components/ConsultationModal';
import { programs } from '../data/content';

export default function ProgramsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProgram, setActiveProgram] = useState(programs[0].id);

  return (
    <>
      <PageHero
        badge="CHOOSE YOUR PATH"
        title="Programs Designed For"
        accentTitle="Your Year & Course"
        subtitle="Every program is tailored to your current academic year. No generic content — only what you need, when you need it."
        ctaText="Apply Now"
        ctaHref="/apply"
        secondaryCtaText="Book Consultation"
        secondaryCtaHref="#consultation"
      />

      {/* Program Tabs */}
      <section className="py-20 bg-white -mt-8 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Selector */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {programs.map((p) => (
              <button key={p.id} onClick={() => setActiveProgram(p.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all ${
                  activeProgram === p.id ? `bg-gradient-to-r ${p.color} text-white shadow-lg` : 'bg-surface-100 text-surface-700 hover:bg-surface-200'
                }`}>
                <span>{p.icon}</span> {p.title}
              </button>
            ))}
          </div>

          {/* Active Program Detail */}
          {programs.filter(p => p.id === activeProgram).map((p) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                {/* Left: Info */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{p.icon}</span>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-surface-900">{p.title}</h2>
                      <span className={`inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-gradient-to-r ${p.color} text-white`}>{p.subtitle}</span>
                    </div>
                  </div>
                  <p className="text-surface-600 leading-relaxed mb-6">{p.description}</p>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="flex items-center gap-1.5 text-sm text-surface-500"><Clock className="w-4 h-4" />{p.duration}</span>
                    <span className="text-sm text-surface-500">📅 {p.suitableFor}</span>
                  </div>
                  <h3 className="font-bold text-surface-900 mb-3">What You'll Achieve</h3>
                  <ul className="space-y-2.5 mb-6">
                    {p.outcomes.map((o, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-surface-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />{o}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to="/apply" className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold text-sm rounded-xl hover:shadow-lg transition-all active:scale-95">
                      Apply for This Program <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button onClick={() => setModalOpen(true)} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-surface-100 text-surface-700 font-semibold text-sm rounded-xl hover:bg-surface-200 transition-all">
                      Book Consultation
                    </button>
                  </div>
                </div>

                {/* Right: Curriculum */}
                <div>
                  <h3 className="font-bold text-surface-900 mb-4">Curriculum Overview</h3>
                  <div className="space-y-4">
                    {p.curriculum.map((c, i) => (
                      <div key={i} className="bg-surface-50 rounded-xl p-5 border border-surface-100">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">{c.phase}</span>
                          <span className="text-xs text-surface-500">{c.weeks} weeks</span>
                        </div>
                        <h4 className="font-semibold text-surface-900 mb-2">{c.title}</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {c.topics.map((t, j) => (
                            <span key={j} className="px-2.5 py-1 bg-white text-surface-600 rounded-lg text-xs font-medium border border-surface-200">{t}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="font-bold text-surface-900 mt-8 mb-3">Projects You'll Build</h3>
                  <div className="flex flex-wrap gap-2">
                    {p.projects.map((proj, i) => (
                      <span key={i} className="px-3 py-2 bg-brand-50 text-brand-700 rounded-xl text-sm font-medium">{proj}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Comparison Table */}
          <div className="mt-16">
            <h3 className="text-2xl font-extrabold text-surface-900 text-center mb-8">Program Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-surface-200">
                    <th className="text-left py-4 px-4 text-sm font-semibold text-surface-500">Feature</th>
                    {programs.map((p) => (
                      <th key={p.id} className="text-center py-4 px-4 text-sm font-semibold text-surface-900">{p.icon} {p.title}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Duration', '6 months', '6 months', '6 months', '6 months'],
                    ['Projects', '4', '4', '4', '4'],
                    ['Mentorship', '✓', '✓', '✓', '✓'],
                    ['Career Support', 'Basic', 'Advanced', 'Basic', 'Advanced'],
                    ['Interview Prep', '—', '✓', '—', '✓'],
                    ['Portfolio Review', '✓', '✓', '✓', '✓'],
                    ['GitHub Setup', '✓', '✓', '✓', '✓'],
                    ['Internship Guidance', '—', '✓', '—', '✓'],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-surface-100">
                      <td className="py-3 px-4 text-sm font-medium text-surface-700">{row[0]}</td>
                      {row.slice(1).map((cell, j) => (
                        <td key={j} className="py-3 px-4 text-sm text-center text-surface-600">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section id="consultation" className="py-20 bg-gradient-to-br from-surface-900 via-brand-900 to-brand-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Not Sure Which Program?</h2>
          <p className="text-lg text-brand-200 mb-8 max-w-2xl mx-auto">Book a free consultation. We'll help you find the perfect fit for your year, course, and goals.</p>
          <button onClick={() => setModalOpen(true)}
            className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold text-lg rounded-2xl hover:shadow-xl hover:shadow-accent-500/25 transition-all active:scale-95">
            Book Free Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
