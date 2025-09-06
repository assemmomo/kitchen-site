import View from "./view.js";
class PageButtonsView extends View {
    _parentElement = document.querySelector('.pageButtons');


    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function (e) {
            const btn = e.target.closest('button');
            if (!btn) return;
            const goToPage = +btn.getAttribute('go_to');
            handler(goToPage);
        });
    }

    _generateMarkup() {
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        // Page 1, and there are other pages
        if (curPage === 1 && numPages > 1) {
            return `
            <button go_to="${curPage + 1}" class="nextPage">Page ${curPage + 1}</button>
            `;
        }
        // Last page
        if (curPage === numPages && numPages > 1) {
            return `
            <button go_to="${curPage - 1}" class="prevPage">Page ${curPage - 1}</button>
            `;
        }
        // Other pages
        if (curPage < numPages) {
            return `
            <button go_to="${curPage - 1}" class="prevPage">Page ${curPage - 1}</button>
            <button go_to="${curPage + 1}" class="nextPage">Page ${curPage + 1}</button>
            `;
        }
        // Page 1, and there are no other pages
        return '';
    }
}
export default new PageButtonsView();