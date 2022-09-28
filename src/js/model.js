import { API_URL } from './config.js';
import { RESULTS_PER_PAGE } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    resultsPerPage: RESULTS_PER_PAGE,
    page: 1,
  },

  bookmarks: [],
};

export const loadRecipe = async id => {
  try {
    const data = await getJSON(`${API_URL}${id}`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    state.recipe.bookmarked = state.bookmarks.some(
      bookmark => bookmark.id === id
    );
  } catch (error) {
    throw error;
  }
};

export const searchRecipes = async query => {
  try {
    state.search.query = query;

    const data = await getJSON(`${API_URL}?search=${query}`);

    state.search.results = data.data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      };
    });
  } catch (error) {
    throw error;
  }
};

export const getPageResults = (page = 1) => {
  state.search.page = page;

  return state.search.results.slice(
    (page - 1) * RESULTS_PER_PAGE,
    page * RESULTS_PER_PAGE
  );
};

export const updateServings = servings => {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity *= servings / state.recipe.servings;
  });

  state.recipe.servings = servings;
};

const storeBookmarks = () => {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = recipe => {
  // Add bookmark
  state.bookmarks.push(recipe);

  // render current recipe as bookmark
  state.recipe.bookmarked = true;

  // Save in local storage
  storeBookmarks();
};

export const removeBookmark = id => {
  // Delete bookmarked recipe
  const index = state.bookmarks.findIndex(bookmark => bookmark.id === id);
  state.bookmarks.splice(index, 1);

  // render bookmark removal
  state.recipe.bookmarked = false;

  // Save in local storage
  storeBookmarks();
};

const init = () => {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
};

init();
