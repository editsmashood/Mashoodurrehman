import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { ArrowUpRight, ExternalLink, Sparkles, Image as ImageIcon } from 'lucide-react';

interface ServiceItem {
  number: string;
  name: string;
  tag: string;
  description: string;
  previewImages: { url: string; label: string }[];
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    name: 'Character Design & Model Sheets',
    tag: 'Turnarounds & Expressions',
    description:
      'Detailed multi-angle model sheets, turnaround diagrams, facial expression sheets, and traditional/ethnic costume styling tailored for 2D & 3D animation production pipelines.',
    previewImages: [
      { url: '/assets/aistudio/11_3eabb5d8.jpeg', label: 'Princess with Crown Model Sheet' },
      { url: '/assets/aistudio/9_b31fcef9.jpeg', label: 'Royal Turban Character Turnaround' },
      { url: '/assets/aistudio/7_5faff87a.jpeg', label: 'Traditional Saree Character Sheet' },
      { url: '/assets/aistudio/13_8fb4ef36.jpeg', label: 'Elderly Woman Model Sheet' },
    ],
  },
  {
    number: '02',
    name: '3D Product Modeling & Rendering',
    tag: 'Cinematic CGI & Lighting',
    description:
      'Hyper-realistic 3D product visualizations staged in dramatic environments (like volcanic magma & fiery embers), precision studio lighting, and high-fidelity PBR texture shading.',
    previewImages: [
      { url: '/assets/aistudio/5_MB_e423e770.jpeg', label: 'Wolnixx Lava Rock Hero Render' },
      { url: '/assets/aistudio/Desktop_1464_x_625_3x_f3681113.jpg', label: 'Panoramic Product Showcase' },
      { url: '/assets/aistudio/2_3x_05d2c043.jpg', label: '3-in-1 Groomer Modular Breakdown' },
      { url: '/assets/aistudio/5mb_3x_4ad1fbe8.jpg', label: 'Volcano Cinematic Wide Angle' },
    ],
  },
  {
    number: '03',
    name: '2D Rigging & Animation',
    tag: 'Adobe Animate CC',
    description:
      'Precision puppet rigging, frame-by-frame walk and run cycles, bicycle physics animation, and narrative movement crafted for commercials, games, and web media.',
    previewImages: [
      { url: '/assets/aistudio/14_9aacbc27.jpeg', label: 'Adobe Animate Bicycle & Walk Cycles' },
      { url: '/assets/aistudio/12_9aac4082.jpeg', label: 'Boy Character Model Sheet' },
      { url: '/assets/aistudio/1_448700e9.jpeg', label: 'Dhoti Character Turnaround' },
    ],
  },
  {
    number: '04',
    name: 'Packaging & Label Design',
    tag: 'Dieline & Vector Art',
    description:
      'Complete retail packaging dielines, custom illustrated mascots, stylized typography, and regulatory nutrition & barcode layouts that command shelf attention.',
    previewImages: [
      { url: '/assets/aistudio/k_95a03c4d.png', label: 'RAGE Wild Berry Energy Drink Can Dieline' },
    ],
  },
  {
    number: '05',
    name: 'E-Commerce & Brand Creatives',
    tag: 'Amazon A+ & Marketing',
    description:
      'Conversion-optimized Amazon A+ graphics, feature callout banners, waterproof/drop-resistant iconography, and cross-platform desktop & mobile lifestyle layouts.',
    previewImages: [
      { url: '/assets/aistudio/1_3x_bc0200ac.jpg', label: 'Built Different Feature Callout' },
      { url: '/assets/aistudio/moble_verison_3x_34a1ee8f.jpg', label: 'Mobile Version Amazon Creative' },
      { url: '/assets/aistudio/4_3x_ed3a8d1c.jpg', label: 'Tough & Reliable Banner' },
      { url: '/assets/aistudio/Desktop_1464_x_625_3x_f3681113.jpg', label: 'Amazon Desktop Banner Header' },
    ],
  },
];

