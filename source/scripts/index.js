/* в этот файл добавляет скрипты*/
/* в этот файл добавляет скрипты*/

const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-header__button');
const header = document.querySelector('.main-header');
const buttonOpen = document.querySelector('.main-header__open');
const buttonClose = document.querySelector('.main-header__close');

header.classList.remove('main-header--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--show')) {
    navMain.classList.remove('main-nav--show');
    buttonClose.classList.add('visually-hidden');
    buttonOpen.classList.remove('visually-hidden');
  } else {
    navMain.classList.add('main-nav--show');
    buttonClose.classList.remove('visually-hidden');
    buttonOpen.classList.add('visually-hidden');
  }
});
