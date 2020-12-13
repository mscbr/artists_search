import { useState, useEffect } from 'react';

export default function useWindowWidth() {
  const [windowDimensions, setWindowDimensions] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
