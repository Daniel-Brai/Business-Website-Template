const innerEl = document.querySelector('.inner-circle');
const toggle = document.querySelector('.toggle-mode'),
      cancel = document.querySelector('.cancel'),
      navList = document.querySelector('.nav-list'),
      menu = document.querySelector('.menu');


innerEl.addEventListener('click',() => {
    innerEl.classList.toggle('go-rite')
    toggle.classList.toggle('to-next')
})

cancel.addEventListener('click',() =>{
    navList.style.top = '-100em'
})

menu.addEventListener('click',() => {
    navList.style.top = '0';
})