import { useEffect, useState } from "react"
import { Book } from "./types/Book"
import Header from "./components/Header"
import BodyContent from "./components/BodyContent"
import { DUMMY_BOOK, MODAL_TYPE } from "./commons/constant"
import "./styles/style.css"

function App() {
  const [bookList, setBookList] = useState<Book[]>([])
  const [isOpenAddmodal, setIsOpenAddModal] = useState<true | false>(false)
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<true | false>(false)
  const [idDeleteBook, setIdDeleteBook] = useState<string>('');
  const [currentPage, setCurrenPage] = useState<number>(1);

  useEffect(() => {
    if (!localStorage.getItem("bookList")) {
      localStorage.setItem("bookList", JSON.stringify(DUMMY_BOOK))
    }
    setBookList(JSON.parse(localStorage.getItem("bookList") || "[]"))
  }, []);
  function handleToggleModal(type: string, id?: string): void {
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
  function handleCreateBook(book: Book): void {
    setBookList(prev => {
      localStorage.setItem("bookList", JSON.stringify([...prev, book]))
      return [...prev, book]
    })
  }
  function handleDeleteBook(): void {
    const newBookList = bookList.filter(item => item.id !== idDeleteBook)
    setBookList(() => {
      localStorage.setItem("bookList", JSON.stringify(newBookList))
      return newBookList
    })
    if (Math.ceil(newBookList.length / 5) < currentPage) setCurrenPage(Math.ceil(newBookList.length / 5))
    if (Math.ceil(newBookList.length / 5) === 0) setCurrenPage(1)
  }
  function handleSearchBook(event: React.ChangeEvent<HTMLInputElement>): void {
    const fullBooks = JSON.parse(localStorage.getItem("bookList") || "[]");
    const searchList = fullBooks.filter(item => {
      return item.name.toLowerCase().includes(event.target.value)
    });
    setBookList([...searchList])
    setCurrenPage(1)
  }
  function handleSwitchPage(page: number): void {
    setCurrenPage(page)
  }
  return (
    <>
      <Header />
      <BodyContent 
        bookList={bookList}
        isOpenAddmodal={isOpenAddmodal}
        isOpenDeleteModal={isOpenDeleteModal}
        currentPage={currentPage}
        handleToggleModal={(type, id) => handleToggleModal(type, id)}
        handleCreateBook={(book) => handleCreateBook(book)}
        handleDeleteBook={() => handleDeleteBook()}
        handleSearchBook={(event) => handleSearchBook((event))}
        handleSwitchPage={(page) => handleSwitchPage(page)}
      />
    </>
  )
}

export default App
