'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    title: "7 Automated Lead Generation Tools for Local Service Companies",
    excerpt: "Explore 7 automated lead generation tools that help local service companies streamline outreach, improve targeting, and boost conversions.",
    author: "",
    date: "Apr 28, 2025",
    image: "/1-blog.avif",
  },
  {
    title: "How to Generate Leads from Google Maps: A Step-by-Step Guide",
    excerpt: "Learn how to leverage Google Maps for effective lead generation in local service industries through targeted outreach and data collection.",
    author: "",
    date: "Apr 29, 2025",
    image: "/2-blog.avif",
  },
  {
    title: "Cold Email vs. Traditional Marketing: Which Works Better in 2025?",
    excerpt: "Explore the strengths of cold email and traditional marketing for local businesses in 2025, and discover how to combine both for optimal results.",
    author: "",
    date: "Apr 30, 2025",
    image: "/3-blog.avif",
  },
];

export function BlogSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation code remains the same
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

    if (cardsRef.current) {
      const cards = Array.from(cardsRef.current.children) as HTMLElement[];
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      cards.forEach((card) => {
        const hoverEnter = () => {
          gsap.to(card, {
            scale: 1.03,
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
            duration: 0.3,
            ease: 'power2.out',
          });
        };

        const hoverLeave = () => {
          gsap.to(card, {
            scale: 1,
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
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
      id="blog"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-blue-950/50 dark:via-gray-900 dark:to-purple-950/50"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Heading */}
        <div ref={headingRef} className="text-center mb-16 opacity-100">
        <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-[#2E56FF]/10 text-[#2E56FF] dark:bg-[#1A1B6B]/20 dark:text-[#1A1B6B] mb-4">
            BLOG
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 md:mb-8">
            Latest <span className="bg-gradient-to-r from-[#2E56FF] to-[#1A1B6B] bg-clip-text text-transparent">Blog Posts</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12">
            Stay updated with the latest insights, trends, and tips from our expert writers.
          </p>
        </div>

        {/* Blog Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="p-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group opacity-100"
            >
              <div className="relative h-48 overflow-hidden rounded-xl mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/800x400';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <a
                    href="#"
                    className="text-white text-sm font-semibold bg-gradient-to-r from-[#2E56FF] to-[#1A1B6B] px-4 py-2 rounded-full transition-all duration-200 shadow-lg"
                  >
                    Read More →
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[#2E56FF] dark:group-hover:text-[#1A1B6B] transition-colors duration-200">
                  <a href="#">{post.title}</a>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span className="hover:text-[#2E56FF] dark:hover:text-[#1A1B6B] transition-colors">{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-[#2E56FF] to-[#1A1B6B] rounded-full hover:shadow-xl transition-all duration-200"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
}