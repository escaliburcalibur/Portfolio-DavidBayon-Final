// =====================
// PROJECT ROUTING
// =====================
const cards = document.querySelectorAll(".project-card");
const projects = document.querySelectorAll(".project");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const target = card.dataset.target;

    projects.forEach((p) => p.classList.remove("active"));
    document.getElementById(target).classList.add("active");

    ScrollTrigger.refresh();
  });
});

// =====================
// DARK MODE
// =====================
const toggle = document.getElementById("dark-toggle");
toggle.addEventListener("change", (e) => {
  document.body.classList.toggle("dark", e.target.checked);
  document.body.classList.toggle("light", !e.target.checked);
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".reveal").forEach((el) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });
});

// =====================
// CONTACT LINK (ANALYTICS / UX)
// =====================
const contactLink = document.querySelector(".contact-link");

if (contactLink) {
  contactLink.addEventListener("click", () => {
    console.log("Contact CTA clicked → Instagram");
  });
}
