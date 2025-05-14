const links = document.querySelectorAll('a, button');

links.forEach(link => {
  link.addEventListener('mouseenter', () => cursor.classList.add('grow'));
  link.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
});

const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
  const cursorSize = 20; // match your .custom-cursor width/height
  cursor.style.transform = `translate(${e.clientX - cursorSize / 2}px, ${e.clientY - cursorSize / 2}px)`;
});
