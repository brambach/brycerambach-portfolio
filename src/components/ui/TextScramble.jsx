
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";

const TextScramble = ({ text, className, trigger = true }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);
  
  const scramble = () => {
    let iteration = 0;
    
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(prev => 
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    if (trigger) {
      scramble();
    }
    return () => clearInterval(intervalRef.current);
  }, [trigger, text]);

  return (
    <motion.span className={className}>
      {displayText}
    </motion.span>
  );
};

export default TextScramble;
