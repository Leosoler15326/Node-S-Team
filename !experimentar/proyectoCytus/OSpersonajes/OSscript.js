const contenedor = document.querySelector('.contenedorOS');
const versiones = Array.from(contenedor.children);

const contenedorLogs = document.querySelector('.fondonegro');
const logs = Array.from(contenedorLogs.children);


/* 1. abrir y cerrar las versiones que se le de click */

function abrirversion(i){

    /*si el elemento cliqueado ya esta abierto cierralo */
    if (versiones[i].className === 'version version_open' ){
        
        versiones[i].classList.remove('version_open');

    /*de lo contrario abrelo */
    }else{
        versiones[i].classList.add('version_open');
    }
}


/* 2. abrir el log cuando se le de click y cerrar el log cuando se le de por fuera */
var actual = 0;

function abrirLog(i){

    /*coje el fondo y muestralo */
    contenedorLogs.classList.add('mostrarFondo');

    /*coje el numero de la posion del log cliqueado y abre el contenido en esa posicion */
    logs[i].classList.add('seleccionado');

    actual = i;

}

function cerrarLog(){

    /*coje el fondo y escondelo */
    contenedorLogs.classList.remove('mostrarFondo');

    var contador = 0;

    /*coje TODOS los logs uno por uno y cierralos */
    while(contador < logs.length){

        logs[contador].classList.remove('seleccionado');
        contador++;
        /* .....inproductivo pero no se como mas hacerlo matame porfa..... */
    }
    

}