// let b=<button id="deleteBtn" class="btn btn-danger">Delete</button>

submit.addEventListener("click", (e) => {
    e.preventDefault()
    let titlec = title.value
    let descc = desc.value
    let info= Category.value
    localStorage.setItem("Expense", JSON.stringify([titlec, descc]))
    // console.log(e)
    todo.innerHTML  =  `<p>${todo.innerHTML}</p>    ${titlec} - ${descc} - ${info}
    <button type="submit" class="btn btn-danger" id="delete_btn">Delete</button>
    <button type="submit" class="btn btn-primary" id="Edit_btn">Edit</button>` 
       
    
    // title.value = ""
    // desc.value = ""
  })
  
  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault()
    localStorage.removeItem("todo")
    todo.innerHTML = ""
  })
  delete_btn.addEventListener("click", (e) => {
    e.preventDefault()
    localStorage.removeItem("todo")
     todo.innerHTML = ""
  })
