'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCart, IoCheckmarkCircle } from 'react-icons/io5';
import Product from './Product';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Cleansing Tone",
    price: 19.99,
    description: "Instantly resurface the skin with our collections",
    image: "/products/cleansing-tone.jpg",
    category: "Skincare"
  },
  {
    id: 2,
    name: "Asian White",
    price: 19.99,
    description: "Instantly resurface the skin with our collections",
    image: "/products/asian-white.jpg",
    category: "Skincare"
  },
  {
    id: 3,
    name: "Collagen Xtra-White",
    price: 16.99,
    description: "Instantly resurface the skin with our collections",
    image: "/products/collagen-xtra-white.jpg",
    category: "Skincare"
  },
  {
    id: 4,
    name: "Ever White Moroccan Whitening Soap",
    price: 15.60,
    description: "Instantly resurface the skin with our collections",
    image: "/products/moroccan-soap.jpg",
    category: "Body Care"
  },
  {
    id: 5,
    name: "Face Wash",
    price: 17.99,
    description: "Instantly resurface the skin with our collections",
    image: "/products/face-wash.jpg",
    category: "Skincare"
  },
  {
    id: 6,
    name: "Glow Boosting Lighting Oil",
    price: 24.99,
    description: "Instantly resurface the skin with our collections",
    image: "/products/glow-oil.jpg",
    category: "Skincare"
  },
  {
    id: 7,
    name: "Glutac Injection",
    price: 29.99,
    description: "Instantly resurface the skin with our collections",
    image: "/products/glutac-injection.jpg",
    category: "Skincare"
  },
  {
    id: 8,
    name: "Glutathione",
    price: 28.29,
    description: "Instantly resurface the skin with our collections",
    image: "/products/glutathione.jpg",
    category: "Skincare"
  },
  {
    id: 9,
    name: "Glutathione Face Cream",
    price: 25.99,
    description: "Instantly resurface the skin with our collections",
    image: "/products/glutathione-cream.jpg",
    category: "Skincare"
  },
  {
    id: 10,
    name: "Glutathione Super",
    price: 25.99,
    description: "Instantly resurface the skin with our collections",
    image: "/products/glutathione-super.jpg",
    category: "Skincare"
  },
  {
    id: 11,
    name: "Half Cast Oil",
    price: 16.99,
    description: "Instantly resurface the skin with our collections",
    image: "/products/half-cast-oil.jpg",
    category: "Body Care"
  },
  {
    id: 12,
    name: "Healthy Glow",
    price: 17.59,
    description: "Instantly resurface the skin with our collections",
    image: "/products/healthy-glow.jpg",
    category: "Skincare"
  },
  {
    id: 13,
    name: "Parley",
    price: 9.99,
    description: "Instantly resurface the skin with our collections",
    image: "/products/parley.jpg",
    category: "Body Care"
  },
  {
    id: 14,
    name: "SYM White",
    price: 25.00,
    description: "Instantly resurface the skin with our collections",
    image: "/products/sym-white.jpg",
    category: "Skincare"
  },
  {
    id: 15,
    name: "Whitening Hydrating",
    price: 15.99,
    description: "Instantly resurface the skin with our collections",
    image: "/products/whitening-hydrating.jpg",
    category: "Skincare"
  }
];

export default function Shop() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationProduct, setNotificationProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleBack = () => {
    setSelectedProduct(null);
  };

  const addToCart = (product: Product, quantity: number = 1) => {
    // Get existing cart from localStorage
    let cart = [];
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        cart = JSON.parse(savedCart);
      } catch (e) {
        console.error('Error parsing cart from localStorage:', e);
      }
    }

    // Check if product already exists in cart
    const existingItemIndex = cart.findIndex((item: any) => item.id === product.id);
    
    if (existingItemIndex >= 0) {
      // Update quantity if product exists
      cart[existingItemIndex].quantity += quantity;
    } else {
      // Add new product to cart
      cart.push({
        ...product,
        quantity
      });
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Show notification
    setNotificationProduct(product);
    setShowNotification(true);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <AnimatePresence mode="wait">
      {selectedProduct ? (
        <Product 
          product={selectedProduct} 
          onBack={handleBack} 
          onAddToCart={addToCart}
        />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-amber-500 mb-8 text-center">Our Products</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-xl cursor-pointer"
                  onClick={() => handleProductClick(product)}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-amber-500 mb-2">{product.name}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-amber-500">£{product.price}</span>
                      <button
                        className="flex items-center gap-2 bg-amber-500 text-gray-900 px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors"
                      >
                        <IoCart />
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Add to Cart Notification */}
          <AnimatePresence>
            {showNotification && notificationProduct && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg flex items-center gap-3 z-50"
              >
                <IoCheckmarkCircle className="text-green-500 text-2xl" />
                <div>
                  <p className="font-semibold">{notificationProduct.name} added to cart!</p>
                  <p className="text-sm text-gray-300">£{notificationProduct.price}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}