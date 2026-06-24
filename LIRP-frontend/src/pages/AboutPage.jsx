import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Eye, Heart, Building, MapPin } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="THE STORY BEHIND LIRP"
        title="Built By Industry."
        accentTitle="For Students."
        subtitle="LIRP was born from a simple observation: thousands graduate with degrees but without the skills, portfolio, or confidence to succeed."
        ctaText="Explore Programs"
        ctaHref="/programs"
        secondaryCtaText="Contact Us"
        secondaryCtaHref="/contact"
      />

      {/* Origin Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-extrabold text-surface-900 mb-6">Why We Built LIRP</h2>
            <div className="space-y-4 text-surface-600 leading-relaxed">
              <p>Every year, <strong className="text-surface-900">thousands of engineering and computer science students graduate across India</strong>. Yet the industry consistently reports a skills gap. Why?</p>
              <p>Because <strong className="text-surface-900">colleges teach theory, but the industry needs practitioners</strong>. Students leave with degrees but without portfolios, GitHub profiles, interview skills, or career clarity.</p>
              <p>LIRP was created to fix this — not with more lectures, but with <strong className="text-surface-900">real projects, real mentorship, and real industry exposure</strong>. We don't sell certificates. We build professionals.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-surface-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Target className="w-6 h-6" />, title: 'Mission', text: 'Help students become industry-ready through practical learning, mentorship, and career guidance.' },
              { icon: <Eye className="w-6 h-6" />, title: 'Vision', text: 'Bridge the gap between academics and industry expectations across India.' },
              { icon: <Heart className="w-6 h-6" />, title: 'Values', text: 'Transparency, practical outcomes, student-first approach, and real measurable impact.' },
              { icon: <Building className="w-6 h-6" />, title: 'Backed By', text: 'Laxmaya Technologies — a real tech company with real industry experience in Jaipur.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-surface-100">
                <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center mb-3">{item.icon}</div>
                <h4 className="font-bold text-surface-900 mb-2">{item.title}</h4>
                <p className="text-sm text-surface-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Laxmaya Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-brand-700 bg-brand-100 rounded-full mb-4">BACKED BY</span>
              <h2 className="text-3xl font-extrabold text-surface-900 mb-4">Laxmaya Technologies</h2>
              <p className="text-surface-600 leading-relaxed mb-4">
                LIRP isn't a standalone initiative — it's powered by <strong className="text-surface-900">Laxmaya Technologies</strong>, a Jaipur-based technology company with real industry experience building software products and solutions.
              </p>
              <p className="text-surface-600 leading-relaxed mb-6">
                This means students don't just learn from curriculum — they learn from <strong className="text-surface-900">practitioners who build real products every day</strong>. The industry exposure isn't theoretical — it's the actual work happening at Laxmaya.
              </p>
              <ul className="space-y-2.5">
                {['Real tech company — not a coaching franchise', 'Industry professionals as mentors', 'Direct access to real development projects', 'Based in Jaipur, Rajasthan'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-surface-700">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-brand-50 to-purple-50 rounded-3xl p-8 border border-brand-100">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Founded', value: 'Jaipur, Rajasthan' },
                  { label: 'Type', value: 'Technology Company' },
                  { label: 'Focus', value: 'Software Products' },
                  { label: 'Students Impacted', value: '500+' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white rounded-2xl p-4 shadow-sm">
                    <p className="text-xs text-surface-500 mb-1">{stat.label}</p>
                    <p className="font-bold text-surface-900">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-surface-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-brand-700 bg-brand-100 rounded-full">THE TEAM</span>
            <h2 className="mt-4 text-3xl font-extrabold text-surface-900">People Who <span className="text-gradient">Care</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { role: 'Program Director', desc: 'Oversees curriculum and student outcomes', emoji: '👨‍💼' },
              { role: 'Technical Mentor', desc: 'Full-stack development and project guidance', emoji: '👩‍💻' },
              { role: 'Career Coach', desc: 'Resume, interview, and placement guidance', emoji: '🎯' },
              { role: 'Community Manager', desc: 'Student engagement and event coordination', emoji: '🤝' },
              { role: 'Workshop Lead', desc: 'Hands-on workshop design and delivery', emoji: '🛠️' },
              { role: 'Industry Advisor', desc: 'External industry connections and insights', emoji: '🌐' },
            ].map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-surface-200 hover:border-brand-200 hover:shadow-md transition-all text-center">
                <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{m.emoji}</span>
                </div>
                <h3 className="font-bold text-surface-900 mb-1">{m.role}</h3>
                <p className="text-sm text-surface-500">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-gradient-to-br from-brand-50 to-purple-50 rounded-3xl p-8 sm:p-12 border border-brand-100">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-brand-700 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold text-surface-900 mb-2">Visit Us in Jaipur</h3>
                <p className="text-surface-600 mb-1">Laxmaya Technologies, Jaipur, Rajasthan, India</p>
                <p className="text-sm text-surface-500">We believe in face-to-face mentorship. Come visit our office and see what LIRP is all about.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-surface-900 via-brand-900 to-brand-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Now You Know Us. Let's Get Started.</h2>
          <p className="text-lg text-brand-200 mb-8">Explore our programs or apply directly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply" className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold text-lg rounded-2xl hover:shadow-xl transition-all active:scale-95">
              Apply Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/programs" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/10 text-white font-bold text-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
              Explore Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
