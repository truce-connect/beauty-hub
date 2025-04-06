'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';

const intimateServices = [
  {
    id: 1,
    title: "Premium Intimate Care Package",
    price: 280,
    originalPrice: 350,
    image: '/spa-images/initi1.jpg',
    description: 'Complete intimate care treatment with premium products',
    duration: '90 mins',
    treatments: [
      'Professional Consultation',
      'Gentle Cleansing Treatment',
      'Moisturizing Care',
      'Premium Products Used'
    ]
  },
  {
    id: 2,
    title: "Essential Care Treatment",
    price: 180,
    originalPrice: 220,
    image: '/spa-images/init2.jpg',
    description: 'Essential intimate care for sensitive areas',
    duration: '60 mins',
    treatments: [
      'Basic Consultation',
      'Gentle Care Treatment',
      'Basic Moisturizing',
      'Quality Products'
    ]
  },
  {
    id: 3,
    title: "Advanced Whitening Package",
    price: 320,
    originalPrice: 400,
    image: '/spa-images/initi3.jpg',
    description: 'Advanced treatment for intimate area brightening',
    duration: '120 mins',
    treatments: [
      'Expert Consultation',
      'Advanced Whitening Treatment',
      'Special Care Products',
      'Post-Treatment Care Guide'
    ]
  },
  {
    id: 4,
    title: "Maintenance Care Package",
    price: 150,
    originalPrice: 200,
    image: '/spa-images/init4.jpg',
    description: 'Regular maintenance care for optimal results',
    duration: '45 mins',
    treatments: [
      'Quick Consultation',
      'Maintenance Treatment',
      'Product Application',
      'Care Instructions'
    ]
  }
];

const ServiceCard = ({ service }: { service: typeof intimateServices[0] }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="group relative"
  >
    <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm shadow-lg transition-all hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          width={500}
          height={400}
          className="object-cover transform transition-transform group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-amber-500 mb-2">{service.title}</h3>
        <p className="text-gray-300 mb-4">{service.description}</p>
        
        <div className="space-y-4">
          <ul className="space-y-2">
            {service.treatments.map((treatment, index) => (
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
                  ${service.price}
                </span>
                {service.originalPrice && (
                  <s className="text-gray-500">
                    ${service.originalPrice}
                  </s>
                )}
              </div>
              <p className="text-sm text-gray-400">{service.duration}</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-amber-500 text-gray-900 rounded-lg font-semibold"
            >
              Book Now
            </motion.button>
          </div>
        </div>
      </div>

      {service.originalPrice && (
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-amber-500 text-gray-900 rounded-full text-sm font-medium">
            Save ${service.originalPrice - service.price}
          </span>
        </div>
      )}
    </div>
  </motion.div>
);

export default function IntimateCarePage() {
  return (
    <div className="min-h-screen bg-gray-900">
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
              Intimate Care Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience our professional and discreet intimate care services. 
              Our treatments are designed with your comfort and confidence in mind, 
              using premium products and expert techniques.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {intimateServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-amber-500 mb-4">
                Our Commitment to Your Privacy
              </h2>
              <p className="text-gray-300">
                We understand the sensitive nature of intimate care services. 
                Our professional staff is trained to provide discreet, 
                respectful, and comfortable treatment experiences. All services 
                are conducted in private rooms with strict hygiene protocols.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 