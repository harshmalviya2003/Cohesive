'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const logosContainerRef = useRef<HTMLDivElement>(null);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Mobile-specific animations
      const isMobile = window.innerWidth < 768;
      
      // Animate hero content
      gsap.fromTo(
        heroContentRef.current,
        { opacity: 0, y: isMobile ? 40 : 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        }
      );

      // Badge pop animation
      gsap.fromTo(
        '.hero-badge',
        { opacity: 0, scale: 0.6, y: isMobile ? 20 : 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: 'elastic.out(1, 0.4)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            delay: 0.3,
          },
        }
      );

      // Heading staggered letter animation (desktop only)
      if (!isMobile) {
        gsap.fromTo(
          '.hero-heading span',
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.06,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              delay: 0.5,
            },
          }
        );
      }

      // Description fade-in
      gsap.fromTo(
        '.hero-description',
        { opacity: 0, y: isMobile ? 20 : 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            delay: 0.7,
          },
        }
      );

      // Button zoom effect
      gsap.fromTo(
        '.hero-button',
        { opacity: 0, scale: isMobile ? 0.95 : 0.9, y: isMobile ? 10 : 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            delay: 0.9,
          },
        }
      );

      // Social proof text
      gsap.fromTo(
        '.hero-social-text',
        { opacity: 0, y: isMobile ? 15 : 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            delay: 1.1,
          },
        }
      );

      // Logo carousel animation
      if (logosContainerRef.current) {
        const logos = logosContainerRef.current.querySelectorAll('.logo-item');
        gsap.fromTo(
          logos,
          { opacity: 0, y: isMobile ? 20 : 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 60%',
              delay: 1.3,
            },
          }
        );

        const logosWidth = logos[0]?.clientWidth || (isMobile ? 80 : 120);
        const gap = isMobile ? 24 : 48;
        const totalWidth = (logos.length * (logosWidth + gap)) / (isMobile ? 2 : 3);

        const scrollTl = gsap.to(logosContainerRef.current, {
          x: -totalWidth,
          duration: isMobile ? 20 : 25,
          ease: 'none',
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
          },
        });

        // Pause on hover
        logosContainerRef.current.addEventListener('mouseenter', () => scrollTl.pause());
        logosContainerRef.current.addEventListener('mouseleave', () => scrollTl.play());
      }

      // Video zoom animation
      if (videoRef.current) {
        gsap.fromTo(
          videoRef.current,
          { opacity: 0, scale: isMobile ? 1.1 : 1.2 },
          {
            opacity: 1,
            scale: 1,
            duration: 2,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 90%',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Framer Motion parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const logos = [
    { id: '01', name: 'boulderfield_white', src: 'https://framerusercontent.com/images/WpwxiEWDWfPg9EcE3xAGcKMk3w.png' },
    { id: '02', name: '', src: 'https://framerusercontent.com/images/zS8zvREXXQY3c7rFSr7P1KM8pHw.png' },
    { id: '03', name: 'exalt_advisor_white', src: 'https://framerusercontent.com/images/lWfKuhtil5RNGgZeHWfDUPGQWM.png' },
    { id: '04', name: 'heritage_point_white', src: 'https://framerusercontent.com/images/oGcAsjFWClTBuBAAt7PsKZ5ZIQ.png' },
    { id: '05', name: 'camdenpark_white', src: 'https://framerusercontent.com/images/HmT7hniIlkmJ3uGU9gJidQN16A.png' },
    { id: '06', name: 'shorely_clean_white', src: 'https://framerusercontent.com/images/AQrMvCHS6pyoydPJThg79QEnR5M.png' },
    { id: '07', name: 'juneroad_white', src: 'https://framerusercontent.com/images/E8Yoy4jcRgwUaQecnzg2MlfdJk8.png' },
  ];

  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0A0028]/50 to-[#1A0B6B]/50"
      id="hero"
      ref={containerRef}
    >
      {/* Video Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y: yBg, scale: scaleBg }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-75"
        >
          <source src="/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 " />
      </motion.div>

      {/* Main Content */}
      <div
        className="container mt-20 mx-auto px-4 sm:px-6 flex flex-col items-center justify-center min-h-screen relative z-10 pt-16 pb-24 md:pt-0 md:pb-0"
        ref={heroContentRef}
      >
        <div className="max-w-4xl mx-auto text-center w-full px-4">
          {/* Text Content */}
          <div className="mb-8 md:mb-12">
            <motion.div className="hero-badge inline-block bg-gradient-to-r from-[#2E56FF] to-[#1A1B6B] rounded-full px-4 py-1.5 md:px-5 md:py-2 mb-4 md:mb-6 shadow-xl hover:shadow-[0_0_20px_rgba(46,86,255,0.4)] transition-all duration-300">
              <p className="text-white font-mono text-xs md:text-sm font-semibold tracking-wider">
                Grow Fast, Stress Less
              </p>
            </motion.div>

            <h1 className="hero-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-snug sm:leading-tight md:leading-tight tracking-tight mb-4 md:mb-6">
              <span className="block">Conquer Local Sales</span>
              <span className="block">with Zero Hassle</span>
            </h1>

            <p className="hero-description text-base sm:text-lg md:text-xl text-[#E6E8FF] font-medium leading-relaxed tracking-tight max-w-2xl mx-auto">
              Say goodbye to chasing leads. Our automated system hooks local clients for you, delivering hot prospects while you focus on growth.
            </p>
          </div>

          {/* Actions */}
          <div className="mb-8 md:mb-12">
            <Button
              className="hero-button bg-gradient-to-r from-[#2E56FF] to-[#1A1B6B] hover:from-[#3B70FF] hover:to-[#252B9C] text-white font-bold text-base md:text-lg px-8 py-5 md:px-12 md:py-7 rounded-full shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(46,86,255,0.6)] hover:scale-105 md:hover:scale-110 border border-white/20"
              size="lg"
            >
              Grab Your Leads Now <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </div>

          {/* Social Proof */}
          <div>
            <p className="hero-social-text text-[#E6E8FF] font-medium text-sm sm:text-base leading-relaxed tracking-tight mb-4 md:mb-6 max-w-xl mx-auto">
              Join janitorial, landscaping, HVAC pros, and more who've ditched pricey agencies for our game-changing automation.
            </p>

            <div className="relative w-full overflow-hidden py-4 md:py-6">
              <div className="flex items-center gap-6 sm:gap-8 md:gap-12 whitespace-nowrap" ref={logosContainerRef}>
                {duplicatedLogos.map((logo, index) => (
                  <div
                    key={`${logo.id}-${index}`}
                    className="logo-item inline-flex items-center justify-center flex-shrink-0"
                  >
                    <div className="relative w-20 h-8 sm:w-24 sm:h-10 md:w-28 md:h-12 hover:scale-110 transition-transform duration-300">
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        fill
                        className="object-contain hover:brightness-150 transition-all duration-300"
                        unoptimized
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}