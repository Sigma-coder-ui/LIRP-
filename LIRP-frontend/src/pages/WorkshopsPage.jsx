import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Calendar } from 'lucide-react';
import PageHero from '../components/PageHero';
import { upcomingWorkshops, pastWorkshops } from '../data/content';

export default function WorkshopsPage() {
  return (
    <>
      <PageHero
        badge="LEARN BY DOING"
        title="Hands-On Workshops"
        accentTitle="That Matter"
        subtitle="Interactive workshops led by industry professionals. Learn practical skills in real-time with guided, hands-on sessions."
        ctaText="Register for Next Workshop"
        ctaHref="#upcoming"
        secondaryCtaText="View Programs"
        secondaryCtaHref="/programs"
      />

      {/* Upcoming Workshops */}
      <section id="upcoming" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-brand-700 bg-brand-100 rounded-full">UPCOMING</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-surface-900">Don't Miss <span className="text-gradient">What's Next</span></h2>
          </div>

          <div className="space-y-6">
            {upcomingWorkshops.map((w, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-surface-200 p-6 sm:p-8 hover:border-brand-300 hover:shadow-xl transition-all">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                        w.level === 'Beginner' ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'
                      }`}>{w.level}</span>
                      <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full">{w.format}</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-surface-900 mb-2">{w.title}</h3>
                    <p className="text-surface-600 leading-relaxed mb-4">{w.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {w.topics.map((t, j) => (
                        <span key={j} className="px-3 py-1.5 bg-surface-50 text-surface-600 rounded-lg text-xs font-medium border border-surface-100">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-surface-600"><Calendar className="w-4 h-4 text-brand-500" />{w.date}</div>
                      <div className="flex items-center gap-2 text-sm text-surface-600"><span className="text-brand-500">🕐</span>{w.time}</div>
                      <div className="flex items-center gap-2 text-sm text-surface-600"><Users className="w-4 h-4 text-brand-500" />{w.seats}</div>
                    </div>
                    <Link to="/contact" className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-700 to-brand-800 text-white font-bold text-sm rounded-xl hover:shadow-lg transition-all active:scale-95">
                      Register Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Workshops */}
      <section className="py-20 bg-surface-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-brand-700 bg-brand-100 rounded-full">PAST WORKSHOPS</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-surface-900">Proof That We <span className="text-gradient">Deliver</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastWorkshops.map((w, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-surface-200 text-center">
                <h3 className="font-bold text-surface-900 mb-3">{w.title}</h3>
                <div className="flex items-center justify-center gap-4 text-sm text-surface-500">
                  <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{w.attendees}+</span>
                  <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />{w.rating}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Formats */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-surface-900">How Our <span className="text-gradient">Workshops Work</span></h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: '🏫', title: 'In-Person', desc: 'Hands-on at our Jaipur office with direct mentor access' },
              { icon: '💻', title: 'Online Live', desc: 'Interactive virtual sessions from anywhere in India' },
              { icon: '🔄', title: 'Hybrid', desc: 'Best of both worlds — attend in-person or online' },
            ].map((f, i) => (
              <div key={i} className="bg-surface-50 rounded-2xl p-6 border border-surface-100 text-center">
                <span className="text-3xl mb-3 block">{f.icon}</span>
                <h3 className="font-bold text-surface-900 mb-2">{f.title}</h3>
                <p className="text-sm text-surface-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-surface-900 via-brand-900 to-brand-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Workshops Are Just the Beginning</h2>
          <p className="text-lg text-brand-200 mb-8">Get full access to workshops + mentorship + projects + career support in our complete program.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply" className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold text-lg rounded-2xl hover:shadow-xl transition-all active:scale-95">
              Apply to Full Program <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
