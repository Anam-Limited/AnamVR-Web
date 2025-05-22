"use client";
import { useEffect, useRef, useState } from "react";

type AnimationOptions = {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
};

export function useScrollAnimation(options: AnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { threshold = 0.1, rootMargin = "0px", delay = 0 } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When element becomes visible
        if (entry.isIntersecting) {
          // Apply delay if specified
          setTimeout(() => {
            setIsVisible(true);
          }, delay);

          // Once visible, stop observing
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold,
        rootMargin,
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
  }, [threshold, rootMargin, delay]);

  return { ref, isVisible };
}
