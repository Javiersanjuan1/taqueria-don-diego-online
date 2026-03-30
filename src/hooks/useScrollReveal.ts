import { useEffect } from "react";

const useScrollReveal = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    // Immediately reveal elements that are already in view
    const revealIfVisible = (el: Element) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 50) {
        el.classList.add("visible");
      }
    };

    revealElements.forEach(revealIfVisible);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.05, rootMargin: "50px 0px 50px 0px" }
    );

    revealElements.forEach((el) => observer.observe(el));

    // Also reveal on scroll as fallback
    const onScroll = () => {
      document.querySelectorAll(".reveal:not(.visible)").forEach(revealIfVisible);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
};

export default useScrollReveal;
