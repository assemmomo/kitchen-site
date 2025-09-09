import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import searchResultView from './views/searchResultView.js'; 
import PageButtonsView from './views/pageButtonsView.js';
import bookmarksView from './views/bookmarksView.js'; 



const controlRecipes = async function () {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        recipeView.renderSpinner();

        searchResultView.update(model.getSearchResultsPage());

        // Load recipe
        await model.loadRecipe(id);

        // Render recipe
        recipeView.render(model.state.recipe);
        
    } catch (error) {
        console.error(error);
    }
};

const controlSearchResults = async function () {
    try {

        searchResultView.renderSpinner();

        // Get search query
        const query = searchView.getQuery();
        if (!query) return;

        // Load search results
        await model.loadSearchResults(query);
        // Render results
        searchResultView.render(model.getSearchResultsPage());
        // Render initial pagination buttons
        PageButtonsView.render(model.state.search);


    } catch (error) {
        console.error(error);
    }
};

const controlPageButtons = function (goToPage) {
    // Render NEW results
    searchResultView.render(model.getSearchResultsPage(goToPage));
    // Render NEW pagination buttons
    PageButtonsView.render(model.state.search);
};

const controlServings = function (newServings) {
    // Update the recipe servings (in state)
    model.updateServings(newServings);
    // Render the updated recipe
    recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
    // 1) Add/remove bookmark
    if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
    else model.deleteBookmark(model.state.recipe.id);
    // 2) Update recipe view
    // console.log(model.state.recipe);
    recipeView.update(model.state.recipe);
    // 3) Render bookmarks
    bookmarksView.render(model.state.bookmarks);
};
const controlBookmarks = function(){
    bookmarksView.render(model.state.bookmarks);
};

const init = function () {
    PageButtonsView.addHandlerClick(controlPageButtons);
    recipeView.addHandlerUpdateServings(controlServings);
    recipeView.addHandlerAddBookmark(controlAddBookmark);
    bookmarksView.addHandlerRender(controlBookmarks);
};
init();

window.addEventListener('hashchange', controlRecipes);
window.addEventListener('load', controlRecipes);
document.querySelector('.search').addEventListener('submit', function (e) {
    e.preventDefault();
    controlSearchResults();
});
