'use client';

import { useEffect } from 'react';

export function ScrollReveal() {
  useEffect(() => {
    document.documentElement.classList.add('js');

    const elements = document.querySelectorAll('.rv');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('v');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.02, rootMargin: '0px 0px -20px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
