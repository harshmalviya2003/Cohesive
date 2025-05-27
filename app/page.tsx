'use client';

import { Navbar } from '@/components/landing/navbar';
import { Hero } from '@/components/landing/hero';
import { Features } from '@/components/landing/features';
import { UseCases } from '@/components/landing/use-cases';
import { Testimonials } from '@/components/landing/testimonials';
import { Pricing } from '@/components/landing/pricing';
import { Footer } from '@/components/landing/footer';
import { BlogSection } from '@/components/landing/blog';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      {/* <UseCase  s /> */}
      <BlogSection/>
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}