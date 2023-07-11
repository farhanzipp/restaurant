import CONFIG from '../../globals/config';
import createRatingStar from '../../utils/star-rating';

const createRestaurantDetail = (restaurant) => {
  const categoriesList = restaurant.categories.map((category) => `${category.name}`);
  const foodsList = restaurant.menus.foods.map((foodItem) => `<li>${foodItem.name}</li>`).join('');
  const drinksList = restaurant.menus.drinks.map((drinkItem) => `<li>${drinkItem.name}</li>`).join('');
  const customerReviewsList = restaurant.customerReviews.map((review) => `
    <li class="review-card">
      <p class="review-name"><b>${review.name}</b></p>
      <p class="review-date">${review.date}</p>
      <p class="review-text">${review.review}</p>
    </li>
    `).join('');

  return `
  <div class="detail-wrapper">
    <img src="${CONFIG.BASE_IMAGE_URL_SM + restaurant.pictureId}" class="detail-img">
    <div class="detail-info">
      <h2 class="detail-title">${restaurant.name}</h2>
      <p><b>Rating:</b> ${createRatingStar(restaurant.rating)} </p>
      <p><b>Address:</b> ${restaurant.address}, Kota ${restaurant.city}</p>
      <p><b>Categories:</b> ${categoriesList}</p>
    </div>

    <div class="detail-section detail-description">
      <h3>About Restaurant</h3>
      <p class="detail-description">${restaurant.description}</p>
    </div>

    <div class="detail-section detail-menu">
      <h3>Menu</h3>
      <div class="foods">
        <h4>Food</h4>
        <ul class="menu-list">${foodsList}</ul>
      </div>
      <div class="drinks">
        <h4>Drink</h4>
        <ul class="menu-list">${drinksList}</ul>
      </div>
    </div>

    <div class="detail-section detail-review">
      <h3>Review</h3>
      <ul>${customerReviewsList}</ul>
    </div>
  </div>
  `;
};

const createRestaurantCard = (restaurant) => `
  <div class="card">
    <div class="card-img-wrapper">
      <img class="card-img lazyload" alt="${restaurant.name} loading="lazy"
           src="${CONFIG.BASE_IMAGE_URL_SM + restaurant.pictureId}">
        <span class="card-label">${restaurant.city}</span>
    </div>
    <div class="card-title">
        <h3 class="restaurant-title"> 
          <a href="/#/detail/${restaurant.id}">${restaurant.name} </a>
        </h3>
    </div>
    <span class="card-rating"> ${createRatingStar(restaurant.rating)} </span>
    <div class="card-description"> ${restaurant.description} </div>
    <a href="/#/detail/${restaurant.id}" class="read-more">read more..</a>
  </div>
`;

const createLikeRestaurantButton = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButton = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetail,
  createRestaurantCard,
  createLikeRestaurantButton,
  createUnlikeRestaurantButton,
};
