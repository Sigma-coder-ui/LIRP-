import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import ConsultationModal from '../components/ConsultationModal';
import { careerServices } from '../data/content';

export default function CareerSupportPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <PageHero
        badge="YOU'RE NOT ALONE"
        title="Career Support That"
        accentTitle="Actually Helps"
        subtitle="From mentorship to interview prep — we guide you through every step of your career journey. No guesswork required."
        ctaText="Get Career Support"
        ctaHref="/apply"
        secondaryCtaText="Book Consultation"
        secondaryCtaHref="#book"
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerServices.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-surface-200 hover:border-brand-200 hover:shadow-lg transition-all">
                <span className="text-4xl mb-4 block">{s.icon}</span>
                <h3 className="text-xl font-bold text-surface-900 mb-3">{s.title}</h3>
                <p className="text-surface-600 text-sm leading-relaxed mb-4">{s.description}</p>
                <ul className="space-y-1.5">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-surface-600">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Highlight */}
      <section className="py-20 bg-surface-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-brand-700 bg-brand-100 rounded-full mb-4">1-ON-1 MENTORSHIP</span>
              <h2 className="text-3xl font-extrabold text-surface-900 mb-4">Industry Mentors Who <span className="text-gradient">Actually Guide You</span></h2>
              <p className="text-surface-600 leading-relaxed mb-6">Our mentors aren't just teachers — they're working professionals from the tech industry. They've been where you want to go, and they'll help you get there.</p>
              <ul className="space-y-3 mb-8">
                {['Weekly check-in calls', 'Personalized career advice', 'Skill gap identification', 'Accountability & motivation', 'Industry insights & trends'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-surface-700">
                    <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs font-bold flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/apply" className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold text-sm rounded-xl hover:shadow-lg transition-all active:scale-95">
                Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-gradient-to-br from-brand-50 to-purple-50 rounded-3xl p-8 border border-brand-100">
              <div className="space-y-6">
                {[
                  { label: 'Mentor Sessions', value: '2,000+', desc: 'Sessions conducted' },
                  { label: 'Satisfaction Rate', value: '98%', desc: 'Students recommend' },
                  { label: 'Career Clarity', value: '95%', desc: 'Report improved clarity' },
                  { label: 'Mentor Response', value: '<30 min', desc: 'Average reply time' },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-black text-brand-700">{stat.value}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-surface-900">{stat.label}</p>
                      <p className="text-sm text-surface-500">{stat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="py-20 bg-gradient-to-br from-surface-900 via-brand-900 to-brand-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Ready for Real Career Guidance?</h2>
          <p className="text-lg text-brand-200 mb-8">Book a free consultation and get personalized career advice from industry mentors.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setModalOpen(true)}
              className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold text-lg rounded-2xl hover:shadow-xl transition-all active:scale-95">
              Book Free Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link to="/apply" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/10 text-white font-bold text-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
