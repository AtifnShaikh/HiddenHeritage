import React, { useEffect, useRef, useState } from 'react';

const AnimateOnScroll = ({ children, animation = 'fade-in-up', duration = '1000ms', delay = '0ms', once = true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [once]);

  return (
    <div
      ref={elementRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity ${duration} ease-out ${delay}, transform ${duration} ease-out ${delay}`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
