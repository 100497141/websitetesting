// Small, deliberately restrained interactions.
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("in-view");
  });
}, {threshold: .08});
document.querySelectorAll(".feature-card,.mini-card,.job,.thesis,.edu-item").forEach(el => observer.observe(el));
