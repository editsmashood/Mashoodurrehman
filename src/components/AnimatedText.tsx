import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder for layout */}
      <span className="opacity-0 select-none">
        {char === ' ' ? '\u00A0' : char}
      </span>
      {/* Absolute positioned animated character */}
      <motion.span
        className="absolute left-0 top-0 select-text"
        style={{ opacity }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.length;

  // Track global index to assign proper scroll range to each character
  let globalCharIndex = 0;

  return (
    <p
      ref={containerRef}
      className={`text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] ${className}`}
      style={{
        fontSize: 'clamp(1rem, 2vw, 1.35rem)',
      }}
    >
      {words.map((word, wordIndex) => {
        const wordChars = word.split('');
        const renderedWord = (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {wordChars.map((char, charInWordIndex) => {
              const currentIdx = globalCharIndex;
              globalCharIndex += 1;

              const step = 1 / totalChars;
              const start = Math.min(0.99, currentIdx * step);
              const end = Math.min(1, start + Math.max(0.015, step * 2));

              return (
                <Character
                  key={charInWordIndex}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </span>
        );

        // Account for the space character after each word except the last
        if (wordIndex < words.length - 1) {
          const spaceIdx = globalCharIndex;
          globalCharIndex += 1;
          const step = 1 / totalChars;
          const start = Math.min(0.99, spaceIdx * step);
          const end = Math.min(1, start + Math.max(0.015, step * 2));

          return (
            <React.Fragment key={wordIndex}>
              {renderedWord}
              <Character
                char=" "
                progress={scrollYProgress}
                range={[start, end]}
              />
            </React.Fragment>
          );
        }

        return renderedWord;
      })}
    </p>
  );
};
