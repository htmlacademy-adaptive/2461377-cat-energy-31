/* в этот файл добавляет скрипты*/
/* в этот файл добавляет скрипты*/

const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-header__button');
const buttonOpen = document.querySelector('.main-header__open');
const buttonClose = document.querySelector('.main-header__close');

buttonOpen.classList.remove('main-header__invisible');
navMain.classList.remove('main-nav--nojs');


navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--show')) {
    navMain.classList.remove('main-nav--show');
    buttonClose.classList.add('main-header__invisible');
    buttonOpen.classList.remove('main-header__invisible');
  } else {
    navMain.classList.add('main-nav--show');
    buttonClose.classList.remove('main-header__invisible');
    buttonOpen.classList.add('main-header__invisible');
  }
});
