import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import paginationView from './views/paginationView.js';
import bookmarkView from './views/bookmarkView.js';
import addRecipeView from './views/addRecipeView.js';

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

    // Highlight active recipe
    searchView.update(model.getPageResults(model.state.search.page));
    bookmarkView.update(model.state.bookmarks);

    // render recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    console.log(error);
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

const controlServings = servings => {
  // Update servings
  model.updateServings(servings);
  // Update recipe
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = () => {
  // Add/remove bookmark
  model.state.recipe.bookmarked
    ? model.removeBookmark(model.state.recipe.id)
    : model.addBookmark(model.state.recipe);

  // Update recipe view
  recipeView.update(model.state.recipe);

  // render bookmarks
  bookmarkView.render(model.state.bookmarks);
};

const controlBookmarks = () => {
  bookmarkView.render(model.state.bookmarks);
};

const controlAddRecipe = async data => {
  try {
    //render spinner
    addRecipeView.renderSpinner();

    await model.uploadRecipes(data);

    // render recipe
    recipeView.render(model.state.recipe);

    // Success message
    addRecipeView.renderMessage();

    // Render bookmarks
    bookmarkView.render(model.state.bookmarks);

    // Change ID in url
    window.location.hash = '';
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // close form
    setTimeout(() => {
      addRecipeView._toggleModal();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (error) {
    console.log(error);
    addRecipeView.renderError();
  }
};

const init = () => {
  bookmarkView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerServings(controlServings);
  recipeView.addHandlerBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};

init();

// if (module.hot) {
//   module.hot.accept();
// }
