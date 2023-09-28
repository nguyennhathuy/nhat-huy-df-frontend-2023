import { useState } from "react";
import { MODAL_TYPE, TOPIC } from "../commons/constant";
import { Book } from "../types/Book";
import { idGenerator } from "../helpers/utils";

type Props = {
    isOpenAddmodal: true | false;
    handleToggleModal: (type: string, id?: string) => void;
    handleCreateBook: (book: Book) => void;
}

function FormModal({ isOpenAddmodal, handleToggleModal, handleCreateBook }: Props): JSX.Element {
    const [book, setBook] = useState({
        name: '',
        author: '',
        topic: ''
    })
    function handleSubmit(event) {
        event.preventDefault()
        if (!book.author || !book.name || !book.topic) {
            alert("Ensure you input a value in all fields!")
            return
        }
        handleCreateBook({...book, id: idGenerator()})
        setBook(prev => ({
            ...prev,
            name: '',
            author: '',
            topic: ''
        }))
        handleToggleModal(MODAL_TYPE.MODAL_ADD)
    }
    function handleChange(event) {
        const {target} = event
        const {name} = target
        const {value} = target
        setBook(prev => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <div className={`modal-form ${!isOpenAddmodal ? "hide" : ""}`}>
            <div className="modal-form-inner">
                <div className="modal-form-inner__header">
                    <span>Add Book</span>
                    <img src="./close-icon.png" alt="" aria-hidden="true" onClick={() => handleToggleModal(MODAL_TYPE.MODAL_ADD)}/>
                </div>
                <div className="modal-form-inner__body">
                    <form id="form1" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">
                                Name
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    value={book.name}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="author">
                                Author
                                <input 
                                    type="text" 
                                    name="author" 
                                    id="author"
                                    value={book.author}
                                    onChange={handleChange}    
                                />
                            </label>
                            
                        </div>
                        <div>
                            <label htmlFor="topic">
                                Topic
                                <select 
                                    name="topic" 
                                    id="topic"
                                    onChange={handleChange}
                                    value={book.topic} 
                                >
                                    <option value="">--Please choose an option--</option>
                                    {
                                        Object.keys(TOPIC).map((item, index) => (
                                            <option value={TOPIC[item]} key={index}>{TOPIC[item]}</option>
                                        ))
                                    }
                                </select>
                            </label>
                            
                        </div>
                    </form>
                </div>
                <div className="modal-form-inner__footer">
                    <button className="create-button" type="submit" form="form1">Create</button>
                </div>
            </div>
        </div>
    )
}

export default FormModal