'use client'

import { useEffect } from 'react';
import JSConfetti from 'js-confetti'; 

const GymeowClick = () => {
  useEffect(() => {
    const jsConfetti = new JSConfetti();

    const handleOnClick = (event:MouseEvent) => {
      jsConfetti.addConfetti({
        emojis: ['🐱','💪'],
        emojiSize: 100,
        confettiNumber: 24,
      });
    };

    document.addEventListener('click', handleOnClick);

    return () => {
      document.removeEventListener('click', handleOnClick);
    };
  }, []);

  return null;

};

export default GymeowClick;