'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !(menuRef.current as HTMLElement).contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menu on ESC key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const navItems = [
    { id: 'use-cases', label: 'Use Cases' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'blog', label: 'Blog' },
  ];

  return (
    <>
      <nav className="fixed top-4 left-4 right-4 z-50 bg-[#08001B]/95 backdrop-blur-md border border-gray-800 rounded-full shadow-lg md:mx-auto md:max-w-6xl lg:max-w-7xl xl:max-w-8xl">
        <div className="flex h-14 items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-base font-semibold text-white tracking-tight">Cohesive</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-xs font-medium text-gray-300 hover:text-white uppercase tracking-wider transition-colors duration-200 hover:underline hover:underline-offset-4 hover:decoration-blue-500"
              >
                {item.label}
              </a>
            ))}
            <Button
              className="bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs font-medium px-4 py-2 rounded-full flex items-center gap-1.5 transition-all duration-300 hover:shadow-md hover:scale-105"
            >
              Get Started <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-full p-2 transition-transform duration-200 hover:scale-110"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden bg-white fixed inset-x-0 top-[4.5rem] bottom-0 order-t border-gray-800/50 flex flex-col justify-between transition-all duration-500 ease-in-out transform origin-top"
            style={{ animation: isMenuOpen ? 'slideIn 0.4s ease-out' : 'slideOut 0.4s ease-in' }}
          >
            <div className="flex flex-col bg-[#09001C] px-6 py-6 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-base font-medium text-gray-200 hover:text-white uppercase tracking-wide transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50 active:bg-gray-700/50 menu-item"
                  onClick={toggleMenu}
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="px-6 py-6 border-t bg-[#09001C] border-gray-800/50">
              <Button
                className="bg-[#3B82F6] hover:bg-[#2563EB] text-white text-base font-medium px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-105 w-full menu-item"
                onClick={toggleMenu}
                style={{ animationDelay: `${0.1 * navItems.length}s` }}
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        .menu-item {
          opacity: 0;
          transform: translateY(-10px);
          animation: slideDown 0.4s ease-out forwards;
        }
        @keyframes slideDown {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scaleY(0);
          }
          to {
            opacity: 1;
            transform: scaleY(1);
          }
        }
        @keyframes slideOut {
          from {
            opacity: 1;
            transform: scaleY(1);
          }
          to {
            opacity: 0;
            transform: scaleY(0);
          }
        }
      `}</style>
    </>
  );
}