import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import searchResultView from './views/searchResultView.js'; 
import PageButtonsView from './views/pageButtonsView.js';



const controlRecipes = async function () {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        recipeView.renderSpinner();

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

const init = function () {
    PageButtonsView.addHandlerClick(controlPageButtons);
};
init();

window.addEventListener('hashchange', controlRecipes);
window.addEventListener('load', controlRecipes);
document.querySelector('.search').addEventListener('submit', function (e) {
    e.preventDefault();
    controlSearchResults();
});

