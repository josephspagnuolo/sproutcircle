"use client";

import { RevealWrapper } from 'next-reveal';

export default function Reveal({
  children,
  origin,
  duration,
  distance,
  delay,
}: {
  children: React.ReactNode;
  origin: string;
  duration?: number;
  distance?: string;
  delay?: number;
}) {
  return <RevealWrapper
    origin={origin}
    duration={duration}
    distance={distance}
    delay={delay}
    viewFactor={0.2}
    className="load-hidden">
    {children}
  </RevealWrapper>;
}
