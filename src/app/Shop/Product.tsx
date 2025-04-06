'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { IoCart, IoArrowBack, IoCheckmarkCircle } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
  };
  onBack: () => void;
  onAddToCart: (product: ProductProps['product'], quantity: number) => void;
}

export default function Product({ product, onBack, onAddToCart }: ProductProps) {
  const [quantity, setQuantity] = useState(1);
  const [showAddedNotification, setShowAddedNotification] = useState(false);
  const router = useRouter();

  const handleQuantityChange = (change: number) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setShowAddedNotification(true);
    
    // Hide notification after 2 seconds
    setTimeout(() => {
      setShowAddedNotification(false);
    }, 2000);
  };

  const handleCheckout = async () => {
    try {
      // First add to cart
      onAddToCart(product, quantity);
      
      // Then redirect to cart page
      router.push('/Cart');
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to initiate checkout. Please try again.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-amber-500 hover:text-amber-400 mb-8"
        >
          <IoArrowBack />
          Back to Products
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-amber-500 mb-4">{product.name}</h1>
            <p className="text-gray-300 text-lg mb-6">{product.description}</p>
            
            <div className="mb-8">
              <span className="text-3xl font-bold text-amber-500">£{product.price}</span>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-gray-300">Quantity:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 text-amber-500 rounded-lg hover:bg-gray-700"
                >
                  -
                </button>
                <span className="text-gray-300 w-8 text-center">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 text-amber-500 rounded-lg hover:bg-gray-700"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={handleAddToCart}
                className="flex items-center justify-center gap-2 bg-amber-500 text-gray-900 py-4 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
              >
                <IoCart />
                Add to Cart - £{(product.price * quantity).toFixed(2)}
              </button>
              
              <button
                onClick={handleCheckout}
                className="flex items-center justify-center gap-2 bg-gray-700 text-white py-4 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Added to Cart Notification */}
      {showAddedNotification && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg flex items-center gap-3 z-50"
        >
          <IoCheckmarkCircle className="text-green-500 text-2xl" />
          <div>
            <p className="font-semibold">{product.name} added to cart!</p>
            <p className="text-sm text-gray-300">£{(product.price * quantity).toFixed(2)}</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
} 