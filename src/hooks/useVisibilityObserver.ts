// hooks/useVisibilityObserver.ts
import { useEffect, useRef, useState } from "react";

export function useVisibilityObserver<T extends HTMLElement = HTMLElement>(
  threshold: number = 0.5,
) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Проверяем, что threshold - валидное число
    const validThreshold =
      typeof threshold === "number" && isFinite(threshold) ? threshold : 0.5;

    // Ограничиваем значение от 0 до 1
    const clampedThreshold = Math.min(Math.max(validThreshold, 0), 1);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: clampedThreshold,
        root: null,
        rootMargin: "0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, isVisible };
}
