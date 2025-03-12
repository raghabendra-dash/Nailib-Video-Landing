"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HeroSection({ title, subtitle }) {
  const heroTextRef = useRef(null);

  useEffect(() => {
    if (heroTextRef.current) {

      gsap.from(heroTextRef.current.children, {
        opacity: 1, 
        y: 0, 
        duration: 0, 
        delay: 0, 
        stagger: 0, 
      });
    }
  }, []);

  return (
    <div className="hero-section text-center py-20 bg-blue-500 text-white">
      <img
        src="https://cdn.nailib.com/_next/static/media/logo-small.5691114d.svg?w=384&q=75"
        alt="Nailib Logo"
        className="mx-auto mb-6 w-24 h-24 shadow-lg shadow-blue-800/40"/>
        
      <div ref={heroTextRef}>
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl">{subtitle}</p>
      </div>
    </div>
  );
}