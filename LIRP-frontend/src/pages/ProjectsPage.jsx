import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import PageHero from '../components/PageHero';
import { projects, projectCategories } from '../data/content';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <PageHero
        badge="PROOF OF CAPABILITY"
        title="Real Projects."
        accentTitle="Real Skills."
        subtitle="These aren't toy exercises. Every project in LIRP is designed to go into your portfolio and prove your skills to the industry."
        ctaText="Apply to Start Building"
        ctaHref="/apply"
        secondaryCtaText="View Programs"
        secondaryCtaHref="/programs"
      />

      {/* Category Filter */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {projectCategories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  activeCategory === cat ? 'bg-brand-700 text-white shadow-md' : 'bg-surface-100 text-surface-600 hover:bg-surface-200'
                }`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="group bg-white rounded-2xl border border-surface-200 overflow-hidden hover:border-brand-300 hover:shadow-xl transition-all">
                {/* Project Visual */}
                <div className="h-40 bg-gradient-to-br from-brand-50 to-purple-50 flex items-center justify-center border-b border-surface-100">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{project.image}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full">{project.category}</span>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      project.level === 'Beginner' ? 'bg-green-50 text-green-700' :
                      project.level === 'Intermediate' ? 'bg-amber-50 text-amber-700' : 'bg-red-50 text-red-700'
                    }`}>{project.level}</span>
                  </div>
                  <h3 className="text-lg font-bold text-surface-900 mb-2">{project.title}</h3>
                  <p className="text-surface-600 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t, j) => (
                      <span key={j} className="px-2 py-1 bg-surface-50 text-surface-600 rounded text-xs font-medium border border-surface-100">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-surface-100">
                    <span className="text-xs text-surface-500">📂 {project.program}</span>
                    <span className="inline-flex items-center gap-1 text-xs text-brand-600 font-semibold">
                      <ExternalLink className="w-3 h-3" /> View
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub Showcase */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-surface-900 to-brand-900 rounded-3xl p-8 sm:p-12 text-center">
            <div className="text-4xl mb-4">🐙</div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Every Project Goes to GitHub</h3>
            <p className="text-brand-200 max-w-2xl mx-auto mb-8">
              We don't just build projects — we build your GitHub profile. Every project is version-controlled, documented, and deployed. Your portfolio becomes your proof.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-2xl hover:shadow-xl transition-all active:scale-95">
                Start Building Today <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/programs" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                Which Program Builds These?
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
