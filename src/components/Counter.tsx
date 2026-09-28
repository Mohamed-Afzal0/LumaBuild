import { useEffect, useRef, useState, type ReactNode } from "react";
import { useLoading } from "../context/LoadingContext";

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
  children?: ReactNode;
}

const Counter = ({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
  className = "",
  decimals = 0,
  children,
}: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);
  const { isReady } = useLoading();

  useEffect(() => {
    // Wait until loading screen has finished and ready signal is active
    if (!isReady) return;
    const el = ref.current;
    if (!el) return;

    const startAnimation = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = eased * target;
        setCount(current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };

      requestAnimationFrame(animate);
    };

    const rect = el.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;

    if (inViewport) {
      // Synchronize nicely with stats container reveal animation
      const timer = setTimeout(startAnimation, 140);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isReady, target, duration]);

  const formatted =
    decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toString();

  return (
    <span ref={ref} className={`counter ${className}`}>
      {children ? (
        children
      ) : (
        <>
          {prefix}
          {formatted}
          {suffix}
        </>
      )}
    </span>
  );
};

export default Counter;
