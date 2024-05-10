"use client";

import { RevealList } from 'next-reveal';

export default function ListReveal({
  children,
  className,
  origin,
  interval,
  delay,
  duration,
  distance,
}: {
  children: React.ReactNode;
  className?: string;
  origin: string;
  interval: number;
  delay: number;
  duration?: number;
  distance?: string;
}) {
  return <RevealList
    origin={origin}
    interval={interval}
    delay={delay}
    duration={duration}
    distance={distance}
    className={className} >
    {children}
  </RevealList>;
}
