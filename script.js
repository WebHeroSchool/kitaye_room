function menuToggle() {
  const btn = document.querySelector('.header__nav-toggle');
  const nav = document.querySelector('.header__nav');

  btn.addEventListener('click', function() {
    btn.classList.toggle('opened');
    nav.classList.toggle('mobile-menu');
  });
}

menuToggle();
