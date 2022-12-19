import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import {
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, detail }) {
    this._likeButtonContainer = likeButtonContainer;
    this._detail = detail;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._detail;

    if (await this._isDetailExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isDetailExist(id) {
    const detail = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!detail;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._detail);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._detail.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
