import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { ContactButton } from './ContactButton';

interface FooterSectionProps {
  onContactClick: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onContactClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="w-full bg-[#0C0C0C] border-t border-white/10 px-6 md:px-10 py-16 text-[#D7E2EA] relative z-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-[#BBCCD7] mb-6">
          <Sparkles size={14} className="text-purple-400" /> Available for Select Projects
        </div>

        <h3
          className="hero-heading font-black uppercase tracking-tight leading-none mb-6"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
        >
          Let&apos;s Create Magic
        </h3>

        <p className="max-w-xl text-sm sm:text-base font-light opacity-80 mb-10 leading-relaxed">
          Whether you need a full brand overhaul, bespoke 3D animation, or photorealistic
          assets for your next product launch, I&apos;m ready to elevate your vision.
        </p>

        <div className="mb-14">
          <ContactButton onClick={onContactClick} label="Start a Project" />
        </div>

        <div className="w-full pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs uppercase tracking-wider text-[#D7E2EA]/60">
          <div>
            © {new Date().getFullYear()} MASHOOD UR REHMAN — 3D & 2D CREATOR. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.behance.net/gallery/192541735/Mashood-ur-Rehman"
              target="_blank"
              rel="noreferrer"
              className="text-[#BBCCD7] hover:text-white transition-colors cursor-pointer font-semibold underline underline-offset-4"
            >
              Behance
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors cursor-pointer"
            >
              Twitter / X
            </a>
            <a
              href="https://artstation.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors cursor-pointer"
            >
              ArtStation
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
