const currentBookList = JSON.parse(localStorage.getItem("bookList"));
if (!currentBookList) {
    localStorage.setItem("bookList", JSON.stringify( [
        {
            name: "Refactoring",
            author: "Martin Fowler",
            topic: "Programming"
        },
        {
            name: "Designing Data-Intensive Applications",
            author: "Martin Kleppmann",
            topic: "Database"
        },
        {
            name: "The Phoenix Project",
            author: "Gene Kim",
            topic: "DevOps"
        }
    ] ));
}


const table = document.querySelector(".data-table table").getElementsByTagName('tbody')[0];
const addBookButton = document.querySelector(".search-book .search-book__button");
const modalForm = document.querySelector(".modal-form");
const modalDelete = document.querySelector(".modal-delete");
const createButton = document.querySelector(".modal-form .create-button");
const closeIconModalAdd = document.querySelector(".modal-form-inner__header img");
const deleteButton = document.querySelector(".modal-delete .delete-button");
const cancelDeleteButton = document.querySelector(".modal-delete .cancel-button");
const clostIconModalDelete = document.querySelector(".modal-delete-inner__header img");
function openDeleteModal(index) {
    deleteButton.index = index;
    toggleModal(modalDelete);
}
function openAddModal() {
    toggleModal(modalForm);
}
function toggleModal(modal) {
    modal.classList.toggle("hide");
}
function handleAddBook(e) {
    e.preventDefault();
  
    let name = document.getElementById("name");
    let author = document.getElementById("author");
    let topic = document.getElementById("topic");
    if (name.value === "" || author.value === "" || topic.value === "") {
      alert("Ensure you input a value in both fields!");
    } else {
      alert("This form has been successfully submitted!");
      currentBookList.push({
        name: name.value,
        author: author.value,
        topic: topic.value
      });
      name.value = "";
      author.value = "";
      topic.value = "";
    }
    localStorage.setItem("bookList", JSON.stringify(currentBookList));
    renderDataTable(currentBookList);
    toggleModal(modalForm);
  }
function handleDeleteBook(item) {
    currentBookList.splice(item.target.index, 1);
    localStorage.setItem("bookList", JSON.stringify(currentBookList));
    renderDataTable(currentBookList);
    toggleModal(modalDelete);
}
const renderDataTable = (arr) => {
    table.innerHTML = '';
    arr.forEach((item, index) => {
        table.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.author}</td>
                <td>${item.topic}</td>
                <td>
                    <button onclick="openDeleteModal(${index})">Delete</button>
                </td>
            </tr>
        `
    });
};


addBookButton.onclick = openAddModal;
closeIconModalAdd.onclick = () => toggleModal(modalForm)
cancelDeleteButton.onclick = () => toggleModal(modalDelete)
clostIconModalDelete.onclick = () => toggleModal(modalDelete)
createButton.onclick = handleAddBook
deleteButton.onclick = handleDeleteBook
renderDataTable(JSON.parse(localStorage.getItem("bookList")));

