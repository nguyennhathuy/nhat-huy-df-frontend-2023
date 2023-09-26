import { useState } from "react";
import { MODAL_TYPE, TOPIC } from "../data/enum"
import { idGenerator } from "../utils/utils"

function FormModal({ isOpenAddmodal, toggleModal, handleCreateBook }) {
    const [book, setBook] = useState({
        name: '',
        author: '',
        topic: ''
    });
    function handleSubmit(event) {
        event.preventDefault()
        handleCreateBook({...book, id: idGenerator()})
        setBook(prev => ({
            ...prev,
            name: '',
            author: '',
            topic: ''
        }))
        toggleModal(MODAL_TYPE.MODAL_ADD)
    }
    function handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
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
                    <img src="./close-icon.png" onClick={() => toggleModal(MODAL_TYPE.MODAL_ADD)}/>
                </div>
                <div className="modal-form-inner__body">
                    <form id="form1" onSubmit={handleSubmit}>
                        <div>
                            <label>Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                value={book.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Author</label>
                            <input 
                                type="text" 
                                name="author" 
                                id="author"
                                value={book.author}
                                onChange={handleChange}    
                            />
                        </div>
                        <div>
                            <label>Topic</label>
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