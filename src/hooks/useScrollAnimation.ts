'use client';

import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation every time the section enters the viewport
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: '50px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
}
