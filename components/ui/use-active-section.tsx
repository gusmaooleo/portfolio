"use client";

import React from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = React.useState<string>("");
  const idsKey = sectionIds.join("|");

  React.useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length === 0) return;

        const nextId = visibleEntries[0].target.id;
        setActiveSection((current) => (current === nextId ? current : nextId));
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      },
    );

    for (const element of elements) {
      observer.observe(element);
    }

    const initialVisible = elements.find((element) => {
      const rect = element.getBoundingClientRect();
      const viewportMiddle = window.innerHeight / 2;
      return rect.top <= viewportMiddle && rect.bottom >= viewportMiddle;
    });

    if (initialVisible) {
      setActiveSection(initialVisible.id);
    }

    return () => {
      observer.disconnect();
    };
  }, [idsKey, sectionIds]);

  return activeSection;
}
