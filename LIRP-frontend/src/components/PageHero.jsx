import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PageHero({
  badge,
  title,
  accentTitle,
  subtitle,
  ctaText,
  ctaHref = '/apply',
  secondaryCtaText,
  secondaryCtaHref = '/programs',
}) {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-br from-brand-900 via-brand-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-brand-200 bg-white/10 rounded-full border border-white/20 mb-6">
          {badge}
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
          {title}
          {accentTitle && (
            <>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-orange-400">
                {accentTitle}
              </span>
            </>
          )}
        </h1>

        <p className="text-lg sm:text-xl text-brand-200 max-w-2xl mx-auto mb-8 leading-relaxed">
          {subtitle}
        </p>

        {(ctaText || secondaryCtaText) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {ctaText && (
              <Link
                to={ctaHref}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold text-base rounded-2xl hover:shadow-xl hover:shadow-accent-500/25 transition-all duration-300 active:scale-95"
              >
                {ctaText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
            {secondaryCtaText && (
              <Link
                to={secondaryCtaHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-base rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
