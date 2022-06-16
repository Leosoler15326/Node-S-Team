const track = document.querySelector('.carrusel_track');
const slides = Array.from(track.children);
const Iboton = document.querySelector('.boton_izquierda');
const Dboton = document.querySelector('.boton_derecha');
const carruselNav = document.querySelector('.navegador_carrusel');
const dots = Array.from(carruselNav.children);

const slidewidth = slides[0].getBoundingClientRect().width;


//organizar los "slides" uno al lado del otro

//slides[0].style.left = slidewidth * 0 + 'px';
//slides[1].style.left = slidewidth * 1 + 'px';
//slides[2].style.left = slidewidth * 2 + 'px';

slides.forEach((carrusel_slide, index) => {
    carrusel_slide.style.left = slidewidth * index + 'px';
})

// FUNCIONES--
const moverSlide = (track, slideAcutal, slideObjetivo) => {
    track.style.transform = 'translateX(-' + slideObjetivo.style.left +')';
    slideAcutal.classList.remove('slide_acutal');
    slideObjetivo.classList.add('slide_acutal');
}
const cambiarDots = (dotAcutal, dotObjetivo) => {
    dotAcutal.classList.remove('indicador_actual');
    dotObjetivo.classList.add('indicador_actual');
}
const flechas = (slides, Iboton, Dboton, dotClick) => {
    if (dotClick === 0) {
        Iboton.classList.add('boton_oculto');
        Dboton.classList.remove('boton_oculto');
    } else if (dotClick === slides.length - 1){
        Iboton.classList.remove('boton_oculto');
        Dboton.classList.add('boton_oculto');
    } else {
        Iboton.classList.remove('boton_oculto');
        Dboton.classList.remove('boton_oculto');
    }
}

//click izquierda mueve a la izquierda
Iboton.addEventListener('click', e => {
    const slideAcutal = track.querySelector('.slide_acutal');
    const slideAntes = slideAcutal.previousElementSibling;
    const dotAcutal = carruselNav.querySelector('.indicador_actual'); 
    const dotAntes = dotAcutal.previousElementSibling;
    const index = slides.findIndex(slide => slide === slideAntes);

    moverSlide(track, slideAcutal, slideAntes);
    cambiarDots(dotAcutal, dotAntes);
    flechas(slides, Iboton, Dboton, index);
})

//click derecha mueve a la derecha
Dboton.addEventListener('click', e => {
    const slideAcutal = track.querySelector('.slide_acutal');
    const slideDespues = slideAcutal.nextElementSibling;
    const dotAcutal = carruselNav.querySelector('.indicador_actual'); 
    const dotDespues = dotAcutal.nextElementSibling;
    const index = slides.findIndex(slide => slide === slideDespues);

    moverSlide(track, slideAcutal, slideDespues);
    cambiarDots(dotAcutal, dotDespues);
    flechas(slides, Iboton, Dboton, index);
})

//click en un "dot" mueve hacia ese "slide"
carruselNav.addEventListener('click', e => {
    const dotObjetivo = e.target.closest('button');

    if (!dotObjetivo) return;

    const slideAcutal = track.querySelector('.slide_acutal');
    const dotAcutal = carruselNav.querySelector('.indicador_actual'); 
    const dotClick = dots.findIndex(dot => dot === dotObjetivo);
    const slideObjetivo = slides[dotClick];

    moverSlide(track, slideAcutal, slideObjetivo);
    cambiarDots(dotAcutal, dotObjetivo);
    flechas(slides, Iboton, Dboton, dotClick);
})


// ----------- side menu
const menu = document.querySelector('.sidemenu');
const opcion = Array.from(menu.children);

function Fmenu() {
    if(menu.className === 'sidemenu menuON'){
        menu.classList.remove('menuON');
    }else{
        menu.classList.add('menuON');
    }
}