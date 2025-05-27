'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles, Twitter, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <footer 
      className="py-16 bg-[#070018] text-white"
      ref={ref}
    >
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-[#2E56FF]" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#2E56FF] to-[#1A1B6B] bg-clip-text text-transparent">
                CohesiveAI
              </span>
            </div>
            <p className="text-gray-400">
              Creating cohesive content with the power of artificial intelligence
            </p>
          </motion.div>

          {/* Product Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-lg text-white">Product</h4>
            <ul className="space-y-3">
              <li>
                <motion.a 
                  href="#features" 
                  className="text-gray-400 hover:text-[#2E56FF] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Features
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#templates" 
                  className="text-gray-400 hover:text-[#2E56FF] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Templates
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#pricing" 
                  className="text-gray-400 hover:text-[#2E56FF] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Pricing
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-lg text-white">Company</h4>
            <ul className="space-y-3">
              <li>
                <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-[#2E56FF] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  About
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-[#2E56FF] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Blog
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-[#2E56FF] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Careers
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-lg text-white">Stay Updated</h4>
            <motion.div 
              className="flex gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-[#0f0524] border-gray-700 focus:border-[#2E56FF] focus:ring-[#2E56FF]"
              />
              <Button 
                className="bg-gradient-to-r from-[#2E56FF] to-[#1A1B6B] hover:from-[#1A1B6B] hover:to-[#2E56FF]"
              >
                Subscribe
              </Button>
            </motion.div>
            
            <div className="flex gap-4 mt-6">
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-[#2E56FF] transition-colors"
                whileHover={{ y: -3 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-[#2E56FF] transition-colors"
                whileHover={{ y: -3 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-[#2E56FF] transition-colors"
                whileHover={{ y: -3 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          © {new Date().getFullYear()} CohesiveAI. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}