import View from './view.js';
import icons from 'url:../../img/icons.svg'; // parcel 2 - parcel 1 without url:

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');
  _data;

  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', ev => {
      const btn = ev.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateHtml() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) return this.#generateNextHtml(curPage);

    // last page
    if (curPage === numPages) return this.#generatePrevHtml(curPage);

    // Other page
    if (curPage < numPages)
      return `${this.#generatePrevHtml(curPage)}
              ${this.#generateNextHtml(curPage)}`;
  }

  #generateNextHtml(page) {
    //prettier-ignore
    return `  <button class="btn--inline pagination__btn--next" data-goto="${page + 1}">
                <span>Page ${page + 1}</span>
                <svg class="search__icon">
                  <use href="${icons}#icon-arrow-right"></use>
                </svg>
              </button>`;
  }

  #generatePrevHtml(page) {
    //prettier-ignore
    return `  <button class="btn--inline pagination__btn--prev" data-goto="${page - 1}">
                <svg class="search__icon">
                  <use href="${icons}#icon-arrow-left"></use>
                </svg>
               <span>Page ${page - 1}</span>
              </button>`;
  }
}

export default new PaginationView();
