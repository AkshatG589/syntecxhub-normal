"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUp({
  to,
  duration = 1200,
}) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const start = performance.now();

          const animate = (time) => {
            const progress = Math.min(
              (time - start) / duration,
              1
            );

            setValue(Math.floor(progress * to));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [to, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {value}
    </span>
  );
}
