import React from "react";
import { Book } from "../types/Book"
import SearchBox from "./SearchBox";
import DataTable from "./DataTable";
import DeleteModal from "./DeleteModal";
import FormModal from "./FormModal";
import PagePagination from "./PagePagination";

type Props = {
    bookList: Book[];
    isOpenAddmodal: true | false;
    isOpenDeleteModal: true | false;
    currentPage: number;
    handleToggleModal: (type: string, id?: string) => void;
    handleCreateBook: (book: Book) => void;
    handleDeleteBook: () => void;
    handleSearchBook: (event) => void;
    handleSwitchPage: (page: number) => void;
}

function BodyContent({ bookList, isOpenAddmodal, isOpenDeleteModal, currentPage, handleToggleModal, handleCreateBook, handleDeleteBook, handleSearchBook, handleSwitchPage }: Props): JSX.Element {
    
    return (
        <main>
            <SearchBox 
                handleToggleModal={handleToggleModal}
                handleSearchBook={handleSearchBook}
            />
            
                <DataTable 
                    bookList={bookList}
                    currentPage={currentPage}
                    handleToggleModal={handleToggleModal}
                />

                <DeleteModal 
                    isOpenDeleteModal={isOpenDeleteModal}
                    handleToggleModal={handleToggleModal}
                    handleDeleteBook={handleDeleteBook}
                />

                <FormModal 
                    isOpenAddmodal={isOpenAddmodal}
                    handleToggleModal={handleToggleModal}
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