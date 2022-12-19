import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <header>
        <div class="hero">
            <div class="hero__inner">
            <h1 class="hero__title">Lapar? Ingat MakanCuy App </h1>
        </div>
        </div>
    </header>
  
    <section class="content">
        <div class="explore">
            <h1 class="explore__label"> Jelajahi Restoran</h1>
            <div class="explore__detail"></div>
        </div>
    </section>
          `;
  },

  async afterRender() {
    const restaurant = await RestaurantDbSource.getListRestaurant();
    const restaurantContainer = document.querySelector('.explore__detail');
    restaurant.forEach((data) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(data);
    });
  },
};

export default Home;
