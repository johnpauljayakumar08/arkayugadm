
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const SERVICES_OPTIONS = [
  "Search Engine Optimization (SEO)",
  "Google Ads / PPC",
  "Social Media Marketing",
  "Lead Generation",
  "Website Development",
  "Branding & Design",
  "E-commerce Solutions",
  "Mobile App Development",
  "Training & Workshops",
  "Others"
];

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState(SERVICES_OPTIONS[0]);
  const [brief, setBrief] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('http://localhost:4000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, company, service, brief })
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || 'Server error');
      }
      setSubmitted(true);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Submission failed');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white p-10 rounded-3xl shadow-2xl border border-brand-gold/20 text-center">
        <div className="w-20 h-20 bg-brand-gold/10 text-brand-maroon rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} />
        </div>
        <h3 className="text-2xl font-black text-brand-maroon mb-4">Request Received!</h3>
        <p className="text-slate-600 mb-8 font-medium">
          Our digital marketing specialists will contact you within 24 hours to discuss your project.
        </p>
        <button 
          onClick={() => {
            setSubmitted(false);
            setName('');
            setEmail('');
            setPhone('');
            setCompany('');
            setService(SERVICES_OPTIONS[0]);
            setBrief('');
            setError(null);
          }}
          className="text-brand-maroon font-black hover:text-brand-gold transition-colors uppercase tracking-widest text-sm"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-brand-maroon/5">
      <div className="mb-8">
        <h3 className="text-2xl font-black text-brand-maroon mb-2 tracking-tight">Request an Audit</h3>
        <p className="text-slate-500 font-medium">Let's discuss how we can bring Gold Standard performance to your brand.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-black text-brand-maroon uppercase tracking-widest mb-2">Full Name</label>
            <input 
              required
              type="text" 
              placeholder="Full Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-maroon focus:border-transparent outline-none transition-all font-bold"
            />
          </div>
          <div>
            <label className="block text-xs font-black text-brand-maroon uppercase tracking-widest mb-2">Email Address</label>
            <input 
              required
              type="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-maroon focus:border-transparent outline-none transition-all font-bold"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-black text-brand-maroon uppercase tracking-widest mb-2">Phone Number</label>
            <input 
              required
              type="tel" 
              placeholder="Phone Number" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-maroon focus:border-transparent outline-none transition-all font-bold"
            />
          </div>
          <div>
            <label className="block text-xs font-black text-brand-maroon uppercase tracking-widest mb-2">Company Name</label>
            <input 
              required
              type="text" 
              placeholder="Company" 
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-maroon focus:border-transparent outline-none transition-all font-bold"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-black text-brand-maroon uppercase tracking-widest mb-2">Service Portfolio</label>
          <select value={service} onChange={(e) => setService(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-maroon focus:border-transparent outline-none transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M5%207L10%2012L15%207%22%20stroke%3D%22%235D1B22%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E')] bg-[length:20px_20px] bg-[right_1rem_center] bg-no-repeat font-bold">
            {SERVICES_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-xs font-black text-brand-maroon uppercase tracking-widest mb-2">Project Brief</label>
          <textarea 
            rows={4}
            placeholder="Tell us about your objectives..." 
            value={brief}
            onChange={(e) => setBrief(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-maroon focus:border-transparent outline-none transition-all resize-none font-bold"
          ></textarea>
        </div>

        {error && <div className="text-sm text-red-600 font-medium">{error}</div>}

        <button 
          disabled={loading}
          type="submit" 
          className="w-full bg-brand-maroon text-white font-black py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-brand-maroonDark transition-all shadow-xl hover:shadow-brand-maroon/20 disabled:opacity-70 uppercase tracking-widest"
        >
          {loading ? (
            <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <>
              <span>Get Free Strategy Call</span>
              <Send size={18} className="text-brand-gold" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
