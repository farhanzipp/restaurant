import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../DATA.json';
import { createRating} from '../scripts/rating.js'

/* navbar drawer */
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

/* render card contents */
const cardWrapper = document.querySelector('.card-wrapper');
const restaurants = data.restaurants;

restaurants.forEach(restaurant => {
    // Create the card element
    const card = document.createElement('div');
    card.classList.add('card');

    // Create the card image element
    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('card-img-wrapper');
    const img = document.createElement('img');
    img.classList.add('card-img');
    img.src = restaurant.pictureId;
    img.alt = restaurant.name;
    imgWrapper.appendChild(img);

    // Create the card label element
    const label = document.createElement('span');
    label.classList.add('card-label');
    label.textContent = restaurant.city;
    imgWrapper.appendChild(label);

    // Create the card body element
    const body = document.createElement('div');
    body.classList.add('card-body');

    // Create the card title element
    const title = document.createElement('h3');
    title.classList.add('card-title');
    title.textContent = restaurant.name;
    body.appendChild(title);

    // Create the rating element
    const rating = document.createElement('span');
    rating.classList.add('card-rating');
    rating.innerHTML = createRating(restaurant.rating);
    body.appendChild(rating);

    // Create the card description element
    const description = document.createElement('p');
    description.classList.add('card-description');
    description.textContent = restaurant.description;
    body.appendChild(description);

    // Create the read more on card description element
    const more = document.createElement('a');
    more.setAttribute('href', '#');
    more.classList.add('read-more');
    more.textContent = '...Read more';
    body.appendChild(more);

    // Append the image and body elements to the card element
    card.appendChild(imgWrapper);
    card.appendChild(body);

    // Append the card element to the card wrapper
    cardWrapper.appendChild(card);
});

/* actual copyright year for footer */
const actualYear = new Date().getUTCFullYear();
const actualYearString = document.createTextNode(actualYear.toString());
const yearWrapper = document.querySelector('.copyright-year');

yearWrapper.appendChild(actualYearString);