import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetail } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <div id="detail" class="detail"></div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantSource.getRestaurantDetail(url.id);
    const detailContainer = document.querySelector('#detail');

    detailContainer.innerHTML = createRestaurantDetail(restaurants);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurants.id,
        name: restaurants.name,
        pictureId: restaurants.pictureId,
        city: restaurants.city,
        rating: restaurants.rating,
        description: restaurants.description,
      },
    });
  },
};

export default Detail;
