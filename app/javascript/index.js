console.log('Hello, world!');

const btn = document.querySelector('#btnHamburger');
btn.addEventListener('click', () => {
  if (btn.classList.contains('open')) {
    btn.classList.remove('open');
  } else {
    btn.classList.add('open');
  }
});
