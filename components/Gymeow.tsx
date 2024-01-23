'use client'

import React, { useState } from 'react';

const Gymeow: React.FC = () => {
  const [hoverPart, setHoverPart] = useState('');

  const isGymHovered = hoverPart === 'gym';
  const isEowHovered = hoverPart === 'eow';

  return (
    <div className="flex text-4xl font-bold">
      <span 
        className={`cursor-pointer ${isGymHovered ? 'text-blue-500' : ''}`}
        onMouseEnter={() => setHoverPart('gym')}
        onMouseLeave={() => setHoverPart('')}
      >
        gy
      </span>
      <span className={`cursor-pointer ${isGymHovered ? 'text-blue-500' : isEowHovered ? 'text-orange-500' : ''}`}>
        m
      </span>
      <span 
        className={`cursor-pointer ${isEowHovered ? 'text-orange-500' : ''}`}
        onMouseEnter={() => setHoverPart('eow')}
        onMouseLeave={() => setHoverPart('')}
      >
        eow
      </span>
    </div>
  );
};

export default Gymeow;
