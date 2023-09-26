import DataTable from "./DataTable"
import DeleteModal from "./DeleteModal"
import FormModal from "./FormModal"
import PagePagination from "./PagePagination"
import SearchBox from "./SearchBox"

function BodyContent({ bookList, isOpenDeleteModal, isOpenAddmodal, toggleModal, handleCreateBook, handleDeleteBook, handleSearchBook, currentPage, handleSwitchPage }) {
    return (
        <main>
          <SearchBox 
            toggleModal={toggleModal}
            handleSearchBook={handleSearchBook}
          />

          <DataTable
            bookList={bookList}
            toggleModal={toggleModal}
            currentPage={currentPage}
          />

          <DeleteModal 
            isOpenDeleteModal={isOpenDeleteModal}
            toggleModal={toggleModal}
            handleDeleteBook={handleDeleteBook}
          />

          <FormModal 
            isOpenAddmodal={isOpenAddmodal}
            toggleModal={toggleModal}
            handleCreateBook={handleCreateBook}
          />

          <PagePagination 
            bookList={bookList}
            currentPage={currentPage}
            handleSwitchPage={handleSwitchPage}
          />
      </main>
    )
}

export default BodyContent