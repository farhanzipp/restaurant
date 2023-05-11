import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

const menu = document.querySelector('#menu');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

document.addEventListener('click', function (event) {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickInsideDrawer = drawer.contains(event.target);
    
    if (!isClickInsideMenu && !isClickInsideDrawer) {
        drawer.classList.remove('open');
    }
});