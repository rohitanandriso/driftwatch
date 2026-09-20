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


// Technical architecture deck section
(() => {
  const deckPath = "docs/Driftwatch_Technical_Architecture_Deck.pptx";
  const results = document.getElementById("results");
  if (!results || document.getElementById("technical-deck")) return;

  const section = document.createElement("section");
  section.className = "section section-dark";
  section.id = "technical-deck";
  section.innerHTML = `
    <div class="container">
      <div class="section-kicker">Technical architecture deck</div>
      <h2>Go deeper into the design behind Driftwatch.</h2>
      <p class="section-intro">
        A 16-slide technical walkthrough covering the shared stateful control plane, session model,
        detector engine, Chat Firewall, MCP Gateway, Browser Guard, multilingual scenarios,
        containment model, deployment architecture, validation scope, and production roadmap.
      </p>
      <div class="result-panel">
        <div class="result-copy">
          <span class="card-label">PowerPoint · Technical deep dive</span>
          <h3>Driftwatch — Technical Architecture & Security Design</h3>
          <p>
            Built for technical reviewers, security architects, and hackathon judges who want to understand
            exactly where Driftwatch sits, what is working today, and how the prototype evolves into an enterprise control.
          </p>
          <div class="browser-pills" style="margin-top:18px">
            <span>16 slides</span><span>3 trust boundaries</span><span>Session state model</span>
            <span>Detector engine</span><span>Insider risk</span><span>Production roadmap</span>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;justify-content:center;gap:12px;min-width:220px">
          <a class="button button-primary" href="${deckPath}" download>Download technical deck ↓</a>
          <a class="button button-ghost" href="https://github.com/rohitanandriso/driftwatch/blob/main/${deckPath}" target="_blank" rel="noreferrer">View file on GitHub ↗</a>
        </div>
      </div>
    </div>`;
  results.parentNode.insertBefore(section, results);

  const nav = document.querySelector(".nav");
  if (nav && !nav.querySelector('a[href="#technical-deck"]')) {
    const link = document.createElement("a");
    link.href = "#technical-deck";
    link.textContent = "Technical Deck";
    const resultsLink = nav.querySelector('a[href="#results"]');
    nav.insertBefore(link, resultsLink || null);
  }

  const heroActions = document.querySelector(".hero-actions");
  if (heroActions && !heroActions.querySelector('a[href="#technical-deck"]')) {
    const link = document.createElement("a");
    link.className = "button button-ghost";
    link.href = "#technical-deck";
    link.textContent = "Technical deck";
    heroActions.appendChild(link);
  }
})();
