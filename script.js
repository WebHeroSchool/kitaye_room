function menuToggle() {
  const toggle = document.querySelector('.header__nav-toggle');
  const menu = document.querySelector('.menu');

  toggle.addEventListener('click', function() {
    this.classList.toggle('opened');
    menu.classlist.toggle('open');
  });
}

menuToggle();
