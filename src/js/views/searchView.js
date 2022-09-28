import View from './view.js';
import previewView from './previewView.js';

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
    return this._data.map(entry => previewView.render(entry, false)).join('\n');
  }
}

export default new SearchView();
