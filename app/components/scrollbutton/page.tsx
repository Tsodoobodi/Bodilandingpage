"use client"
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react'; // or use your preferred icon

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-24 right-8 border-1 z-50 hover:bg-[#152b4c] p-3 shadow-lg transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 cursor-pointer"
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} className='text-[#152b4c] hover:text-white' />
      </button>
    )
  );
};

export default ScrollToTopButton;