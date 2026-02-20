import { useState, useEffect, RefObject } from "react";

interface Dimensions {
  width: number;
  height: number;
}

export function useDimensions(
  ref: RefObject<HTMLElement | SVGElement | null>,
): Dimensions {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frameId: number | null = null;

    const updateDimensions = () => {
      const { width, height } = element.getBoundingClientRect();
      setDimensions((prev) =>
        prev.width === width && prev.height === height
          ? prev
          : { width, height },
      );
    };

    const scheduleUpdate = () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        updateDimensions();
      });
    };

    updateDimensions();

    if (typeof ResizeObserver !== "undefined") {
      const resizeObserver = new ResizeObserver(scheduleUpdate);
      resizeObserver.observe(element);

      return () => {
        resizeObserver.disconnect();
        if (frameId !== null) {
          window.cancelAnimationFrame(frameId);
        }
      };
    }

    window.addEventListener("resize", scheduleUpdate, { passive: true });

    return () => {
      window.removeEventListener("resize", scheduleUpdate);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [ref]);

  return dimensions;
}
