//  show menu
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

    // menu show
    if(navToggle) {
        navToggle.addEventListener('click',()=> {
            navMenu.classList.add('show-menu');
        })
    };

    // menu hidden
    if(navClose){
        navClose.addEventListener('click',()=>{
            navMenu.classList.remove('show-menu');
        })
    }


//Remove menu mobile, cuando hacemos click en un link, se cerra el menu
const navlink=document.querySelectorAll('.nav__link');

const linkAction=()=>{
    const navMenu=document.getElementById('nav-menu');
    //cuando hacemos click en cada link removemos la clase show
    navMenu.classList.remove('show-menu');
}

navlink.forEach(n => n.addEventListener('click', linkAction));


// cambiar el fondo del header

const shadowHeader=()=> {
    const header = document.getElementById('header');
    //aagregar clase si se hace scroll
    this.scrollY >=50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header');
}

window.addEventListener('scroll', shadowHeader);

// swiper favorites

const swiperFavorites = new Swiper('.favorites__swiper',{
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
});


// show scroll up

const scrollUp=()=> {
    const scrollUp=document.getElementById('scroll-up');

    //cuando se scrollea mas de 350, se añade la clase y se muestra la flecha para subir
    this.scrollY>=350?scrollUp.classList.add('show-scroll')
                      :scrollUp.classList.remove('show-scroll');

}

window.addEventListener('scroll',scrollUp);


// scroll sections active link
//resaltar el enlace activo en un menu de navegacion cuando el usuario hace scroll por diferentes secciones de la página
//cuando el usuario se desplaza por una sección específica el enlace correspondiente en el menu de navegacion se marca con la clase active link

const sections = document.querySelectorAll('section[id]');//selecciona todas las etiquetas section que tengan un id definido

const scrollActive=()=>{ //se ejecuta cada vez que el usuario hace scroll
    const scrollDown =window.scrollY;//se obtiene la cantidad de desplazamiento vertical

    sections.forEach(current=> {//se itera en las secciones, current es la seccion actual
        const sectionHeigth = current.offsetHeight, //obtiene altura de seccion
              sectionTop = current.offsetTop - 58,//obtiene posición superior de seccion
              sectionId=current.getAttribute('id'),//obtiene id de seccion
              sectionClass=document.querySelector('.nav__menu a[href*='+sectionId+']')// selecciona el enlace dentro del menu que corresponde a dicha sección

              if(scrollDown>sectionTop && scrollDown<= sectionTop + sectionHeigth){
                sectionClass.classList.add('active-link'); //se evalua su el desplazamiento vertical está dentro del rango de la sección actual
              } else {
                sectionClass.classList.remove('active-link');
              }
    })
}

window.addEventListener('scroll', scrollActive);


// SCROLL REVEAL ANIMATION
const sr= ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset: true, //para que se repitan las animaciones
})

sr.reveal(`.inicio__data, .favorites__container, .footer__container`)
sr.reveal(`.inicio__circle, .inicio__img`, {delay:600,scale: .5})
sr.reveal(`.inicio__coco, .inicio__straw, .inicio__choco, .inicio__almen `, {delay:1000, interval: 100})
sr.reveal(`.informacion__img, .contact__img`, {origin: 'left'})
sr.reveal(`.informacion__list, .contact__data`, {origin: 'right'})
sr.reveal(`.banner__item, .recetas__card`, {interval: 100})