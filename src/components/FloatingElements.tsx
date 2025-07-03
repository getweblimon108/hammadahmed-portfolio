
import React from 'react';
import { MessageCircle, Heart } from 'lucide-react';

interface FloatingElementsProps {
  isDark: boolean;
}

const FloatingElements = ({ isDark }: FloatingElementsProps) => {
  return (
    <>
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse float-animation"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000 float-animation"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-yellow-400/20 to-red-500/20 rounded-full blur-xl animate-pulse delay-2000 float-animation"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 rounded-full blur-xl animate-pulse delay-3000 float-animation"></div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/923217026152"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-125 transition-all duration-300 animate-bounce glow-cyan hover-lift pulse-glow"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </>
  );
};

export default FloatingElements;
