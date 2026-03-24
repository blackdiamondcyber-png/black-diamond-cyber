'use client';

import { useEffect, useState } from 'react';
import { ContactModal } from '@/components/ContactModal';

export function BookingHandler() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href="#book"]');
      if (anchor) {
        e.preventDefault();
        setIsOpen(true);
      }
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return <ContactModal open={isOpen} onClose={() => setIsOpen(false)} />;
}
