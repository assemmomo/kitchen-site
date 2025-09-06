import View from './view.js';
class recipeView extends View {
    _parentElement = document.querySelector('.recipePage');

    _generateMarkup(){
        return  `
        <div class="recipeHeader">
                        <img src="${this._data.image}" alt="">
                        <h1>${this._data.title}</h1>
                    </div>
                    <div class="recipeDetails">
                        <div class="details">
                            <h4>
                                <i class="fas fa-clock"></i> <span>${this._data.cooking_time}</span> min
                            </h4>
                            <h4>
                                <i class="fas fa-user"></i> <span>${this._data.servings}</span> Servings
                            </h4>
                            <div>
                                <i class="fas fa-plus"></i>
                                <i class="fas fa-minus"></i>
                            </div>
                        </div>
                        <div class="recipeBm">
                            <div>
                                <i class="fas fa-bookmark"></i>
                            </div>
                        </div>
                    </div>
                    <div class="recipeInstructions">
                        <h2>Instructions</h2>
                        <ul>
                        ${this._data.ingredients.map(ing => {
                            return `
                            <li><i class="fas fa-check"></i>  <span>${ing.quantity} ${ing.unit}</span> : ${ing.description}</li>
                            `
                        }).join('')}
                        </ul>
                    </div>
                    <div class="howToCook">
                        <h1>HOW TO COOK IT</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, alias nulla sunt perferendis accusantium voluptatem eum, voluptatum, numquam saepe reiciendis temporibus ipsa eos veniam natus quasi sed nemo cum repellendus.</p>
                        <button>DIRECTIONS <i class="fas fa-chevron-right"></i></button>
                    </div>
        `;
    }
}
export default new recipeView();