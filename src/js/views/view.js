export default class View{
     _data;
    render(data){
        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    update(data){
        if (!data || (Array.isArray(data) && data.length === 0)) return;
        this._data = data;
        const newMarkup = this._generateMarkup();

        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDOM.querySelectorAll('*'));
        const curElements = Array.from(this._parentElement.querySelectorAll('*'));

       newElements.forEach((newEl, i) => {
            const curEl = curElements[i];
            if (curEl) {
                if (!newEl.isEqualNode(curEl) && newEl.firstChild && newEl.firstChild.nodeValue !== null && newEl.firstChild.nodeValue.trim() !== ''){
                    curEl.textContent = newEl.textContent;
                }
                if (!newEl.isEqualNode(curEl)){
                    Array.from(newEl.attributes).forEach(attr => {
                        curEl.setAttribute(attr.name, attr.value);
                    });
                }
            }
        });



        // newElements.forEach((newEl, i) => {
        //     const curEl = curElements[i];
        //     // Check if firstChild exists before accessing nodeValue
        //     if (!newEl.isEqualNode(curEl) && newEl.firstChild && newEl.firstChild.nodeValue.trim() !== ''){
        //         curEl.textContent = newEl.textContent;
        //     }
        // });

    }

    _clear(){
        this._parentElement.innerHTML = '';
    }

    renderSpinner = function () {
    const markup = `
        <div class="spinner">
            <i class="fas fa-spinner fa-spin"></i>
        </div>
    `;
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
};
}
