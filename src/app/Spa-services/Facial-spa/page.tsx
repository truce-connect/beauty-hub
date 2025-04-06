'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const facialTreatments = [
  {
    name: "Microdermabrasion",
    description: "Deep exfoliation treatment that removes dead skin cells and stimulates collagen production.",
    duration: "60 mins",
    price: "$120",
    image: "/spa-images/facial1.jpg"
  },
  {
    name: "Hydrating Facial",
    description: "Intensive moisturizing treatment perfect for dry or mature skin.",
    duration: "45 mins",
    price: "$95",
    image: "/spa-images/facial2.jpg"
  },
  {
    name: "Anti-Aging Treatment",
    description: "Premium treatment targeting fine lines and wrinkles using advanced ingredients.",
    duration: "75 mins",
    price: "$150",
    image: "/spa-images/facial3.jpg"
  },
  {
    name: "Brightening Facial",
    description: "Specialized treatment to even skin tone and restore natural glow.",
    duration: "60 mins",
    price: "$110",
    image: "/spa-images/facial4.jpg"
  }
];

export default function FacialSpaPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:gap-12">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="md:w-1/2 space-y-6"
            >
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-amber-500">
                Facial Spa Treatments
              </h1>
              <p className="text-gray-300 text-lg">
                Experience the ultimate in facial rejuvenation with our premium spa treatments. 
                Our expert estheticians use advanced techniques and premium products to reveal 
                your  natural  skin radiance.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-amber-500 text-gray-900 rounded-lg font-semibold"
              >
                Book Appointment
              </motion.button>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 md:mt-0 md:w-1/2"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/product-images/glutatione-face-cream.jpg"
                  alt="Facial Spa Treatments"
                  width={800}
                  height={600}
                  className="w-full h-[500px] object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Treatments Section */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {facialTreatments.map((treatment, index) => (
              <motion.div
                key={treatment.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                 <Image
                    src={treatment.image}
                    alt={treatment.name}
                    width={500}
                    height={300}
                    className="object-cover transform transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                </div>
                <div className="relative p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-amber-500">
                      {treatment.name}
                    </h3>
                    <div className="text-right">
                      <span className="text-amber-500 font-semibold">{treatment.price}</span>
                      <p className="text-sm text-gray-400">{treatment.duration}</p>
                    </div>
                  </div>
                  <p className="text-gray-300">{treatment.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-6 py-2 bg-amber-500/10 text-amber-500 rounded-lg hover:bg-amber-500/20 transition-colors"
                  >
                    Book now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 bg-gray-800/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-amber-500 mb-4">
              Why Choose Our Facial Treatments?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our treatments are customized to your specific skin needs and concerns,
              delivering exceptional results with premium products and expert care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Expert Estheticians', 'Premium Products', 'Customized Care'].map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm text-center"
              >
                <h3 className="text-xl font-semibold text-amber-500 mb-2">{benefit}</h3>
                <p className="text-gray-300">
                  Experience the difference with our professional approach to skincare.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}