export const ServicesSection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<{ url: string; label: string } | null>(null);

  return (
    <section
      id="services"
      className="w-full bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0 text-[#0C0C0C]"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Heading & Behance Link */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <div className="flex flex-col items-center justify-center">
            <a
              href="https://www.behance.net/gallery/192541735/Mashood-ur-Rehman"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0C0C0C]/5 hover:bg-[#0C0C0C]/10 border border-[#0C0C0C]/10 text-xs uppercase tracking-widest font-semibold text-[#0C0C0C] mb-6 transition-all hover:scale-105"
            >
              <Sparkles size={14} className="text-purple-600" />
              <span>Mashood ur Rehman • Behance Case Study</span>
              <ArrowUpRight size={14} />
            </a>

            <h2
              className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-4"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              Services
            </h2>
            <p className="text-sm sm:text-base font-light text-[#0C0C0C]/70 max-w-xl mb-14 sm:mb-20">
              Specialized visual services spanning 3D CGI rendering, 2D character model sheets,
              rigged animation, and commercial brand packaging.
            </p>
          </div>
        </FadeIn>

        {/* Services List */}
        <div className="w-full border-t border-[#0C0C0C]/15">
          {SERVICES.map((service, index) => (
            <FadeIn
              key={service.number}
              delay={index * 0.08}
              y={30}
              className="w-full border-b border-[#0C0C0C]/15"
            >
              <div className="flex flex-col gap-5 py-8 sm:py-10 md:py-12 group transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-8 md:gap-14">
                  {/* Number */}
                  <div
                    className="font-black text-[#0C0C0C] leading-none select-none tracking-tight shrink-0 transition-transform duration-300 group-hover:scale-105"
                    style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                  >
                    {service.number}
                  </div>

                  {/* Name & Description Stacked */}
                  <div className="flex flex-col gap-2 md:gap-3 flex-1">
                    {/* Header with Tag and Arrow */}
                    <div className="flex flex-wrap items-center gap-3">
                      <h3
                        className="font-medium uppercase text-[#0C0C0C] leading-tight tracking-tight transition-all duration-300 group-hover:text-purple-900 group-hover:translate-x-1 flex items-center gap-2 cursor-pointer"
                        style={{ fontSize: 'clamp(1.15rem, 2.3vw, 2.2rem)' }}
                        onClick={() => {
                          if (service.previewImages.length > 0) {
                            setActiveImage(service.previewImages[0]);
                          }
                        }}
                      >
                        <span>{service.name}</span>
                        <ArrowUpRight
                          size={24}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-purple-700 shrink-0"
                        />
                      </h3>
                      <span className="px-3 py-1 rounded-full bg-[#0C0C0C]/5 border border-[#0C0C0C]/10 text-xs uppercase tracking-wider font-semibold text-[#0C0C0C]/75">
                        {service.tag}
                      </span>
                    </div>

                    <p
                      className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-70"
                      style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.2rem)' }}
                    >
                      {service.description}
                    </p>

                    {/* Interactive Artwork Thumbnail Gallery */}
                    <div className="pt-3">
                      <div className="flex items-center gap-2 mb-2 text-xs uppercase tracking-wider font-semibold text-[#0C0C0C]/60">
                        <ImageIcon size={13} />
                        <span>Behance Artwork Samples ({service.previewImages.length})</span>
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        {service.previewImages.map((img, imgIdx) => (
                          <button
                            key={imgIdx}
                            type="button"
                            onClick={() => setActiveImage(img)}
                            className="group/img relative h-14 sm:h-16 w-20 sm:w-24 rounded-xl overflow-hidden border border-[#0C0C0C]/15 hover:border-purple-600 transition-all duration-200 hover:scale-105 shadow-sm cursor-pointer bg-[#F5F5F5]"
                            title={img.label}
                          >
                            <img
                              src={img.url}
                              alt={img.label}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="text-[10px] text-white font-medium uppercase tracking-wider">
                                View
                              </span>
                            </div>
                          </button>
                        ))}

                        <a
                          href="https://www.behance.net/gallery/192541735/Mashood-ur-Rehman"
                          target="_blank"
                          rel="noreferrer"
                          className="h-14 sm:h-16 px-3 rounded-xl border border-dashed border-[#0C0C0C]/25 hover:border-purple-600 flex items-center justify-center gap-1.5 text-xs text-[#0C0C0C]/70 hover:text-purple-700 font-medium uppercase tracking-wider transition-colors"
                        >
                          <span>Full Project</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Image Preview Lightbox */}
      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-[#121212] border border-white/10 rounded-3xl p-4 sm:p-6 text-white flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between pb-3 border-b border-white/10 mb-3">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold">
                  Mashood ur Rehman • Behance Portfolio Asset
                </span>
                <h4 className="text-lg font-bold uppercase tracking-tight">{activeImage.label}</h4>
              </div>
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs uppercase tracking-wider font-medium cursor-pointer"
              >
                Close
              </button>
            </div>

            <div className="w-full max-h-[70vh] overflow-hidden rounded-2xl flex items-center justify-center bg-black">
              <img
                src={activeImage.url}
                alt={activeImage.label}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="w-full pt-3 flex items-center justify-between">
              <span className="text-xs text-white/60">
                Direct asset from Behance Gallery #192541735
              </span>
              <a
                href="https://www.behance.net/gallery/192541735/Mashood-ur-Rehman"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-purple-300 hover:text-white uppercase tracking-wider font-semibold"
              >
                <span>View Full Behance Gallery</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
