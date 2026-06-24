import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Shield, Star } from 'lucide-react';
import { problems, howItWorksSteps, stats, testimonials, differentiators, faqs } from '../data/content';
import ConsultationModal from '../components/ConsultationModal';

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl border border-surface-200 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-surface-50 transition-colors">
        <span className="text-base font-semibold text-surface-900 pr-4">{q}</span>
        <span className={`text-brand-600 transition-transform ${open ? 'rotate-180' : ''}`}>▾</span>
      </button>
      {open && <div className="px-5 pb-5 text-surface-600 leading-relaxed">{a}</div>}
    </div>
  );
}

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* HERO */}
<section className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-900 via-brand-800 to-slate-900 overflow-hidden py-20 lg:py-0">
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-20 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl" />
    <div className="absolute bottom-20 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl" />
  </div>
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
      
      {/* Left Column: Text Content */}
      <div className="max-w-3xl lg:col-span-7 flex flex-col justify-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-brand-200 text-xs sm:text-sm font-medium mb-6 self-start">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Industry Readiness Program — Jaipur
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
          Stop Graduating<br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-orange-400">Unprepared.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-brand-200 leading-relaxed max-w-xl mb-8">
          Bridge the gap between college and industry. Build real projects. Get mentorship. Create a portfolio that gets you hired.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-8">
          <button onClick={() => setModalOpen(true)}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold text-base rounded-2xl hover:shadow-xl hover:shadow-accent-500/25 transition-all active:scale-95">
            Book Free Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <Link to="/programs"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-base rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
            Explore Programs
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-3 text-brand-300 text-sm">
          <Users className="w-4 h-4" /> 500+ students already started their industry journey
        </motion.div>
      </div>

      {/* Right Column: Floating cards desktop container */}
      <div className="hidden lg:block lg:col-span-5 relative h-[500px] w-full">
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute right-0 top-12 glass-card rounded-2xl p-5 max-w-xs border border-white/10 shadow-2xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-lg">💻</div>
            <div><p className="font-bold text-surface-900 text-sm">New Project Deployed</p><p className="text-surface-500 text-xs">Full-stack web app</p></div>
          </div>
          <div className="flex gap-1.5">
            <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium">React</span>
            <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs font-medium">Node.js</span>
            <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs font-medium">MongoDB</span>
          </div>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
          animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-8 bottom-16 glass-card rounded-2xl p-5 max-w-xs border border-white/10 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-lg">⭐</div>
            <div><p className="font-bold text-surface-900 text-sm">Internship Call!</p><p className="text-surface-500 text-xs">"Thanks to my LIRP portfolio"</p></div>
          </div>
        </motion.div>
      </div>

    </div>
  </div>

  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block pointer-events-none">
    <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
      className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
      <div className="w-1 h-2 bg-white/50 rounded-full" />
    </motion.div>
  </div>
