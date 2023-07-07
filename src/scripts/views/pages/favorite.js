import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantCard } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <div class="content">
          <h2 class="section-title">FAVORITE</h2>
          <div id="card-wrapper" class="card-wrapper">
            
          </div>
        </div>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#card-wrapper');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantCard(restaurant);
    });
  },
};

export default Favorite;
