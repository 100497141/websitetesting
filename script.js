const progress = document.querySelector('.progress');
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${(window.scrollY / max) * 100}%`;
}, {passive:true});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target);
    }
  });
}, {threshold:.08});

document.querySelectorAll('.feature-project,.project-card,.experience-item,.edu').forEach(el => observer.observe(el));
