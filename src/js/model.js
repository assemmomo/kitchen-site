import { API_URL } from './config.js';  
import { getJSON } from './helper.js';  
export const state = {
    recipe:{},
    search:{
        query: '',
        results: [],
        page: 1,
        resultsPerPage: 10
    }
}
export const loadRecipe = async function(id){
    try{
        const data = await getJSON(`${API_URL}${id}`);

        const {recipe} = data.data;
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            ingredients: recipe.ingredients,
            cooking_time: recipe.cooking_time,
            servings: recipe.servings
        };
        // console.log(state.recipe);
    } catch (err) {
        console.error(err);
    }
}

export const loadSearchResults = async function(query){
    try {
        const data = await getJSON(`${API_URL}?search=${query}`);
        state.search.results = data.data.recipes.map(recipe => {
            return {
                id: recipe.id,
                title: recipe.title,
                publisher: recipe.publisher,
                image: recipe.image_url,
            };
        });
        // console.log(state.search.results);
    } catch (err) {
        console.error(err);
    }
};

export const getSearchResultsPage = function(page = state.search.page){
    state.search.page = page;

    const start = (page - 1) * state.search.resultsPerPage;
    const end = page * state.search.resultsPerPage;

    return state.search.results.slice(start, end);
};
