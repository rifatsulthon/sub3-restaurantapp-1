/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (detail) => `
  <h2 class="explore-detail__title">${detail.name}</h2>
  <img class="lazyload explore-detail__poster" src="${
    CONFIG.BASE_IMAGE_URL + detail.pictureId
  }" alt="${detail.name}" />
  <div class="explore-detail__info">
    <h3>Detail Resto</h3>
    <h4>Rating : ${detail.rating} </h4>
    <h4>Kota </h4>
    <p>${detail.city}</p>
    <h4>Alamat </h4>
    <p>${detail.address}</p>
    <h4>Deskripsi</h4>
    <p>${detail.description}</p>
    <h4>Makanan</h4>
    ${detail.menus.foods.map((food) => `<p> - ${food.name}</p>`).join('')}
    <h4>Menu Minuman</h4>
    ${detail.menus.drinks.map((drink) => `<p> - ${drink.name}</p>`).join('')}
    <h4>Customer Reviews</h4>
    ${detail.customerReviews
      .map(
        (review) =>
          `<p> - ${review.name}, ${review.date}, ${review.review}</p> `
      )
      .join('')}
  </div>
  
`;

const createRestaurantItemTemplate = (detail) => `
    <article class="explore__item" key="${detail.id}">
        <img
          src="${CONFIG.BASE_IMAGE_URL + detail.pictureId}"
          alt="${detail.name}"
          class="lazyload explore__image"
        />
        <div class="explore__body">
          <p class="explore__rating">Rating : ${detail.rating}</p>
          <h1 class="explore__title">
            <a href="/#/detail/${detail.id}">${detail.name}</a>
          </h1>
          <div class="explore__content">
            <p class="explore__city">City : ${detail.city}</p>
            <p class="explore__description">
            ${detail.description}
            </p>
          </div>
        </div>
    </article>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
