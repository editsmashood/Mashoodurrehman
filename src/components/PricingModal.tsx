import React from 'react';
import { X, Check } from 'lucide-react';
import { ContactButton } from './ContactButton';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTier: (tier: string) => void;
}

export const PricingModal: React.FC<PricingModalProps> = ({
  isOpen,
  onClose,
  onSelectTier,
}) => {
  if (!isOpen) return null;

  const tiers = [
    {
      title: '3D Asset Creation',
      price: '$1,200',
      period: 'per model',
      desc: 'Ideal for indie games, hardware startups, and custom e-commerce objects.',
      features: [
        'High-poly + Game-ready low-poly topology',
        'Custom 4K PBR material set',
        'GLTF, FBX, OBJ & Blender source files',
        '2 rounds of revisions',
      ],
    },
    {
      title: 'Cinematic Render Pack',
      price: '$2,800',
      popular: true,
      period: 'per product suite',
      desc: 'Studio lighting, photorealistic textures, and multi-angle high-resolution renders.',
      features: [
        '5 x 8K photorealistic hero renders',
        'Transparent alpha background cutouts',
        'Macro close-up detail shots',
        'Commercial royalty-free rights',
      ],
    },
    {
      title: 'Full 3D Brand & Motion',
      price: '$5,500',
      period: 'comprehensive launch',
      desc: 'Complete visual identity transformation with 3D key visual, motion loop, and web assets.',
      features: [
        'Complete 3D visual language & guidelines',
        '15s dynamic 60fps motion loop',
        'Interactive web-ready 3D components',
        'Priority turnaround & dedicated Slack channel',
      ],
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#101010] border border-[#D7E2EA]/20 rounded-3xl p-6 sm:p-8 text-[#D7E2EA] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div>
            <h3 className="hero-heading font-black text-2xl sm:text-4xl uppercase tracking-tight">
              Pricing & Engagements
            </h3>
            <p className="text-xs sm:text-sm text-[#D7E2EA]/70 font-light mt-1">
              Transparent project scopes tailored to scale with your ambition.
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((t, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-5 sm:p-6 flex flex-col justify-between border ${
                t.popular
                  ? 'border-purple-400/50 bg-gradient-to-b from-[#18011F]/50 to-[#121212]'
                  : 'border-white/10 bg-[#161616]'
              }`}
            >
              {t.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-widest bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white">
                  Most Popular
                </span>
              )}

              <div>
                <h4 className="text-lg font-bold uppercase tracking-wide">
                  {t.title}
                </h4>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-white">{t.price}</span>
                  <span className="text-xs text-white/50">{t.period}</span>
                </div>
                <p className="text-xs font-light text-[#D7E2EA]/75 mt-2 mb-4 leading-relaxed">
                  {t.desc}
                </p>

                <ul className="space-y-2 border-t border-white/10 pt-4 mb-6">
                  {t.features.map((f, fi) => (
                    <li
                      key={fi}
                      className="text-xs font-light flex items-start gap-2 opacity-90"
                    >
                      <Check size={14} className="text-purple-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onSelectTier(t.title);
                }}
                className="w-full py-2.5 rounded-full text-xs uppercase tracking-widest font-medium border border-[#D7E2EA] hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-colors cursor-pointer"
              >
                Inquire This Tier
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-center sm:text-left text-[#D7E2EA]/60 font-light">
            Need a custom monthly retainer or specialized simulation pipeline?
          </p>
          <ContactButton
            label="Custom Scope"
            className="!px-6 !py-2.5 !text-xs"
            onClick={() => {
              onClose();
              onSelectTier('Custom Retainer');
            }}
          />
        </div>
      </div>
    </div>
  );
};
