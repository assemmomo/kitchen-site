import View from "./view.js";
class searchResultView extends View {
    _parentElement = document.querySelector('.searchResults');

    _generateMarkup() {
        return this._data.map(this._generateMarkupPreview).join('');
    }
    _generateMarkupPreview(result) {
        const id = window.location.hash.slice(2);
        showSideBar()
        return `
        <li>
            <a href="#&${result.id}" class="${id === result.id ? 'link_active' : ''}">
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
function showSideBar() {
    const sideBar = document.querySelector('.sideBar');
    const openSearchResult = document.querySelector('.openSearchResult');
    openSearchResult.querySelector('i').classList.remove('fa-bars');
    openSearchResult.querySelector('i').classList.add('fa-xmark');
    sideBar.classList.add('showSideBar');
}
export default new searchResultView();
