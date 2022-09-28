import View from './view.js';

class AddRecipeView extends View {
  _parentEl = document.querySelector('.upload');
  _windowEl = document.querySelector('.add-recipe-window');
  _overlayEl = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this.addHandlerShowModal();
    this.addHandlerHideModal();
  }

  _toggleModal() {
    this._windowEl.classList.toggle('hidden');
    this._overlayEl.classList.toggle('hidden');
  }

  addHandlerShowModal() {
    this._btnOpen.addEventListener('click', this._toggleModal.bind(this));
  }

  addHandlerHideModal() {
    this._btnClose.addEventListener('click', this._toggleModal.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentEl.addEventListener('submit', ev => {
      ev.preventDefault();
      const dataArr = [...new FormData(this._parentEl)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  _generateHtml() {
    //prettier-ignore
    return `
        
  `;
  }
}

export default new AddRecipeView();
