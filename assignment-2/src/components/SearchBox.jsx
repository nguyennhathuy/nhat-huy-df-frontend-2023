import { MODAL_TYPE } from "../data/enum";

function SearchBox({ toggleModal, handleSearchBook }) {
    
    return (
        <div className={`search-book `}>
            <input type="text" className="search-book__input" placeholder="Search books" onChange={handleSearchBook}/>
            <button className="search-book__button" onClick={() => toggleModal(MODAL_TYPE.MODAL_ADD)}>Add book</button>
        </div>
    )
}

export default SearchBox;