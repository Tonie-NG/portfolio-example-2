//Change NavBar color 
window.addEventListener('scroll', ()=> {
  document.querySelector('nav').classList.toggle('scroll-change', window.scrollY > 0);
})