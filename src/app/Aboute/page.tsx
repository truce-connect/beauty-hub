'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-amber-500 mb-4">About Us</h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Welcome to Shineshine Cosmetics Spa, where beauty meets luxury. 
            We are dedicated to providing the highest quality spa services and beauty products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Image
              src="/images/about-spa.jpg"
              alt="Spa Interior"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold text-amber-500">Our Story</h2>
            <p className="text-gray-300">
              Founded with a passion for beauty and wellness, Shineshine Cosmetics Spa 
              has been providing exceptional services since [year]. Our team of expert 
              professionals is dedicated to helping you look and feel your best.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-amber-500">Our Values</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-amber-500">•</span>
                  Quality and Excellence
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-500">•</span>
                  Customer Satisfaction
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-500">•</span>
                  Professional Expertise
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-500">•</span>
                  Innovation in Beauty
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}