import { useEffect, useState, useRef } from "react";

export const useInView = (
  options = { threshold: 0.1, rootMargin: "0px 0px -20% 0px" },
) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  // Intentionally omit `options` to avoid unnecessary observer recreation.
  // Keep options stable if dynamic configuration is needed.
  useEffect(() => {
    const node = ref.current;
    // fallback if node in view or there is not node
    if (!node || inView) return;
    // observer for node when enter viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      [options],
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [inView]);

  return [ref, inView];
};
