'use client';

import { useState, useEffect, useRef } from 'react';

const targetWord = 'HEALTHCARE';
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';

export default function GlitchText() {
  const [displayText, setDisplayText] = useState('');
  const [isGlitching, setIsGlitching] = useState(false);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    setIsGlitching(true);
    let iterations = 0;

    const glitchInterval = setInterval(() => {
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
      }

      iterations += 1 / 3;
    }, 50);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <span className={isGlitching ? 'glitch-active' : ''}>
      {displayText}
    </span>
  );
}
