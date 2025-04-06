'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';
import BookingModal from '@/app/Bookings/page';

const spaPackages = [
  {
    id: 1,
    title: "Mother's Day Spa Treat Gold Package",
    price: 350,
    originalPrice: 600,
    image: '/spa-images/mothersday.jpg',
    description: 'Full body massage, facial treatment, and premium care package',
    duration: '180 mins',
    treatments: [
      'Full Body Massage',
      'Deep Tissue Treatment',
      'Premium Care Package',
      'Complimentary Refreshments'
    ]
  },
  {
    id: 2,
    title: "Mother's Day Silver Package",
    price: 200,
    originalPrice: 350,
    image: '/spa-images/mothersday2.jpg',
    description: 'Relaxing massage and basic facial treatment',
    duration: '120 mins',
    treatments: [
      'Swedish Massage',
      'Basic Facial',
      'Hand Treatment',
      'Refreshments'
    ]
  },
  {
    id: 3,
    title: "Luxury Body Treatment",
    price: 280,
    originalPrice: 400,
    image: '/spa-images/mothersday2.jpg',
    description: 'Premium body scrub and moisturizing treatment',
    duration: '90 mins',
    treatments: [
      'Body Scrub',
      'Moisturizing Wrap',
      'Hot Stone Therapy',
      'Aromatherapy'
    ]
  },
  {
    id: 4,
    title: "Couples Spa Package",
    price: 450,
    originalPrice: 600,
    image: '/spa-images/couple.jpg',
    description: 'Romantic couples massage and treatment',
    duration: '120 mins',
    treatments: [
      'Couples Massage',
      'Face Treatment',
      'Private Spa Room',
      'Champagne Service'
    ]
  }
];

const PackageCard = ({ product, onBook }: { product: typeof spaPackages[0], onBook: (id: number) => void }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="group relative"
  >
    <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm shadow-lg transition-all hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={400}
          className="object-cover transform transition-transform group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={true}
          onError={(e) => {
            e.currentTarget.src = '/product-images/default-spa.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-amber-500 mb-2">{product.title}</h3>
        <p className="text-gray-300 mb-4">{product.description}</p>
        
        <div className="space-y-4">
          <ul className="space-y-2">
            {product.treatments.map((treatment, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <svg className="w-4 h-4 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {treatment}
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between pt-4 border-t border-amber-500/20">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-amber-500">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <s className="text-gray-500">
                    ${product.originalPrice}
                  </s>
                )}
              </div>
              <p className="text-sm text-gray-400">{product.duration}</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onBook(product.id)}
              className="px-6 py-2 bg-amber-500 text-gray-900 rounded-lg font-semibold"
            >
              Book Now
            </motion.button>
          </div>
        </div>
      </div>

      {product.originalPrice && (
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-amber-500 text-gray-900 rounded-full text-sm font-medium">
            Save ${product.originalPrice - product.price}
          </span>
        </div>
      )}
    </div>
  </motion.div>
);

export default function BodySpaTreatments() {
  const [selectedPackage, setSelectedPackage] = useState<typeof spaPackages[0] | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBooking = (packageId: number) => {
    const selected = spaPackages.find(pkg => pkg.id === packageId);
    if (selected) {
      setSelectedPackage(selected);
      setIsBookingModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <div className="absolute top-8 left-8 z-10">
            <Link 
              href="/Spa-services" 
              className="flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors"
            >
              <IoArrowBack />
              <span>Back to Services</span>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-amber-500 mb-6 font-playfair">
              Body Spa Treatments
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Indulge in our luxurious body treatments designed to rejuvenate your body and soul.
              Experience the ultimate relaxation with our premium spa packages.
            </p>
          </motion.div>

          {/* Packages Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
          >
            {spaPackages.map((pkg) => (
              <PackageCard 
                key={pkg.id} 
                product={pkg} 
                onBook={handleBooking}
              />
            ))}
          </motion.div>
        </div>
      </section>
      
      {selectedPackage && (
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          serviceDetails={{
            id: selectedPackage.id,
            title: selectedPackage.title,
            price: selectedPackage.price,
            duration: selectedPackage.duration
          }}
        />
      )}
    </div>
  );
}
