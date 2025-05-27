'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Zap, BadgeCheck, BarChart2, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const pricingTiers = [
  {
    name: "Month-by-Month",
    price: "99",
    description: "Flexible pricing with no long-term commitment",
    features: [
      "Up to 3 simultaneous campaigns",
      "Scrape any type of local business",
      "Fully managed email deliverability",
      "CRM and automated marketing",
      "24/7 priority support",
      "Weekly performance reports"
    ],
    featured: true,
    cta: "Start Free Trial"
  },
  {
    name: "Annual Savings",
    price: "79",
    description: "Save 20% with annual billing",
    features: [
      "Up to 5 simultaneous campaigns",
      "All features from Monthly plan",
      "Priority feature requests",
      "Dedicated account manager",
      "Advanced analytics dashboard",
      "Quarterly strategy sessions"
    ],
    featured: false,
    cta: "Choose Annual"
  }
];

const FeatureIcon = ({ feature }: { feature: string }) => {
  if (feature.includes("support")) return <ShieldCheck className="h-5 w-5 text-indigo-400" />;
  if (feature.includes("analytics") || feature.includes("report")) return <BarChart2 className="h-5 w-5 text-teal-400" />;
  if (feature.includes("manager")) return <BadgeCheck className="h-5 w-5 text-emerald-400" />;
  return <Check className="h-5 w-5 text-emerald-400" />;
};

export function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="pricing" className="py-24 bg-[#070018] relative overflow-hidden rounded-[3rem] mx-4 my-8">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#2E56FF] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#1A1B6B] rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-16 opacity-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-[#2E56FF]/10 text-[#2E56FF] dark:bg-[#1A1B6B]/20 dark:text-[#1A1B6B] mb-4">
            TRANSPARENT PRICING
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 md:mb-8 text-white">
            Simple Pricing,{' '}
            <span className="bg-gradient-to-r from-[#2E56FF] to-[#1A1B6B] bg-clip-text text-transparent">
              Powerful Results
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12">
            Choose the plan that fits your needs. Scale up or down anytime.
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {pricingTiers.map((tier, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`p-8 relative overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
                  tier.featured
                    ? 'border border-[#2E56FF]/20 bg-[#0A0A1F] dark:bg-[#0A0A1F]'
                    : 'bg-[#0A0A1F] dark:bg-[#0A0A1F] border border-gray-800'
                }`}
              >
                {tier.featured && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-[#2E56FF] to-[#1A1B6B] text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-1 text-white">{tier.name}</h3>
                    <p className="text-gray-300">{tier.description}</p>
                  </div>
                  {tier.featured && <Zap className="h-6 w-6 text-[#2E56FF] dark:text-[#1A1B6B] fill-[#2E56FF]/20 dark:fill-[#1A1B6B]/20" />}
                </div>
                
                <div className="mb-8">
                  <div className="text-5xl font-bold mb-1 flex items-end justify-center text-white">
                    ${tier.price}
                    <span className="text-lg text-gray-400 ml-1">/mo</span>
                    {tier.name.includes("Annual") && (
                      <span className="text-sm bg-[#2E56FF]/10 dark:bg-[#1A1B6B]/20 text-[#2E56FF] dark:text-[#1A1B6B] px-2 py-1 rounded ml-2 mb-2">
                        Save 20%
                      </span>
                    )}
                  </div>
                  {tier.name.includes("Annual") && (
                    <p className="text-sm text-gray-400">Billed annually at ${parseInt(tier.price) * 12}</p>
                  )}
                </div>
                
                <div className="mb-8">
                  <ul className="space-y-3 text-left">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-gray-300">
                        <FeatureIcon feature={feature} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button
                  className={`w-full mx-auto max-w-xs group relative overflow-hidden ${
                    tier.featured
                      ? 'bg-gradient-to-r from-[#2E56FF] to-[#1A1B6B] hover:shadow-lg hover:shadow-[#2E56FF]/20'
                      : 'bg-[#0A0A1F] hover:bg-[#0F0F2F] border border-[#2E56FF] text-white'
                  }`}
                  size="lg"
                >
                  <span className="relative z-10">{tier.cta}</span>
                  {tier.featured && (
                    <span className="absolute inset-0 bg-gradient-to-r from-[#2E56FF]/30 to-[#1A1B6B]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  )}
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-300 mb-4">
            Need something custom? Enterprise plans available.
          </p>
          <Button variant="outline" className="text-[#2E56FF] dark:text-[#1A1B6B] border-[#2E56FF] dark:border-[#1A1B6B] hover:text-[#1A1B6B] dark:hover:text-[#2E56FF] hover:border-[#1A1B6B] dark:hover:border-[#2E56FF]">
            Contact Sales <span className="ml-1">→</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}