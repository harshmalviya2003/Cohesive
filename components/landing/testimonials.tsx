'use client';

import { Card } from '@/components/ui/card';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "CohesiveAI has transformed how we create content. It's like having an entire marketing team at your fingertips.",
    author: "Sarah Johnson",
    role: "Marketing Director, TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    quote: "The AI-powered templates have saved us countless hours. The quality of content is consistently excellent.",
    author: "Michael Chen",
    role: "Content Manager, StartupX",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    quote: "Our content output has increased by 300% while maintaining exceptional quality. A game-changer for our business.",
    author: "Priya Patel",
    role: "CEO, Digital Solutions",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100",
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation for heading
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Animation for testimonial cards
    if (cardsRef.current) {
      const cards = Array.from(cardsRef.current.children) as HTMLElement[];

      // Animation when scrolling
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Hover animations
      cards.forEach((card) => {
        const hoverEnter = () => {
          gsap.to(card, {
            y: -8,
            scale: 1.02,
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            duration: 0.3,
            ease: 'power2.out',
          });
        };

        const hoverLeave = () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            duration: 0.3,
            ease: 'power2.out',
          });
        };

        card.addEventListener('mouseenter', hoverEnter);
        card.addEventListener('mouseleave', hoverLeave);

        return () => {
          card.removeEventListener('mouseenter', hoverEnter);
          card.removeEventListener('mouseleave', hoverLeave);
        };
      });
    }

    // Fallback to ensure visibility if ScrollTrigger fails
    const fallback = setTimeout(() => {
      if (headingRef.current) {
        gsap.set(headingRef.current, { opacity: 1, y: 0 });
      }
      if (cardsRef.current) {
        const cards = Array.from(cardsRef.current.children) as HTMLElement[];
        gsap.set(cards, { opacity: 1, y: 0 });
      }
    }, 2000);

    return () => clearTimeout(fallback);
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-blue-950/50 dark:via-gray-900 dark:to-purple-950/50"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Heading */}
        <div ref={headingRef} className="text-center mb-16 opacity-100">
        <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-[#2E56FF]/10 text-[#2E56FF] dark:bg-[#1A1B6B]/20 dark:text-[#1A1B6B] mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 md:mb-8">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-[#2E56FF] to-[#1A1B6B] bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12">
            Join thousands of businesses transforming their content creation with CohesiveAI
          </p>
        </div>

        {/* Testimonial Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group opacity-100"
            >
              <div className="relative mb-6">
                <svg
                  className="w-10 h-10 text-[#2E56FF]/20 dark:text-[#2E56FF]/20 absolute -top-2 -left-2"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <blockquote className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed pl-4">
                  {testimonial.quote}
                </blockquote>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={`Portrait of ${testimonial.author}`}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#2E56FF]/50 dark:border-[#1A1B6B]/50 group-hover:border-[#2E56FF] dark:group-hover:border-[#1A1B6B] transition-colors duration-300"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/100';
                    }}
                  />
                  <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-[#2E56FF] to-[#1A1B6B] rounded-full p-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}