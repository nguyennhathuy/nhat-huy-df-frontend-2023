import { MODAL_TYPE } from "../commons/constant";

type Props = {
    handleToggleModal: (type: string, id?: string) => void;
    handleSearchBook: (event: any) => void;
}

function SearchBox({ handleToggleModal, handleSearchBook }: Props): JSX.Element {
    return(
        <div className="search-book">
            <input type="text" className="search-book__input" placeholder="Search books" onChange={handleSearchBook}/>
            <button className="search-book__button" onClick={() => handleToggleModal(MODAL_TYPE.MODAL_ADD)}>Add book</button>
        </div>
    )
}

export default SearchBox