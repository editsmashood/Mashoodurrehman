import React, { useState } from 'react';
import { X, ExternalLink, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import type { ProjectItem } from './ProjectsSection';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onContactClick,
}) => {
  if (!project) return null;

  const images = [
    { title: 'Hero Render', url: project.col2Image },
    { title: 'Detail Composition', url: project.col1TopImage },
    { title: 'Material Breakdown', url: project.col1BottomImage },
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#101010] border border-[#D7E2EA]/20 rounded-3xl p-5 sm:p-8 text-[#D7E2EA] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
          <div className="flex items-center gap-4">
            <span className="font-black text-3xl sm:text-4xl text-[#BBCCD7]">
              {project.number}
            </span>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light">
                {project.category} Project • {project.year}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                {project.name}
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {project.behanceUrl && (
              <a
                href={project.behanceUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs uppercase tracking-wider font-semibold text-[#D7E2EA] transition-colors"
              >
                <span>Behance</span>
                <ExternalLink size={13} />
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer text-[#D7E2EA]"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Main Preview */}
        <div className="relative w-full h-[280px] sm:h-[420px] rounded-2xl overflow-hidden bg-black/50 border border-white/5 mb-4 group">
          <img
            src={images[activeImageIndex].url}
            alt={images[activeImageIndex].title}
            className="w-full h-full object-contain"
          />
          <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider text-white/90">
            {images[activeImageIndex].title} (Full Resolution WebP)
          </div>
        </div>

        {/* Thumbnail Selector */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveImageIndex(i)}
              className={`relative h-20 sm:h-24 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                activeImageIndex === i
                  ? 'border-[#BBCCD7] scale-[1.02] shadow-lg'
                  : 'border-white/10 opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Project Details & Spec */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/10">
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-sm uppercase tracking-wider text-[#D7E2EA]/60 font-semibold flex items-center gap-2">
              <Sparkles size={16} /> Overview
            </h4>
            <p className="font-light text-sm sm:text-base leading-relaxed opacity-90">
              {project.description}
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-white/5 border border-white/10 text-[#D7E2EA]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4 bg-white/5 p-4 rounded-2xl border border-white/5 flex flex-col justify-between">
            <div>
              <h5 className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 mb-2 font-semibold flex items-center gap-2">
                <Layers size={14} /> Deliverables
              </h5>
              <ul className="text-xs space-y-1.5 opacity-80">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-purple-400" /> 8K Photorealistic Renders
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-purple-400" /> Dynamic Motion Graphics Loop
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-purple-400" /> Web-Optimized GLTF/WebP Assets
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="w-full py-2.5 px-4 rounded-xl font-medium text-xs uppercase tracking-wider bg-[#D7E2EA] text-[#0C0C0C] hover:bg-white transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              Inquire Similar Project <ExternalLink size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
