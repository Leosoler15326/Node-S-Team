/* versiones en pagina */
const contenedor = document.querySelector('.contenedorOS');
const versiones = Array.from(contenedor.children);
const pagina = document.querySelector('.pagina');

/* logs en fondo */
const fondo = document.querySelector('.fondonegro');
const OScontenidos = document.querySelector('.OScontenidos');
const logs = Array.from(OScontenidos.children);


/* 1. abrir y cerrar las versiones que se le de click */
/* VERSIONES EN LA PAGINA */
function abrirversion(i){

    /*si el elemento cliqueado ya esta abierto cierralo */
    if (versiones[i].className === 'version version_open' ){
        
        versiones[i].classList.remove('version_open');

    /*de lo contrario abrelo */
    }else{
        versiones[i].classList.add('version_open');
    }
}


/* 2. abrir el log cuando se le de click  */
/* LOGS EN EL FONDO NEGRO */
var actual = 0;

function abrirLog(i) {

    /*coje el fondo y muestralo */
    fondo.classList.add('mostrarFondo');

    /*coje el numero de la posion del log cliqueado y abre el contenido en esa posicion */
    logs[i].classList.add('seleccionado');

    actual = i;

    /*coje la pagina y no dejes que scrollee */
    pagina.classList.add('no_scroll');
}


/* 2.5 cerrar el log cuando se le de por fuera (se cierra dando click donde sea ayuda po favo)*/
function cerrarLog() {

    /* coje el fondo y ocultalo */
    fondo.classList.remove('mostrarFondo');

    /* coje el numero del log abierto y cierra el contenido en esa posicion*/
    logs[actual].classList.remove('seleccionado');

    /*coje la pagina y dale el scroll */
    pagina.classList.remove('no_scroll');
}