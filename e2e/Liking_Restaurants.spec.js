/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.explore');
  I.see( 'Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not-found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not-found');
  I.amOnPage('/');

  I.seeElement('.explore__title a');

  I.wait(2);

  const firstRestaurant = locate('.explore__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.seeElement('.explore__item');
  const likedRestaurantTitle = await I.grabTextFrom('.explore__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario(' unlike restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not-found');

  I.amOnPage('/');

  I.waitForElement('.explore__title a', 10);
  const firstRestaurant = locate('.explore__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.explore__title a');

  const likedRestaurantTitle = await I.grabTextFrom('.explore__title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(likedRestaurantTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.explore__item');
  const unlikedRestaurant = await I.grabTextFrom('.explore__item');

  assert.strictEqual(unlikedRestaurant, 'Tidak ada restaurant untuk ditampilkan');
});
