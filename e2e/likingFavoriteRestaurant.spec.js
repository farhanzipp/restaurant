const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('.content');
  I.see('Seems Nothing Here', '.favorite-not-found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Seems Nothing Here', '.favorite-not-found');
  I.amOnPage('/');
  I.waitForElement('.restaurant-title', 4);

  const firstRestaurant = locate('.restaurant-title a').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card-wrapper');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
