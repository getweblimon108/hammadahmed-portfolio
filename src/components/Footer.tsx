
import React from 'react';
import { Heart } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

const Footer = ({ isDark }: FooterProps) => {
  return (
    <footer className={`py-8 px-4 border-t ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
      <div className="max-w-6xl mx-auto text-center animate-fade-in">
        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} flex items-center justify-center space-x-2`}>
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-500 animate-pulse" />
          <span>by Hammad Ahmed © 2024</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
