import { useEffect, useRef, useState } from "react";

interface UseScrollFadeOptions {
  threshold?: number;
  delay?: number;
  bidirectional?: boolean; // Enable fade out when scrolling up
}

export function useScrollFade(options: UseScrollFadeOptions = {}) {
  const { threshold = 0.1, delay = 0, bidirectional = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (bidirectional) {
          // Bidirectional: fade in when entering, fade out when leaving
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          } else {
            // Fade out when scrolling away
            setIsVisible(false);
          }
        } else {
          // Original behavior: only fade in once
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        }
      },
      { threshold }
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
  }, [threshold, delay, bidirectional]);

  return { ref, isVisible };
}
