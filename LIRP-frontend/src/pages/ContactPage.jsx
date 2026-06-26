import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, MapPin, Mail, Phone, Clock } from 'lucide-react';
import PageHero from '../components/PageHero';
import ConsultationModal from '../components/ConsultationModal';
import api from '../api';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = 'Required';
    if (!formData.email.trim()) e.email = 'Required';
    if (!formData.message.trim()) e.message = 'Required';
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
  if (!validate()) return;

  try {
   const res = await api.post('/contact', formData);
    const data = await res.json();
    if (data.success) setSubmitted(true);
    else alert(data.message);
  } catch (err) {
    alert('Something went wrong. Please try again.');
  }
};

  const handleChange = (ev) => {
    setFormData(p => ({ ...p, [ev.target.name]: ev.target.value }));
    if (errors[ev.target.name]) setErrors(p => { const n = { ...p }; delete n[ev.target.name]; return n; });
  };

  return (
    <>
      <PageHero
        badge="GET IN TOUCH"
        title="We're Here"
        accentTitle="For You"
        subtitle="Have questions? Need guidance? Want to visit? Reach out — we respond within hours, not days."
        ctaText="Book Free Consultation"
        ctaHref="#book"
        secondaryCtaText="Apply Now"
        secondaryCtaHref="/apply"
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-surface-900 mb-6">Send Us a Message</h2>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-surface-900 mb-1.5">Name <span className="text-red-500">*</span></label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name"
                        className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-300 bg-red-50' : 'border-surface-200'} focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm`} />
                      {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-surface-900 mb-1.5">Email <span className="text-red-500">*</span></label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com"
                        className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-300 bg-red-50' : 'border-surface-200'} focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm`} />
                      {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-surface-900 mb-1.5">Phone <span className="text-surface-400 font-normal">(optional)</span></label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-surface-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-surface-900 mb-1.5">Subject</label>
                      <select name="subject" value={formData.subject} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-surface-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm bg-white">
                        <option value="">Select a topic</option>
                        <option value="programs">Program Inquiry</option>
                        <option value="apply">Application Help</option>
                        <option value="workshop">Workshop Registration</option>
                        <option value="visit">Office Visit</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-surface-900 mb-1.5">Message <span className="text-red-500">*</span></label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={5}
                      placeholder="How can we help you?"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-300 bg-red-50' : 'border-surface-200'} focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm resize-none`} />
                    {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                  </div>
                  <button type="submit"
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-700 to-brand-800 text-white font-bold text-base rounded-xl hover:shadow-lg transition-all active:scale-95">
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              ) : (
                <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-surface-900 mb-2">Message Sent!</h3>
                  <p className="text-surface-600 mb-6">We'll get back to you within 24 hours. For faster response, reach us on WhatsApp.</p>
                  <a href="https://wa.me/916367064714" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors">
                    💬 Chat on WhatsApp
                  </a>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-surface-50 rounded-2xl p-6 border border-surface-200">
                <h3 className="font-bold text-surface-900 mb-4">Direct Channels</h3>
                <div className="space-y-4">
                  <a href="https://wa.me/916367064714" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center text-white">💬</div>
                    <div>
                      <p className="font-semibold text-surface-900 text-sm">WhatsApp</p>
                      <p className="text-xs text-surface-500">Fastest response</p>
                    </div>
                  </a>
                  <a href="tel:+916367064714"
                    className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                    <Phone className="w-5 h-5 text-blue-600 ml-2.5" />
                    <div>
                      <p className="font-semibold text-surface-900 text-sm">Call Us</p>
                      <p className="text-xs text-surface-500">Mon-Sat, 10am-7pm</p>
                    </div>
                  </a>
                  <a href="as3835129@gmail.com"
                    className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                    <Mail className="w-5 h-5 text-purple-600 ml-2.5" />
                    <div>
                      <p className="font-semibold text-surface-900 text-sm">Email</p>
                      <p className="text-xs text-surface-500">as3835129@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-brand-600" />
                  <h3 className="font-bold text-surface-900">Visit Our Office</h3>
                </div>
                <p className="text-sm text-surface-600 mb-3">Laxmaya Technologies<br />Jaipur, Rajasthan, India</p>
                <div className="flex items-center gap-2 text-sm text-surface-500 mb-4">
                  <Clock className="w-4 h-4" /> Mon-Sat: 10:00 AM - 7:00 PM
                </div>
                <div className="bg-white rounded-xl p-4 border border-surface-200 text-center">
                  <p className="text-xs text-surface-500">We welcome walk-in visits! Come see what LIRP is all about.</p>
                </div>
              </div>

              <div id="book" className="bg-gradient-to-br from-surface-900 to-brand-900 rounded-2xl p-6 text-center">
                <h3 className="font-bold text-white mb-2">Prefer a Guided Conversation?</h3>
                <p className="text-sm text-brand-200 mb-4">Book a free 15-minute consultation with our mentors.</p>
                <button onClick={() => setModalOpen(true)}
                  className="w-full py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold text-sm rounded-xl hover:shadow-lg transition-all active:scale-95">
                  Book Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
