import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <section class="content">
      <div class="explore">
        <h1 class="explore__label">Restoran Favorit</h1>
        <div class="restaurant-item__not-found">
          <h1>Tidak ada restaurant untuk ditampilkan </h1>
        </div>
        <div class="explore__detail"></div>
      </div>
    </section>
          `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('.explore__detail');
    const restaurantNotFound = document.querySelector('.restaurant-item__not-found');

    if (restaurant.length !== 0) {
      restaurantNotFound.innerHTML = "";
    }

    restaurant.forEach((detail) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(detail);
    });
  },
};

export default Favorite;
