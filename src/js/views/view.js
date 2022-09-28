import icons from 'url:../../img/icons.svg'; // parcel 2 - parcel 1 without url:
import morphdom from 'morphdom';
export default class View {
  _data;

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const html = this._generateHtml();
    if (!render) return html;

    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', html);
  }

  update(data) {
    this._data = data;
    const html = this._generateHtml();

    const newDOM = document.createRange().createContextualFragment(html);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentEl.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      if (!newEl.isEqualNode(curEl)) morphdom(curEl, newEl);
    });
  }

  _clear() {
    this._parentEl.innerHTML = '';
  }

  renderSpinner() {
    const html = `
       <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
       </div>`;

    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', html);
  }

  renderError(message = this._errorMessage) {
    const html = `
          <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div> 
    `;

    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', html);
  }

  renderMessage(message = this._message) {
    const html = `
        <div class="message">
          <div>
            <svg>
              <use href="${icons}#icon-smile"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div>
    `;

    this.clear();
    this._parentEl.insertAdjacentHTML('afterbegin', html);
  }
}
