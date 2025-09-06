import View from "./view.js";
class searchResultView extends View {
    _parentElement = document.querySelector('.searchResults');

    _generateMarkup() {
        return this._data.map(this._generateMarkupPreview).join('');
    }
    _generateMarkupPreview(result) {
        return `
        <li>
            <a href="#&${result.id}">
                <img src="${result.image}" alt="${result.title}">
                <div>
                    <h4>${result.title}</h4>
                    <p>${result.publisher}</p>
                </div>
            </a>
        </li>
        `
    }
}
export default new searchResultView();
