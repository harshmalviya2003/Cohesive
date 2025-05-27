'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Zap, MessageSquare, Target } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading and description animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        }
      );

      // Mockup image animation
      gsap.fromTo(
        mockupRef.current,
        { opacity: 0, scale: 0.9, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.6,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            delay: 0.4,
          },
        }
      );

      // Feature cards animation
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.feature-card');
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.25,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 65%',
              delay: 0.6,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Framer Motion parallax for mockup image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const yImage = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-[#2E56FF]" />,
      title: 'Scrapes for local leads',
      description: 'Automatically scrapes Google Maps for local businesses.',
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-[#2E56FF]" />,
      title: 'Best practice emails',
      description: 'AI personalizes cold emails based on best practices.',
    },
    {
      icon: <Target className="w-8 h-8 text-[#2E56FF]" />,
      title: 'Automated outreach',
      description: 'Manages email campaigns to target local leads.',
    },
  ];

  return (
    <section
      id="features"
      className="min-h-screen bg-white py-24"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 max-w-6xl flex flex-col">
        {/* Heading */}
        <div className="text-center mb-16" ref={headingRef}>
        <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-[#2E56FF]/10 text-[#2E56FF] dark:bg-[#1A1B6B]/20 dark:text-[#1A1B6B] mb-4">
            FEATURES
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 md:mb-8">
            Lead gen,{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2E56FF] to-[#1A1B6B]">
              done for you.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-black max-w-3xl mx-auto mb-8 md:mb-12">
            Cohesive automates the entire lead generation and marketing process with cutting-edge AI.
          </p>
          <Button
            className="bg-gradient-to-r from-[#2E56FF] to-[#1A1B6B] hover:from-[#2E56FF] hover:to-[#0e0f40] text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get Started Free
          </Button>
        </div>

        {/* Mockup Image */}
        <motion.div
          className="flex justify-center mb-16"
          ref={mockupRef}
          style={{ y: yImage, scale: scaleImage }}
        >
          <div className="relative max-w-4xl w-full rounded-xl overflow-hidden border-4 border-transparent bg-gradient-to-r from-[#2E56FF]/30 to-[#1A1B6B]/30 shadow-2xl hover:shadow-[0_0_30px_rgba(46,86,255,0.3)] transition-all duration-300">
            <Image
              src="/1.avif"
              alt="Email Mockup"
              width={800}
              height={400}
              className="w-full h-auto rounded-lg object-cover"
              unoptimized
            />
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={cardsRef}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card relative mt-10 p-8 bg-white border border-[#1A1B6B]/50 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:border-[#1A1B6B]/50 bg-[size:8px_8px]"
            >
              <div className="w-16 h-16 bg-[#1A1B6B]/30 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-black leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}