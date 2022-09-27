import View from './view.js';
import icons from 'url:../../img/icons.svg'; // parcel 2 - parcel 1 without url:

class SearchView extends View {
  _parentEl = document.querySelector('.results');
  _searchEl = document.querySelector('.search');
  _queryInput = document.querySelector('.search__field');
  _errorMessage = 'No recipes found for this query! Please try again';

  addHandlerSearch(handler) {
    this._searchEl.addEventListener('submit', ev => {
      ev.preventDefault();
      handler();
    });
  }

  getQuery() {
    return this._queryInput.value;
  }

  clearQuery() {
    this._queryInput.value = '';
    this._queryInput.blur();
  }

  _generateHtml() {
    return this._data.map(this.#generateHtmlPreview).join('\n');
  }

  #generateHtmlPreview(entry) {
    const id = window.location.hash.slice(1);

    //prettier-ignore
    return `
          <li class="preview">
            <a class="preview__link ${entry.id === id ? 'preview__link--active' : ''}" href="#${entry.id}">
              <figure class="preview__fig">
                <img src="${entry.image}" alt="${entry.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${entry.title}</h4>
                <p class="preview__publisher">${entry.publisher}</p>
              </div>
            </a>
          </li>
  `;
  }
}

export default new SearchView();
