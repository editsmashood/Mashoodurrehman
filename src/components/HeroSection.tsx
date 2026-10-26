import React from 'react';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';

interface HeroSectionProps {
  onContactClick?: () => void;
  onPriceClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onContactClick,
  onPriceClick,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* 1. Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-20">
        <header className="w-full px-6 md:px-10 pt-6 md:pt-8">
          <nav
            aria-label="Main Navigation"
            className="flex items-center justify-between w-full text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]"
          >
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('about');
              }}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              About
            </a>

            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('services');
              }}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              Services
            </a>

            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('projects');
              }}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              Projects
            </a>

            <a
              href="https://www.behance.net/gallery/192541735/Mashood-ur-Rehman"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer text-[#BBCCD7] font-semibold"
            >
              Behance
            </a>

            <button
              type="button"
              onClick={() => {
                if (onContactClick) onContactClick();
                else scrollTo('contact');
              }}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer uppercase font-medium bg-transparent border-0 text-[#D7E2EA] p-0"
            >
              Contact
            </button>
          </nav>
        </header>
      </FadeIn>

      {/* 2. Hero Heading */}
      <div className="w-full overflow-hidden px-4 sm:px-6 md:px-10 z-10 pointer-events-none">
        <FadeIn delay={0.15} y={40} className="w-full">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center sm:text-left text-[11.5vw] sm:text-[13vw] md:text-[14.5vw] lg:text-[16vw] mt-6 sm:mt-4 md:-mt-5">
            Hi, i&apos;m mashood
          </h1>
        </FadeIn>
      </div>

      {/* 3. Hero Portrait with Magnet effect */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 pointer-events-auto top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] flex items-end justify-center"
          >
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Mashood Ur Rehman - 3D Creator"
              className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)]"
              loading="eager"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* 4. Bottom Bar */}
      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end z-20">
        {/* Left text */}
        <FadeIn delay={0.35} y={20}>
          <div className="flex flex-col gap-1 max-w-[180px] sm:max-w-[240px] md:max-w-[280px]">
            <span className="text-[10px] sm:text-xs text-[#BBCCD7] font-semibold tracking-widest uppercase">
              Mashood Ur Rehman
            </span>
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug"
              style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.4rem)' }}
            >
              a 3d creator &amp; designer with 3 years of experience crafting striking visuals
            </p>
          </div>
        </FadeIn>

        {/* Right Contact button */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton
            onClick={() => {
              if (onContactClick) onContactClick();
              else scrollTo('contact');
            }}
          />
        </FadeIn>
      </div>
    </section>
  );
};