</section>
      {/* PROBLEM */}
      <section className="py-20 bg-surface-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-red-700 bg-red-100 rounded-full">THE REALITY</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-surface-900">
              Your College Won't Prepare You <span className="text-gradient-warm">For the Industry.</span>
            </h2>
            <p className="mt-4 text-lg text-surface-700 max-w-2xl mx-auto">You're not the problem. The system is. Here's what every student faces:</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {problems.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="bg-white rounded-2xl p-6 border border-surface-200 hover:border-red-200 hover:shadow-md transition-all">
                <span className="text-3xl mb-4 block">{p.icon}</span>
                <p className="text-surface-900 font-semibold mb-2 leading-snug">{p.text}</p>
                <p className="text-red-600 text-sm font-medium">⚡ {p.stat}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 text-center">
            <p className="text-xl sm:text-2xl font-bold text-surface-900">Sound familiar? <span className="text-brand-700">That's exactly why LIRP exists.</span></p>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-brand-700 bg-brand-100 rounded-full">THE LIRP PROCESS</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-surface-900">Your Journey to <span className="text-gradient">Industry-Ready</span></h2>
            <p className="mt-4 text-lg text-surface-700 max-w-2xl mx-auto">A clear, step-by-step process that takes you from confusion to confidence.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {howItWorksSteps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-surface-50 rounded-2xl p-6 sm:p-8 border border-surface-200 hover:border-brand-200 hover:shadow-md transition-all h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl font-black text-brand-100">{step.number}</span>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-surface-900 mb-2">{step.title}</h3>
                <p className="text-surface-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/roadmap" className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700">
              See the full roadmap → <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Numbers That <span className="text-accent-400">Speak</span></h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
                <span className="text-3xl mb-3 block">{s.icon}</span>
                <div className="text-3xl sm:text-4xl font-black text-white mb-2">{s.value}</div>
                <div className="text-brand-300 text-sm font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS PREVIEW */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-brand-700 bg-brand-100 rounded-full">CHOOSE YOUR PATH</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-surface-900">Programs Designed For <span className="text-gradient">Your Year</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: '🚀', title: 'B.Tech 1st Year', sub: 'Foundation Builder', color: 'from-blue-600 to-blue-800', desc: 'Build your foundation with industry skills from day one.' },
              { icon: '⚡', title: 'B.Tech 2nd Year', sub: 'Skill Accelerator', color: 'from-purple-600 to-purple-800', desc: 'Level up with meaningful projects and internship prep.' },
              { icon: '🌱', title: 'BCA 1st Year', sub: 'Tech Explorer', color: 'from-emerald-600 to-emerald-800', desc: 'Bridge the gap. Build skills that set you apart.' },
              { icon: '🎯', title: 'BCA 2nd Year', sub: 'Career Launchpad', color: 'from-amber-500 to-orange-600', desc: 'Go from student to professional. Internship ready.' },
            ].map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group bg-white rounded-2xl border border-surface-200 overflow-hidden hover:border-brand-300 hover:shadow-xl transition-all">
                <div className={`h-1.5 bg-gradient-to-r ${p.color}`} />
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-2"><span className="text-2xl">{p.icon}</span><span className="text-xs font-bold uppercase tracking-wider text-surface-500">{p.sub}</span></div>
                  <h3 className="text-xl font-extrabold text-surface-900 mb-2">{p.title}</h3>
                  <p className="text-surface-600 text-sm mb-5">{p.desc}</p>
                  <Link to="/programs" className={`inline-flex items-center gap-1.5 text-sm font-semibold bg-gradient-to-r ${p.color} bg-clip-text text-transparent`}>
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/programs" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-700 to-brand-800 text-white font-bold rounded-2xl hover:shadow-lg transition-all active:scale-95">
              View All Programs <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-surface-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-brand-700 bg-brand-100 rounded-full">REAL STUDENTS, REAL RESULTS</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-surface-900">Don't Take Our Word For It. <span className="text-gradient">Take Theirs.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-surface-200 hover:border-brand-200 hover:shadow-lg transition-all">
                <div className="flex gap-1 mb-4">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}</div>
                <p className="text-surface-700 leading-relaxed mb-4">"{t.text}"</p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-50 text-brand-700 rounded-full text-sm font-medium mb-4">→ {t.outcome}</div>
                <div className="flex items-center gap-3 pt-4 border-t border-surface-200">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div><p className="font-semibold text-surface-900 text-sm">{t.name}</p><p className="text-surface-500 text-xs">{t.course}</p></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-brand-700 bg-brand-100 rounded-full">WHY LIRP IS DIFFERENT</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-surface-900">We're Not What You <span className="text-gradient">Think</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {differentiators.map((d, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-surface-200 hover:border-brand-200 hover:shadow-lg transition-all">
                <span className="text-3xl mb-4 block">{d.icon}</span>
                <h3 className="text-xl font-bold text-surface-900 mb-3">{d.title}</h3>
                <p className="text-surface-600 leading-relaxed mb-4">{d.description}</p>
                <div className="inline-flex px-3 py-1.5 bg-brand-50 text-brand-700 rounded-full text-xs font-semibold">{d.vs}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MID CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-700 to-brand-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-12 h-12 text-accent-400 mx-auto mb-4" />
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">Your Future Deserves Better Than Guesswork</h3>
          <p className="text-brand-200 text-lg mb-8 max-w-2xl mx-auto">Every day you wait is a day someone else is building the portfolio, skills, and connections that could be yours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold text-base rounded-2xl hover:shadow-xl hover:shadow-accent-500/25 transition-all active:scale-95">
              Apply Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button onClick={() => setModalOpen(true)} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold text-base rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-surface-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-brand-700 bg-brand-100 rounded-full">COMMON QUESTIONS</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-surface-900">Got Questions? <span className="text-gradient">We've Got Answers.</span></h2>
          </div>
          <div className="space-y-3">
            {faqs.slice(0, 6).map((f, i) => <FAQItem key={i} q={f.question} a={f.answer} />)}
          </div>
          <div className="text-center mt-8">
            <Link to="/contact" className="text-brand-600 font-semibold hover:underline">Still have questions? Contact us →</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-surface-900 via-brand-900 to-brand-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Ready to Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-orange-400">Industry-Ready?</span>
          </h2>
          <p className="text-lg text-brand-200 max-w-2xl mx-auto mb-8">Book a free consultation or apply directly. Your career transformation starts with one step.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply" className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold text-lg rounded-2xl hover:shadow-xl hover:shadow-accent-500/25 transition-all active:scale-95">
              Apply Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button onClick={() => setModalOpen(true)} className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/10 text-white font-bold text-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
