'use client';

import { useEffect, useState } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import '@/core/SCSS/base/components/_scrollbutton.scss';

export default function ScrollButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      const nearTop = scrollTop < 300;
      const nearBottom = scrollTop + clientHeight >= scrollHeight - 300;

      setShowScrollTop(nearBottom);
      setShowScrollBottom(nearTop);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scrollbutton fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#0E7689] text-[#EFE5C7] shadow-lg hover:bg-[#28A1B7] transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-8 h-8" />
        </button>
      )}
      {showScrollBottom && (
        <button
          onClick={scrollToBottom}
          className="scrollbutton fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#0E7689] text-[#EFE5C7] shadow-lg hover:bg-[#28A1B7] transition-colors"
          aria-label="Scroll to bottom"
        >
          <ArrowDown className="w-8 h-8" />
        </button>
      )}
    </>
  );
}
