Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked resto', ({ I }) => {
  I.seeElement('#card-wrapper');
  I.see('Favorite restaurant not found', '.empty-restaurant');
});
