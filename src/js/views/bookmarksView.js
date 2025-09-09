import View from "./view.js";
class bookmarksView extends View {
    _parentElement = document.querySelector('.bookmarksList');


    addHandlerRender(handler){
        window.addEventListener('load', handler);
    }
    _generateMarkup() {
        return this._data.map(this._generateMarkupPreview).join('');
    }
    _generateMarkupPreview(result) {
        const id = window.location.hash.slice(2);
        return `
        <li>
            <a href="#${result.id}">
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
export default new bookmarksView();
