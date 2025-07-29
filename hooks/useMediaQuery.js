'use client';

import { useEffect, useState } from 'react'

const useMediaQuery = (minWidth) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const handleResize = () => {
      if (window.innerWidth >= minWidth) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [minWidth])
  return isDesktop;
}
export default useMediaQuery