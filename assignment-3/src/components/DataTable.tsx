import { Book } from "../types/Book"
import DataItem from "./DataItem";

type Props = {
    bookList: Book[];
    currentPage: number;
    handleToggleModal: (type: string, id?: string) => void;
}

function DataTable({ bookList, currentPage, handleToggleModal }: Props): JSX.Element {
    return (
        <div className="data-table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Topic</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookList.slice((currentPage - 1) *  5, currentPage * 5).map((item, index) => <DataItem key={index} item={item} handleToggleModal={handleToggleModal} />)
                    }
                </tbody>
                
            </table>
        </div>
    )
}

export default DataTable