import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Send } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', course: '', college: '', concern: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.phone.trim()) e.phone = 'Phone is required';
    else if (!/^[0-9+\s-]{10,}$/.test(formData.phone)) e.phone = 'Enter a valid phone';
    if (!formData.course) e.course = 'Select your course';
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
    const response = await fetch(
      'http://localhost:5000/api/consultation',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (data.success) {
      setSubmitted(true);
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert('Failed to submit consultation request');
  }
};

  const handleChange = (ev) => {
    setFormData(p => ({ ...p, [ev.target.name]: ev.target.value }));
    if (errors[ev.target.name]) setErrors(p => { const n = { ...p }; delete n[ev.target.name]; return n; });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]" />
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="sticky top-0 bg-white rounded-t-3xl border-b border-surface-100 px-6 py-5 flex items-center justify-between z-10">
                <div>
                  <h3 className="text-xl font-bold text-surface-900">Book Free Consultation</h3>
                  <p className="text-sm text-surface-500 mt-0.5">15 min • No obligation • Personalized</p>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-surface-100 rounded-xl transition-colors">
                  <X className="w-5 h-5 text-surface-500" />
                </button>
              </div>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-surface-900 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-300 bg-red-50' : 'border-surface-200'} focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm`} />
                    {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-surface-900 mb-1.5">Phone / WhatsApp <span className="text-red-500">*</span></label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-300 bg-red-50' : 'border-surface-200'} focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm`} />
                    {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-surface-900 mb-1.5">Email <span className="text-surface-400 font-normal">(optional)</span></label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-surface-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-surface-900 mb-1.5">Course & Year <span className="text-red-500">*</span></label>
                    <select name="course" value={formData.course} onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.course ? 'border-red-300 bg-red-50' : 'border-surface-200'} focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm bg-white`}>
                      <option value="">Select your course</option>
                      <option value="btech-1">B.Tech 1st Year</option>
                      <option value="btech-2">B.Tech 2nd Year</option>
                      <option value="bca-1">BCA 1st Year</option>
                      <option value="bca-2">BCA 2nd Year</option>
                    </select>
                    {errors.course && <p className="mt-1 text-xs text-red-600">{errors.course}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-surface-900 mb-1.5">College Name <span className="text-surface-400 font-normal">(optional)</span></label>
                    <input type="text" name="college" value={formData.college} onChange={handleChange} placeholder="Your college"
                      className="w-full px-4 py-3 rounded-xl border border-surface-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-surface-900 mb-1.5">Biggest Career Concern <span className="text-surface-400 font-normal">(optional)</span></label>
                    <textarea name="concern" value={formData.concern} onChange={handleChange} rows={3} placeholder="What worries you most?"
                      className="w-full px-4 py-3 rounded-xl border border-surface-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm resize-none" />
                  </div>
                  <button type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold text-base rounded-xl hover:shadow-lg hover:shadow-accent-500/25 transition-all active:scale-[0.98]">
                    <Send className="w-4 h-4" /> Book My Free Consultation
                  </button>
                  <p className="text-center text-xs text-surface-400">We'll reach out on WhatsApp within 30 minutes</p>
                </form>
              ) : (
                <div className="p-8 text-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 15 }}>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-surface-900 mb-2">You're All Set! 🎉</h3>
                    <p className="text-surface-600 mb-6">Thanks, {formData.name}! We'll reach out on WhatsApp within 30 minutes.</p>
                    <div className="bg-brand-50 rounded-xl p-4 text-sm text-brand-700 mb-6 text-left">
                      <p className="font-semibold mb-1">What happens next?</p>
                      <p>1. We'll message you on WhatsApp</p>
                      <p>2. Schedule a convenient time</p>
                      <p>3. You'll get personalized career guidance</p>
                      <p>4. Zero obligation, always</p>
                    </div>
                    <button onClick={onClose} className="px-8 py-3 bg-surface-100 text-surface-700 font-semibold rounded-xl hover:bg-surface-200 transition-colors">Close</button>
                  </motion.div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
