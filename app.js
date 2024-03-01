//hamburger
const hamburger = document.querySelector('.hamburger');
const menu_list = document.querySelector('.menu-list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu_list.classList.toggle('show');
});

//sticky nav
const header = document.querySelector('header')
window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 0)
});

// scroll to top
const scrollbtn = document.querySelector('.scroll_to_top')
window.addEventListener('scroll', () => {
  scrollbtn.classList.toggle('scroll', window.scrollY > 50)
});

