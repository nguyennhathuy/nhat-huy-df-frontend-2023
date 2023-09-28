import { MODAL_TYPE } from "../commons/constant"

type Props = {
    isOpenDeleteModal: true | false;
    handleToggleModal: (type: string, id?: string) => void;
    handleDeleteBook: () => void;
}

function DeleteModal({ isOpenDeleteModal, handleToggleModal, handleDeleteBook }: Props): JSX.Element {
    function handleDeleteButton(): void {
        handleDeleteBook()
        handleToggleModal(MODAL_TYPE.MODAL_DELETE)
    }
    return(
        <div className={`modal-delete ${!isOpenDeleteModal ? "hide" : ""}`}>
            <div className="modal-delete-inner">
                <div className="modal-delete-inner__header">
                    <span>Delete Book</span>
                    <img src="./close-icon.png" alt="" aria-hidden="true" onClick={() => handleToggleModal(MODAL_TYPE.MODAL_DELETE)}/>
                </div>
                <div className="modal-delete-inner__body">
                    Do you want to delete Refactoring book?
                </div>
                <div className="modal-delete-inner__footer">
                    <button className="delete-button" onClick={handleDeleteButton}>Delete</button>
                    <button className="cancel-button" onClick={() => handleToggleModal(MODAL_TYPE.MODAL_DELETE)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal