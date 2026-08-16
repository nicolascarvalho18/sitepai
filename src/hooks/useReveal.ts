import { useState, useEffect, useRef } from 'react';

/* useIntersectionObserver */
export function useReveal(threshold = 0.1) {
  const ref = useRef<Element>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); ob.disconnect(); } }, { threshold });
    ob.observe(ref.current);
    return () => ob.disconnect();
  }, [threshold]);
  return { ref, vis };
}

/* useCounter */
export function useCounter(end: number, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, end);
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, active]);
  return count;
}
