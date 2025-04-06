'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoTrash } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Load cart items from localStorage
    const loadCart = () => {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        try {
          const items = JSON.parse(savedCart);
          setCartItems(items);
        } catch (e) {
          console.error('Error parsing cart from localStorage:', e);
        }
      }
      setIsLoading(false);
    };

    loadCart();
  }, []);

  const updateQuantity = (id: number, newQuantity: number) => {
    const updatedItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
    );
    
    // Remove items with quantity 0
    const filteredItems = updatedItems.filter(item => item.quantity > 0);
    
    setCartItems(filteredItems);
    localStorage.setItem('cart', JSON.stringify(filteredItems));
  };

  const removeItem = (id: number) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    try {
      // Here you would typically redirect to a checkout page or payment gateway
      // For now, we'll just show an alert
      alert('Proceeding to checkout with total: £' + total.toFixed(2));
      
      // In a real implementation, you would:
      // 1. Create a checkout session with Stripe
      // 2. Redirect to the checkout page
      // 3. Clear the cart after successful payment
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to initiate checkout. Please try again.');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-amber-500 text-xl">Loading cart...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-amber-500">Your Shopping Cart</h1>
          {cartItems.length > 0 && (
            <button
              onClick={clearCart}
              className="flex items-center gap-2 text-red-500 hover:text-red-400"
            >
              <IoTrash />
              Clear Cart
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <p className="text-gray-300 text-xl mb-4">Your cart is empty</p>
            <button
              onClick={() => router.push('/Shop')}
              className="bg-amber-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 h-48 md:h-auto relative">
                    <div className="relative w-full h-full">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 25vw"
                        priority
                      />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-semibold text-amber-500">{item.name}</h3>
                      <p className="text-gray-300 mt-1">£{item.price}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center bg-gray-700 text-amber-500 rounded-lg hover:bg-gray-600"
                        >
                          -
                        </button>
                        <span className="text-gray-300 w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center bg-gray-700 text-amber-500 rounded-lg hover:bg-gray-600"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-400"
                      >
                        <IoTrash size={20} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-4 bg-gray-700 flex justify-between items-center">
                  <span className="text-gray-300">Subtotal:</span>
                  <span className="text-xl font-bold text-amber-500">
                    £{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </motion.div>
            ))}

            <div className="bg-gray-800 rounded-lg p-6 mt-8">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl text-gray-300">Total:</span>
                <span className="text-3xl font-bold text-amber-500">£{total.toFixed(2)}</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => router.push('/Shop')}
                  className="flex-1 bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
                >
                  Continue Shopping
                </button>
                <button
                  onClick={handleCheckout}
                  className="flex-1 bg-amber-500 text-gray-900 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}