import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import paginationView from './views/paginationView.js';

import 'core-js/stable'; // polyfill everything
import 'regenerator-runtime/runtime'; // polyfill async/await

///////////////////////////////////////

const controlRecipes = async () => {
  try {
    const id = window.location.hash.slice(1);
    // Guard
    if (!id) return;

    // loading spinner
    recipeView.renderSpinner();

    // Load recipe
    await model.loadRecipe(id);

    // render recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
  }
};

const controlSearchResults = async () => {
  try {
    const query = searchView.getQuery();
    if (!query) return;

    searchView.renderSpinner();

    await model.searchRecipes(query);

    // render results
    searchView.render(model.getPageResults());
    searchView.clearQuery();

    // render pagination
    paginationView.render(model.state.search);
  } catch (error) {
    searchView.renderError();
  }
};

const controlPagination = goToPage => {
  // render results
  searchView.render(model.getPageResults(goToPage));

  // render pagination
  paginationView.render(model.state.search);
};

const init = () => {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};

init();

// if (module.hot) {
//   module.hot.accept();
// }
