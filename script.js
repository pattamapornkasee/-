const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

const currentPage = location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: .12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelector('.form')?.addEventListener('submit', event => {
  event.preventDefault();
  alert('ขอบคุณสำหรับข้อความ เราจะติดต่อกลับโดยเร็วที่สุด 🥪');
});
