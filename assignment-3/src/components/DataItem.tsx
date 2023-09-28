import { MODAL_TYPE } from "../commons/constant";
import { Book } from "../types/Book"

type Props = {
    item: Book;
    handleToggleModal: (type: string, id?: string) => void;

}

function DataItem({ item, handleToggleModal }: Props): JSX.Element {
    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.author}</td>
            <td>{item.topic}</td>
            <td>
                <button onClick={() => handleToggleModal(MODAL_TYPE.MODAL_DELETE, item.id)}>Delete</button>
            </td>
        </tr>
    )
}

export default DataItem