"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedBar({
  width,
}: {
  width: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={`bar-fill ${visible ? "is-visible" : ""}`}
      style={{
        "--bar-width": `${width}%`,
      } as React.CSSProperties}
    />
  );
}