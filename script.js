const revealTargets = [
  ...document.querySelectorAll(
    ".compare-card, .feature-card, .metric, .timeline-item, .roadmap-grid article, .arch-node"
  )
];

revealTargets.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach((el) => observer.observe(el));
