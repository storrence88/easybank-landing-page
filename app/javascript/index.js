console.log('Hello, world!');

const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
header.addEventListener('click', () => {
  if (header.classList.contains('open')) {
    // Close mobile menu
    header.classList.remove('open');
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
  } else {
    // Open mobile menu
    header.classList.add('open');
    overlay.classList.remove('fade-out');
    overlay.classList.add('fade-in');
  }
});
