'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { IoMenu, IoClose, IoCart } from 'react-icons/io5';
import {
  ChevronDown,
  User,
  Search,
  Globe,
  Facebook,
  Instagram,
  Youtube,
  // Tiktok, // Corrected TikTok icon name
} from 'lucide-react';
import { Playfair_Display, Poppins } from 'next/font/google';

// Configure Google Fonts
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700']
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500']
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLocalizationOpen, setIsLocalizationOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Fix hydration issues by only rendering client-side content after mount
  useEffect(() => {
    setMounted(true);
    
    // Get cart count from localStorage if available
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const cartItems = JSON.parse(savedCart);
        setCartCount(cartItems.length);
      } catch (e) {
        console.error('Error parsing cart from localStorage:', e);
      }
    }
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Products',
      href: '/wrapper', // Add this line to route to wrapper page
      
    },
    
    { 
      name: 'Support', 
      href: '/SupportNav',  // Add this line
      subLinks: ['Contact Us', 'FAQ'] 
    },
    
    {name: 'About '},
    {name: 'Spa Services', subLinks: ['All Spa Services',
      'Facial Spa Treatments',
      'Body Spa Treatments',
      'Intimate Care',
      'Add-On Facial Treatments'
    ] }

  ];

  return (
    <header className={`${poppins.variable} ${playfair.variable} font-sans sticky top-0 z-50 bg-black shadow-sm text-amber-500`}>
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-4 md:px-8">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden hover:text-amber-600 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
        </button>

        {/* Logo */}
        <Link href="/" className="mx-auto md:mx-0">
          {mounted && (
            <div className="relative h-10 w-40">
              <Image
                src="/logo.png"
                alt="Skin_fix_ beauty-hub"
                width={100}
                height={100}
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-6 md:flex">
          {navLinks.map((link) => (
            <div key={link.name} className="group relative">
              {link.href ? (
                <Link 
                  href={link.href}
                  className="flex items-center gap-1 hover:text-amber-600 transition-colors"
                >
                  {link.name}
                  {link.subLinks && <ChevronDown size={16} className="text-amber-500" />}
                </Link>
              ) : (
                <button className="flex items-center gap-1 hover:text-amber-600 transition-colors">
                  {link.name}
                  {link.subLinks && <ChevronDown size={16} className="text-amber-500" />}
                </button>
              )}
              {link.subLinks && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute left-0 top-full hidden w-64 bg-black p-4 shadow-lg group-hover:block border border-amber-500/20"
                >
                  {link.subLinks.map((subLink) => (
                    <Link
                      key={subLink}
                      href="#"
                      className="block py-2 hover:text-amber-600 transition-colors text-sm"
                    >
                      {subLink}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsSearchOpen(true)} 
            aria-label="Search"
            className="hover:text-amber-600 transition-colors"
          >
            <Search size={20} />
          </button>
          <Link 
            href="/account" 
            aria-label="Account"
            className="hover:text-amber-600 transition-colors"
          >
            <User size={20} />
          </Link>
          <Link 
            href="/Cart" 
            className="relative mr-4 hover:text-amber-600 transition-colors"
          >
            <IoCart className="text-2xl text-amber-500" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-y-0 right-0 w-80 bg-black shadow-xl md:hidden text-amber-500"
          >
            <div className="p-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="mb-4 hover:text-amber-600 transition-colors"
                aria-label="Close menu"
              >
                <IoClose size={24} />
              </button>
              
              {/* Mobile Navigation */}
              <nav className="space-y-4">
                {navLinks.map((link) => (
                  <div key={link.name} className="border-b border-amber-500/20">
                    <button className="flex w-full items-center justify-between py-2 hover:text-amber-600">
                      {link.name}
                      {link.subLinks && <ChevronDown size={16} />}
                    </button>
                    {link.subLinks && (
                      <div className="ml-4 space-y-2">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink}
                            href="#"
                            className="block py-1 text-sm hover:text-amber-600"
                          >
                            {subLink}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Localization */}
              <div className="mt-6 pt-4 border-t border-amber-500/20">
                <button className="flex items-center gap-2 w-full hover:text-amber-600">
                  <Globe size={18} />
                  Language & Currency
                  <ChevronDown size={16} className="ml-auto" />
                </button>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex gap-6 justify-center">
                <Facebook size={20} className="hover:text-amber-600 transition-colors" />
                <Instagram size={20} className="hover:text-amber-600 transition-colors" />
                {/* <TikTok size={20} className="hover:text-amber-600 transition-colors" /> */}
                <Youtube size={20} className="hover:text-amber-600 transition-colors" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          >
            <div className="mx-auto mt-20 max-w-2xl p-4">
              <div className="relative rounded-lg bg-black p-4 shadow-xl border border-amber-500/20">
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-4 top-4 hover:text-amber-600 transition-colors"
                  aria-label="Close search"
                >
                  <IoClose size={24} />
                </button>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-3 bg-black border border-amber-500/20 rounded-lg text-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                  <Search size={20} className="absolute left-3 top-3.5 text-amber-500/80" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Localization Dropdown */}
      <div className="relative hidden md:block">
        <button
          onClick={() => setIsLocalizationOpen(!isLocalizationOpen)}
          className="flex items-center gap-1 hover:text-amber-600 transition-colors mx-8"
        >
          <Globe size={16} />
          USD $
        </button>
        {isLocalizationOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute right-8 top-full mt-2 w-48 rounded border border-amber-500/20 bg-black shadow-lg"
          >
            <div className="p-2">
              <button className="flex w-full items-center justify-between p-2 hover:text-amber-600">
                Canada (CAD $)
              </button>
              <button className="flex w-full items-center justify-between p-2 hover:text-amber-600">
                United States (USD $)
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}