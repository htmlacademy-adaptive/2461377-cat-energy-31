var e=document.querySelector(".main-nav"),s=document.querySelector(".main-header__button"),t=document.querySelector(".main-header"),n=document.querySelector(".main-header__open"),a=document.querySelector(".main-header__close");t.classList.remove("main-header--nojs");s.addEventListener("click",()=>{e.classList.contains("main-nav--show")?(e.classList.remove("main-nav--show"),a.classList.add("main-header__button--invisible"),n.classList.remove("main-header__button--invisible")):(e.classList.add("main-nav--show"),a.classList.remove("main-header__button--invisible"),n.classList.add("main-header__button--invisible"))});
