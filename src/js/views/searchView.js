class searchView{
    _parentElement = document.querySelector('.search');
    getQuery(){
        const query = this._parentElement.querySelector('input').value;
        this._clearInput();
        return query;
    }
    _clearInput(){
        this._parentElement.querySelector('input').value = '';
    }
}
export default new searchView();
