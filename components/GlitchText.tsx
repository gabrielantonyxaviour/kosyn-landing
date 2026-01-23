'use client';

import { useState, useEffect } from 'react';

const words = ['PRIVACY', 'RECORDS', 'AI SOLUTIONS'];
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';

export default function GlitchText() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState(words[0]);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);

      // Glitch animation
      let iterations = 0;
      const glitchInterval = setInterval(() => {
        const nextIndex = (currentWordIndex + 1) % words.length;
        const targetWord = words[nextIndex];

        setDisplayText(
          targetWord
            .split('')
            .map((char, index) => {
              if (index < iterations) {
                return targetWord[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        if (iterations >= targetWord.length) {
          clearInterval(glitchInterval);
          setIsGlitching(false);
          setCurrentWordIndex(nextIndex);
        }

        iterations += 1 / 3;
      }, 50);

      return () => clearInterval(glitchInterval);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentWordIndex]);

  return (
    <span className={`text-gray-500 ${isGlitching ? 'glitch-active' : ''}`}>
      {displayText}
    </span>
  );
}
