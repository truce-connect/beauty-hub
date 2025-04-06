'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Facial Spa Treatments',
    description: 'Revitalize your skin with our premium facial treatments',
    image: '/product-images/glutatione-face-cream.jpg',
    href: '/Spa-services/Facial-spa'
  },
  {
    title: 'Body Spa Treatments',
    description: 'Rejuvenate your body with our luxurious spa treatments',
    image: '/product-images/morocan.jpg',
    href: '/Spa-services/Body-Spa-Treatments'
  },
  {
    title: 'Intimate Care',
    description: 'Professional and discreet intimate care services',
    image: '/product-images/whitening-hydrating.jpg',
    href: '/Spa-services/Intimate-Care'
  },
  
];

const SpaServices = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/50 to-gray-900/80" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-amber-500 mb-6 font-playfair">
              Spa Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Welcome to Shineshine Cosmetics Spa! The Home Of Elegant Beauty! We offer the best Spa 
              and beauty lounge services. Our services are tailored to refine, polish, and help you 
              maintain your creamy and glowing skin.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm"
              >
                <Link href={service.href} className="block">
                  <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transform transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-amber-500 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-300">
                      {service.description}
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <motion.span
                      className="text-amber-500"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      Learn more →
                    </motion.span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/spa-image.jpg"
                alt="Featured Spa Service"
                width={800}
                height={600}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent" />
            </div>
            <div className="space-y-6 p-6">
              <h2 className="text-3xl font-bold text-amber-500">
                Experience Luxury Spa Treatments
              </h2>
              <p className="text-gray-300 text-lg">
                Indulge in our premium spa services designed to rejuvenate your body and soul. 
                Our expert therapists use only the finest products and techniques to ensure you 
                get the best possible experience.
              </p>
              <Link href="/Bookings">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-amber-500 text-gray-900 rounded-lg font-semibold"
                >
                  Book Now
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SpaServices;