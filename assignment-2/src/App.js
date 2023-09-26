import { useEffect, useState } from "react";
import BodyContent from "./components/Body";
import Header from "./components/Header";
import "./style/style.css"
import { DUMMY_BOOK, MODAL_TYPE } from "./data/enum";

function App() {
  const [bookList, setBookList] = useState([]);
  const [isOpenAddmodal, setIsOpenAddModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [idDeleteBook, setIdDeleteBook] = useState('');
  const [currentPage, setCurrenPage] = useState(1);
  useEffect(() => {
    if (!localStorage.getItem("bookList")) {
      localStorage.setItem("bookList", JSON.stringify(DUMMY_BOOK))
    }
    setBookList(JSON.parse(localStorage.getItem("bookList")))
  }, []);
  function toggleModal(type, id) {
    switch(type) {
      case MODAL_TYPE.MODAL_ADD:
        setIsOpenAddModal(prev => !prev)
        break;
      case MODAL_TYPE.MODAL_DELETE:
        setIsOpenDeleteModal(prev => !prev)
        if (id) {
          setIdDeleteBook(id)
        } else {
          setIdDeleteBook('')
        }
        break;
      default:
        throw new Error("Type is not valid")
    }
  }
  function handleCreateBook(book) {
    setBookList(prev => {
      localStorage.setItem("bookList", JSON.stringify([...prev, book]))
      return [...prev, book]
    })
  }
  function handleDeleteBook() {
    const newBookList = bookList.filter(item => item.id !== idDeleteBook)
    setBookList(() => {
      localStorage.setItem("bookList", JSON.stringify(newBookList))
      return newBookList
    })
    if (Math.ceil(newBookList.length / 5) < currentPage) setCurrenPage(Math.ceil(newBookList.length / 5))
    if (Math.ceil(newBookList.length / 5) === 0) setCurrenPage(1)
  }
  function handleSearchBook(event) {
    const fullBooks = JSON.parse(localStorage.getItem("bookList"));
    const searchList = fullBooks.filter(item => {
      return item.name.toLowerCase().includes(event.target.value)
    });
    setBookList([...searchList])
    if (Math.ceil(searchList.length / 5) < currentPage) setCurrenPage(Math.ceil(searchList.length / 5))
    if (Math.ceil(searchList.length / 5) === 0) setCurrenPage(1)
  }
  function handleSwitchPage(page) {
    setCurrenPage(page)
  }
  return (
    <>
      <Header />
      <BodyContent
        bookList={bookList}
        isOpenAddmodal={isOpenAddmodal}
        isOpenDeleteModal={isOpenDeleteModal}
        toggleModal={toggleModal}
        handleCreateBook={handleCreateBook}
        handleDeleteBook={handleDeleteBook}
        handleSearchBook={handleSearchBook}
        currentPage={currentPage}
        handleSwitchPage={handleSwitchPage}
      />
    </>
  );
}

export default App;
