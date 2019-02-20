function addTask(taskData) {
  console.log(event.target);
   const taskUl= document.getElementById('list-options').value
   // debugger
   const newList = document.createElement('li');
   const deleteButton = document.createElement('button')
  deleteButton.innerHTML = "Delete"
  deleteButton.className = 'delete'
   newList.innerText = taskData
   newList.append(deleteButton)
   deleteButton.addEventListener("click", deleteTask)
   const targetUl = document.getElementById(taskUl)
   targetUl.append(newList)

}

function newTask(event) {
  event.preventDefault();
  const description = document.getElementById("new-task-description").value
  console.log(event)
  addTask(description)

}

function deleteTask(event){
console.log(event.target.parentNode)
    event.preventDefault();
     dt = event.target.parentNode
     dt.remove()

}

function addList(listInfo){
  const  allLists = document.querySelector('#allLists')
  const newDiv = document.createElement('div')
  newDiv.id= 'list'
  const newListTitle = document.createElement('h2')
  const newUl = document.createElement('ul')
  newUl.id = listInfo
  newListTitle.innerText = listInfo
  newDiv.append(newListTitle, newUl)
  allLists.append(newDiv)
}

function newList(event) {
  console.log(event)
  event.preventDefault();
  const create = document.getElementById("new-list-description").value
  addList(create)
  addListOptions(create)

}


function addListOptions(options){
  const listSelect = document.querySelector("#list-options")
  const listOptions = document.createElement('option')
  listOptions.id = 'options'
  listOptions.innerText = options
  listSelect.append(listOptions)
}

let listSubmit = document.getElementById('create-list-form')
listSubmit.addEventListener('submit', newList)

let submitButton = document.getElementById("create-task-form")
submitButton.addEventListener('submit', newTask)
//
// let deleteButtons = document.getElementsByClassName('delete')
// for (let i=0; i < deleteButtons.length; i++){
// deleteButtons[i].addEventListener("click", deleteTask)
//
// }
