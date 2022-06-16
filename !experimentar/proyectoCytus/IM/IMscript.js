
const fondo = document.querySelector('.fondonegro');
const IMcontenidos = document.querySelector('.IMcontenidos');
const IMcuerpos = Array.from(IMcontenidos.children);



var actual = 0;

function abrirCuerpo(i){

    fondo.classList.add('mostrarFondo');

    IMcuerpos[i].classList.add('seleccionado');

    actual = i;
}

function cerrar(){
    
    fondo.classList.remove('mostrarFondo');

    IMcuerpos[actual].classList.remove('seleccionado');

}