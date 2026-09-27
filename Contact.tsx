import React, { useState } from 'react';
import { MessageSquare, Mail, Phone, Linkedin, MapPin, ExternalLink, ShieldCheck, Send, CheckCircle, Loader } from 'lucide-react';
import { candidateProfile } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 700);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Contact Information
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-amber-400 mx-auto rounded-full"></div>
          <p className="text-slate-300 text-base leading-relaxed">
            Have a question or an opening for a Mechanical Design Engineer? Feel free to call, email, or send a message directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details Left Column */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <a
              href={`mailto:${candidateProfile.email}`}
              className="cad-corner block p-5 rounded-xl bg-navy-900/90 border border-navy-800 hover:border-cyan-500/50 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-navy-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-navy-950 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">EMAIL ADDRESS</div>
                  <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors break-all">
                    {candidateProfile.email}
                  </div>
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <div className="cad-corner p-5 rounded-xl bg-navy-900/90 border border-navy-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-navy-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">PHONE CONTACT</div>
                  <div className="text-sm font-semibold text-white space-y-1 mt-1">
                    {candidateProfile.phones.map((phone, idx) => (
                      <a key={idx} href={`tel:${phone.replace(/\s+/g, '')}`} className="block hover:text-cyan-400 transition-colors">
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={candidateProfile.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="cad-corner block p-5 rounded-xl bg-navy-900/90 border border-navy-800 hover:border-cyan-500/50 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-navy-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-navy-950 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">LINKEDIN PROFILE</div>
                  <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1">
                    <span>rushikesh-dhole-72b643223</span>
                    <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="cad-corner p-5 rounded-xl bg-navy-900/90 border border-navy-800">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-navy-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">LOCATION</div>
                  <div className="text-sm font-semibold text-white">
                    {candidateProfile.location}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Form Right Column */}
          <div className="lg:col-span-7">
            <div className="cad-corner bg-navy-900/90 border border-navy-800 rounded-xl p-7 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between border-b border-navy-800 pb-4 mb-6">
                <div>
                  <h3 className="text-xl font-display font-bold text-white">Send a Message</h3>
                  <p className="text-xs font-mono text-slate-400">Direct Recruiter & Inquiry Terminal</p>
                </div>
                <div className="text-cyan-400/80 font-mono text-xs flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> ENCRYPTED
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="form-name" className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-1.5">
                      Full Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="form-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-lg bg-navy-950 border border-navy-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-100 placeholder-slate-600 text-sm font-sans outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-email" className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-1.5">
                      Email Address <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="form-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-navy-950 border border-navy-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-100 placeholder-slate-600 text-sm font-sans outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="form-subject" className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-1.5">
                    Subject <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="form-subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Mechanical Design Role / Collaboration"
                    className="w-full px-4 py-3 rounded-lg bg-navy-950 border border-navy-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-100 placeholder-slate-600 text-sm font-sans outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="form-message" className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-1.5">
                    Message <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message, project specifications, or role details here..."
                    className="w-full px-4 py-3 rounded-lg bg-navy-950 border border-navy-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-100 placeholder-slate-600 text-sm font-sans outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-navy-950 font-bold font-mono text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(14,165,233,0.35)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] disabled:opacity-50"
                >
                  {submitting ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              {submitted && (
                <div className="mt-6 p-4 rounded-lg bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 font-mono text-sm flex items-start gap-3 animate-fade-in">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-emerald-300">Message Delivered Successfully!</div>
                    <p className="text-xs text-emerald-300/90 mt-1">Thank you for your message. I will get back to you soon.</p>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
