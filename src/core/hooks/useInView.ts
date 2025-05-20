import { useState, useEffect, useRef } from 'react';

export function useInView<T extends HTMLElement>(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(node);

    if (node.getBoundingClientRect().top < window.innerHeight) {
      setIsVisible(true);
      observer.disconnect();
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
