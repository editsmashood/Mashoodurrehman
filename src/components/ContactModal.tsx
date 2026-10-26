import React, { useState } from 'react';
import { X, Send, Mail, CheckCircle2, Copy, Check } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('3D Modeling');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('mashoodurrehman52@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#111111] border border-[#D7E2EA]/20 rounded-3xl p-6 sm:p-8 text-[#D7E2EA] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div>
            <h3 className="hero-heading font-black text-2xl sm:text-3xl uppercase tracking-tight">
              Get in Touch
            </h3>
            <p className="text-xs sm:text-sm text-[#D7E2EA]/70 font-light mt-1">
              Have a bold idea or upcoming project? Let&apos;s talk.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer text-[#D7E2EA]"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mb-2">
              <CheckCircle2 size={36} />
            </div>
            <h4 className="text-2xl font-bold uppercase tracking-tight">
              Message Received!
            </h4>
            <p className="text-sm font-light text-[#D7E2EA]/80 max-w-md mx-auto">
              Thanks for reaching out, {name}. Mashood typically responds within 24 hours.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-8 py-3 rounded-full bg-[#D7E2EA] text-[#0C0C0C] font-medium uppercase tracking-widest text-xs hover:bg-white transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-light mb-1.5 text-[#D7E2EA]/70">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Rivera"
                  className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-[#D7E2EA] focus:outline-none focus:border-[#BBCCD7]"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-light mb-1.5 text-[#D7E2EA]/70">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@domain.com"
                  className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-[#D7E2EA] focus:outline-none focus:border-[#BBCCD7]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-light mb-1.5 text-[#D7E2EA]/70">
                Service Needed
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-[#D7E2EA] focus:outline-none focus:border-[#BBCCD7]"
              >
                <option value="Character Design">01 - Character Design &amp; Model Sheets</option>
                <option value="3D Modeling">02 - 3D Product Modeling &amp; Rendering</option>
                <option value="2D Animation">03 - 2D Rigging &amp; Animation</option>
                <option value="Packaging">04 - Packaging &amp; Label Design</option>
                <option value="E-Commerce">05 - E-Commerce &amp; Amazon A+ Creatives</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-light mb-1.5 text-[#D7E2EA]/70">
                Project Vision & Scope
              </label>
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your product, timeline, and goals..."
                className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-[#D7E2EA] focus:outline-none focus:border-[#BBCCD7] resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={copyEmail}
                className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D7E2EA]/70 hover:text-white transition-colors cursor-pointer"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'mashoodurrehman52@gmail.com'}</span>
              </button>

              <button
                type="submit"
                className="relative inline-flex items-center justify-center gap-2 rounded-full text-white font-medium uppercase tracking-widest cursor-pointer px-6 py-2.5 text-xs transition-transform hover:scale-105 active:scale-95"
                style={{
                  background:
                    'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  boxShadow:
                    '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                }}
              >
                <Send size={14} />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
