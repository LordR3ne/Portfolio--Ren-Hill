// Portfolio — shared behavior across all pages

document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  markActiveNavLink();
});

function initNavToggle() {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function markActiveNavLink() {
  const links = document.querySelectorAll(".nav-link");
  const current = window.location.pathname.split("/").pop() || "index.html";

  links.forEach((link) => {
    const href = link.getAttribute("href");
    const linkFile = href.split("/").pop();
    if (linkFile === current) {
      link.classList.add("is-active");
    }
  });
}
