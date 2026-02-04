const revealElements = document.querySelectorAll(
  ".section, .hero__card, .services article, .pricing__card"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});

document.querySelectorAll("[data-scroll]").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.scroll;
    const target = targetId === "top" ? document.body : document.getElementById(targetId);
    if (target) {
      window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
    }
  });
});
