import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Send } from 'lucide-react';
import PageHero from '../components/PageHero';
import api from '../api';
const applyFaqs = [
  { q: 'Is there an application fee?', a: 'No. The application is completely free. There are no hidden charges at any step.' },
  { q: 'What happens after I apply?', a: "Our team reviews your application within 24 hours. You'll receive a call or WhatsApp message to discuss the next steps." },
  { q: "Can I apply if I'm not from Jaipur?", a: "Absolutely. While our office is in Jaipur, we offer online mentorship and support for students across India." },
  { q: "What if I'm not sure which program?", a: "No problem! Select \"Not sure\" and we'll help you find the right fit during your consultation call." },
];

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    course: '', college: '', currentGpa: '', whyJoin: '', referral: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!formData.firstName.trim()) e.firstName = 'Required';
    if (!formData.lastName.trim()) e.lastName = 'Required';
    if (!formData.email.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Invalid email';
    if (!formData.phone.trim()) e.phone = 'Required';
    else if (!/^[0-9+\s-]{10,}$/.test(formData.phone)) e.phone = 'Invalid phone';
    if (!formData.course) e.course = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // const handleSubmit = (ev) => {
  //   ev.preventDefault();
  //   if (!validate()) return;
  //   setSubmitted(true);
  // };

  const handleSubmit = async (ev) => {
  ev.preventDefault();
  const errs = validate();
  if (Object.keys(errs).length) { setErrors(errs); return; }

  const res = await api.post('/apply', formData);
  const data = await res.json();
  if (data.success) setSubmitted(true);
};

  const handleChange = (ev) => {
    setFormData(p => ({ ...p, [ev.target.name]: ev.target.value }));
    if (errors[ev.target.name]) setErrors(p => { const n = { ...p }; delete n[ev.target.name]; return n; });
  };

  return (
    <>
      <PageHero
        badge="TAKE THE LEAP"
        title="Apply to"
        accentTitle="LIRP"
        subtitle="Your industry-ready journey starts with this application. It takes 5 minutes. No fees. No obligation."
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {!submitted ? (
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-surface-900 mb-1.5">First Name <span className="text-red-500">*</span></label>
                      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name"
                        className={`w-full px-4 py-3 rounded-xl border ${errors.firstName ? 'border-red-300 bg-red-50' : 'border-surface-200'} focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm`} />
                      {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-surface-900 mb-1.5">Last Name <span className="text-red-500">*</span></label>
                      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name"
                        className={`w-full px-4 py-3 rounded-xl border ${errors.lastName ? 'border-red-300 bg-red-50' : 'border-surface-200'} focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm`} />
                      {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-surface-900 mb-1.5">Email <span className="text-red-500">*</span></label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com"
                        className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-300 bg-red-50' : 'border-surface-200'} focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm`} />
                      {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-surface-900 mb-1.5">Phone / WhatsApp <span className="text-red-500">*</span></label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX"
                        className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-300 bg-red-50' : 'border-surface-200'} focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm`} />
                      {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-surface-900 mb-1.5">Program <span className="text-red-500">*</span></label>
                    <select name="course" value={formData.course} onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.course ? 'border-red-300 bg-red-50' : 'border-surface-200'} focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm bg-white`}>
                      <option value="">Select your program</option>
                      <option value="btech-1">B.Tech 1st Year — Foundation Builder</option>
                      <option value="btech-2">B.Tech 2nd Year — Skill Accelerator</option>
                      <option value="bca-1">BCA 1st Year — Tech Explorer</option>
                      <option value="bca-2">BCA 2nd Year — Career Launchpad</option>
                      <option value="unsure">Not sure — help me choose</option>
                    </select>
                    {errors.course && <p className="mt-1 text-xs text-red-600">{errors.course}</p>}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-surface-900 mb-1.5">College Name <span className="text-surface-400 font-normal">(optional)</span></label>
                      <input type="text" name="college" value={formData.college} onChange={handleChange} placeholder="Your college"
                        className="w-full px-4 py-3 rounded-xl border border-surface-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-surface-900 mb-1.5">Current CGPA <span className="text-surface-400 font-normal">(optional)</span></label>
                      <input type="text" name="currentGpa" value={formData.currentGpa} onChange={handleChange} placeholder="e.g., 7.5"
                        className="w-full px-4 py-3 rounded-xl border border-surface-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-surface-900 mb-1.5">Why do you want to join LIRP? <span className="text-surface-400 font-normal">(optional)</span></label>
                    <textarea name="whyJoin" value={formData.whyJoin} onChange={handleChange} rows={4}
                      placeholder="Tell us about your career goals and what you hope to achieve..."
                      className="w-full px-4 py-3 rounded-xl border border-surface-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm resize-none" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-surface-900 mb-1.5">How did you hear about us? <span className="text-surface-400 font-normal">(optional)</span></label>
                    <select name="referral" value={formData.referral} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-surface-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm bg-white">
                      <option value="">Select an option</option>
                      <option value="instagram">Instagram</option>
                      <option value="friend">Friend / Referral</option>
                      <option value="college">College event</option>
                      <option value="search">Google Search</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <button type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold text-lg rounded-xl hover:shadow-lg hover:shadow-accent-500/25 transition-all active:scale-[0.98]">
                    <Send className="w-5 h-5" /> Submit Application
                  </button>
                </form>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-surface-50 rounded-2xl p-6 border border-surface-200">
                  <h3 className="font-bold text-surface-900 mb-4">Application Process</h3>
                  <div className="space-y-4">
                    {[
                      { step: '1', title: 'Submit Application', desc: 'Fill out the form — 5 minutes' },
                      { step: '2', title: 'Application Review', desc: 'We review within 24 hours' },
                      { step: '3', title: 'Consultation Call', desc: '15 min career guidance session' },
                      { step: '4', title: 'Enrollment', desc: 'Welcome to LIRP! 🎉' },
                    ].map((s, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-700 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">{s.step}</div>
                        <div>
                          <p className="font-semibold text-surface-900 text-sm">{s.title}</p>
                          <p className="text-xs text-surface-500">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                  <h3 className="font-bold text-surface-900 mb-3">What Happens After You Apply?</h3>
                  <ul className="space-y-2">
                    {[
                      'We review your application within 24 hours',
                      'You get a WhatsApp message from our team',
                      'We schedule a free consultation call',
                      'You get personalized career guidance',
                      'If LIRP is the right fit, you get enrollment details',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-surface-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-surface-50 rounded-2xl p-6 border border-surface-200">
                  <h3 className="font-bold text-surface-900 mb-4">FAQs</h3>
                  <div className="space-y-3">
                    {applyFaqs.map((f, i) => (
                      <div key={i}>
                        <p className="text-sm font-semibold text-surface-900">{f.q}</p>
                        <p className="text-xs text-surface-600 mt-0.5">{f.a}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-green-50 rounded-2xl p-6 border border-green-100 text-center">
                  <p className="text-sm font-semibold text-surface-900 mb-2">Need help applying?</p>
                  <a href="https://wa.me/916367064714" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white font-semibold text-sm rounded-xl hover:bg-green-700 transition-colors">
                    💬 Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="max-w-xl mx-auto text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-extrabold text-surface-900 mb-4">Application Submitted! 🎉</h2>
              <p className="text-surface-600 text-lg mb-8">
                Thanks, {formData.firstName}! We've received your application. Our team will reach out on WhatsApp within 24 hours.
              </p>
              <div className="bg-brand-50 rounded-2xl p-6 text-left mb-8 border border-brand-100">
                <p className="font-semibold text-surface-900 mb-3">What's next:</p>
                <ol className="space-y-2 text-sm text-surface-700">
                  <li className="flex items-start gap-2"><span className="font-bold text-brand-700">1.</span> Look for our WhatsApp message</li>
                  <li className="flex items-start gap-2"><span className="font-bold text-brand-700">2.</span> Schedule your free consultation</li>
                  <li className="flex items-start gap-2"><span className="font-bold text-brand-700">3.</span> Get personalized career guidance</li>
                  <li className="flex items-start gap-2"><span className="font-bold text-brand-700">4.</span> Receive enrollment details</li>
                </ol>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-surface-100 text-surface-700 font-semibold rounded-xl hover:bg-surface-200 transition-colors">
                  Go Home
                </Link>
                <a href="https://wa.me/916367064714" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors">
                  💬 Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
