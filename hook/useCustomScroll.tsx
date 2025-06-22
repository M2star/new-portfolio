"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export const useCustomScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);
  const [scrollbarStyle, setScrollbarStyle] = useState<{
    height: number;
    top: number;
    opacity: number;
  }>({
    height: 0,
    top: 0,
    opacity: 0,
  });

  const updateScrollbar = useCallback(() => {
    if (containerRef.current && contentRef.current) {
      const containerHeight = containerRef.current.offsetHeight;
      const contentHeight = contentRef.current.scrollHeight;
      if (contentHeight > containerHeight) {
        const scrollbarThumbHeight =
          (containerHeight / contentHeight) * containerHeight;
        const scrollbarThumbTop =
          (-translateY / contentHeight) * containerHeight;

        setScrollbarStyle({
          height: scrollbarThumbHeight,
          top: scrollbarThumbTop,
          opacity: 1,
        });
      } else {
        setScrollbarStyle({ height: 0, top: 0, opacity: 0 });
      }
    }
  }, [translateY]);

  const handleWheel = useCallback((event: WheelEvent) => {
    if (containerRef.current && contentRef.current) {
      event.preventDefault();
      const containerHeight = containerRef.current.offsetHeight;
      const contentHeight = contentRef.current.scrollHeight;
      const maxScroll = contentHeight - containerHeight;

      if (maxScroll <= 0) return;

      setTranslateY((prevTranslateY) => {
        let newTranslateY = prevTranslateY - event.deltaY;
        if (newTranslateY > 0) {
          newTranslateY = 0;
        } else if (newTranslateY < -maxScroll) {
          newTranslateY = -maxScroll;
        }
        return newTranslateY;
      });
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("wheel", handleWheel, { passive: false });

    const resizeObserver = new ResizeObserver(() => {
      updateScrollbar();
    });
    resizeObserver.observe(container);
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    return () => {
      container.removeEventListener("wheel", handleWheel);
      resizeObserver.disconnect();
    };
  }, [handleWheel, updateScrollbar]);

  useEffect(() => {
    updateScrollbar();
  }, [translateY, updateScrollbar]);

  return { containerRef, contentRef, translateY, scrollbarStyle };
}; 