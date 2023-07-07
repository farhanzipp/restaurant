import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantCard } from '../templates/template-creator';
import '../../components/app-hero';

const Home = {
  async render() {
    return `
          <div class="content">
            <app-hero></app-hero>
            <h2 class="section-title">RECOMMENDATION FOR YOU</h2>
            <div id="card-wrapper" class="card-wrapper"></div>
          </div>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getRestaurantList();
    const restaurantContainer = document.querySelector('#card-wrapper');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantCard(restaurant);
    });
  },
};

export default Home;
