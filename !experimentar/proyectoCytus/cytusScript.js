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