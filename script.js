const revealTargets = [
  ...document.querySelectorAll(
    ".compare-card, .why-card, .feature-card, .metric, .roadmap-grid article, .arch-node, .support-card, .demo-step, .result-panel, .demo-callout, .surface-lane, .video-card, .browser-card, .browser-demo-panel, .language-panel"
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

const rows = [...document.querySelectorAll(".term-row")];
const state = document.getElementById("sessionState");

const states = [
  ["OBSERVING", "state-observing"],
  ["OBSERVING", "state-observing"],
  ["FLAGGED", "state-flagged"],
  ["BLOCKED", "state-blocked"],
  ["QUARANTINED", "state-quarantined"]
];

let index = 0;

function animateSession() {
  rows.forEach((row, i) => row.classList.toggle("active", i <= index));

  if (state) {
    state.className = "";
    state.classList.add(states[index][1]);
    state.textContent = states[index][0];
  }

  index = (index + 1) % rows.length;
}

rows.forEach((row) => row.classList.remove("active"));
animateSession();
setInterval(animateSession, 1400);


document.querySelectorAll(".demo-video").forEach((video) => {
  const frame = video.closest(".video-frame");
  video.addEventListener("error", () => frame?.classList.add("media-error"));
  const source = video.querySelector("source");
  if (source) {
    source.addEventListener("error", () => frame?.classList.add("media-error"));
  }
});
