
"use client"
import dynamic from 'next/dynamic';

const SplineScene = dynamic(() => import('@/components/sections/hero/HeroAnimation'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-neutral-200 animate-pulse rounded-full" />,
});

export default function HeroSection() {
  return (
    <section className="w-[100vw] h-[100vh]">
      <SplineScene />
    </section>
  );
}
