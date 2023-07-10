const { pause } = require('codeceptjs');

Feature('Unliking Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.restaurant-title', 4);

  const firstRestaurant = locate('.restaurant-title a').first()
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');
});

Scenario('unlike restaurant', ({ I }) => {
  I.amOnPage('/#/favorite');
  const firstRestaurant = locate('.restaurant-title a').first()
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  pause();
  I.see('Seems Nothing Here', '.favorite-not-found');
  
});
