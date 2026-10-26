import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton';
import { FadeIn } from './FadeIn';

export interface ProjectItem {
  number: string;
  name: string;
  category: string;
  col1TopImage: string;
  col1BottomImage: string;
  col2Image: string;
  description: string;
  year: string;
  tools: string[];
  behanceUrl?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    number: '01',
    name: 'Wolnixx 3-in-1 Groomer',
    category: 'Client',
    col1TopImage: '/assets/aistudio/2_3x_05d2c043.jpg',
    col1BottomImage: '/assets/aistudio/1_3x_bc0200ac.jpg',
    col2Image: '/assets/aistudio/5_MB_e423e770.jpeg',
    description:
      '3D CGI commercial visualization, dramatic volcanic rock and embers environment, studio lighting, and Amazon A+ e-commerce creative assets for the Wolnixx 3-in-1 groomer.',
    year: '2026',
    tools: ['Blender', 'Cinema 4D', 'Octane Render', 'Photoshop'],
    behanceUrl: 'https://www.behance.net/gallery/192541735/Mashood-ur-Rehman',
  },
  {
    number: '02',
    name: 'Character Model Sheets',
    category: 'Studio',
    col1TopImage: '/assets/aistudio/9_b31fcef9.jpeg',
    col1BottomImage: '/assets/aistudio/7_5faff87a.jpeg',
    col2Image: '/assets/aistudio/11_3eabb5d8.jpeg',
    description:
      'Multi-angle character turnarounds, traditional Indian royal attire and saree model sheets, facial anatomy, and costume styling designed for broadcast animation.',
    year: '2025',
    tools: ['Photoshop', 'Illustrator', 'Clip Studio Paint', 'Animate'],
    behanceUrl: 'https://www.behance.net/gallery/192541735/Mashood-ur-Rehman',
  },
  {
    number: '03',
    name: '2D Rigging & Packaging',
    category: 'Commercial',
    col1TopImage: '/assets/aistudio/14_9aacbc27.jpeg',
    col1BottomImage: '/assets/aistudio/12_9aac4082.jpeg',
    col2Image: '/assets/aistudio/k_95a03c4d.png',
    description:
      'Complete retail can dieline and monkey mascot illustration for RAGE Wild Berry, coupled with 2D character rigging and bicycle walk cycles in Adobe Animate.',
    year: '2026',
    tools: ['Adobe Animate CC', 'Adobe Illustrator', 'After Effects'],
    behanceUrl: 'https://www.behance.net/gallery/192541735/Mashood-ur-Rehman',
  },
];

interface CardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  onOpenProject: (project: ProjectItem) => void;
}

const Card: React.FC<CardProps> = ({
  project,
  index,
  totalCards,
  onOpenProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32 w-full"
    >
      <motion.div
        style={{
          scale,
          top: `${index * 28}px`,
        }}
        className="relative w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-2xl overflow-hidden"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-6 mb-4 sm:mb-6 md:mb-8">
          <div className="flex items-center gap-3 sm:gap-5 md:gap-7">
            {/* Number */}
            <span
              className="font-black text-[#D7E2EA] leading-none select-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              {project.number}
            </span>

            {/* Category label and project name */}
            <div className="flex flex-col">
              <span className="uppercase font-light text-xs sm:text-sm tracking-widest text-[#D7E2EA]/70">
                {project.category}
              </span>
              <h3 className="font-medium uppercase text-base sm:text-xl md:text-2xl text-[#D7E2EA] tracking-wide">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Live Project Button */}
          <LiveProjectButton
            onClick={() => onOpenProject(project)}
            label="Live Project"
          />
        </div>

        {/* Bottom row: Two-column image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 md:gap-6 w-full">
          {/* Left column (40% width): 2 stacked images */}
          <div className="sm:col-span-5 flex flex-col gap-3 sm:gap-4 md:gap-6">
            <div
              className="w-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#141414] cursor-pointer group"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
              onClick={() => onOpenProject(project)}
            >
              <img
                src={project.col1TopImage}
                alt={`${project.name} preview 1`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div
              className="w-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#141414] cursor-pointer group"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
              onClick={() => onOpenProject(project)}
            >
              <img
                src={project.col1BottomImage}
                alt={`${project.name} preview 2`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right column (60% width): 1 tall image */}
          <div
            className="sm:col-span-7 overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#141414] min-h-[220px] sm:min-h-[auto] cursor-pointer group"
            onClick={() => onOpenProject(project)}
          >
            <img
              src={project.col2Image}
              alt={`${project.name} hero render`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ProjectsSectionProps {
  onOpenProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenProject,
}) => {
  return (
    <section
      id="projects"
      className="relative z-10 w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 pb-32"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-12 sm:mb-16 md:mb-20">
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>

        {/* 3 Stacking Cards */}
        <div className="relative w-full flex flex-col">
          {PROJECTS.map((project, index) => (
            <Card
              key={project.number}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
              onOpenProject={onOpenProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
