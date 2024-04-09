// function to turn on display add_task_section
function Display() {
  let addTaskSect = document.getElementById("add_task_section");
  let addTaskBtn = document.getElementById("add_task_btn");

  addTaskSect.style.display = "flex";

  // addTaskBtn.addEventListener("click", () => {
  //     addTaskSect.style.display = "flex";
  // })
}

// function to turn off display add_task_section
function Disappear() {
  let addTaskSect = document.getElementById("add_task_section");
  addTaskSect.style.display = "none";
}



//function to create work_todo_card
function createElement() {
  let categoryInput = document.getElementById("add_task_category").value;
  let categoryTitle = document.getElementById("add_task_title").value;
  let categoryContent = document.getElementById("add_task_content").val;
  let cardInfo = {
    "category": categoryInput,
    "title": categoryTitle,
    "content": categoryContent
  };


  const todo_Array = localStorage.getItem("Todo_array");

  if(todo_Array != NULL)
  {
    JSON.parse(localStorage.getItem("Todo_array"))
  }
  else
  {
    todo_Array = [];
  }
  
  
  

}

//function to check whether input field are fullfilled

// ! bug 
function checkCategoryValidate() {
  let categoryInput = document.getElementById("add_task_category");
  let categoryTitle = document.getElementById("add_task_title");
  let categoryContent = document.getElementById("add_task_content");

  let categoryCheckAll = document.querySelectorAll(".add_task_input");

  


//clear trang thai active cua tat ca input
 categoryCheckAll.forEach((categoryCheckElement) =>{
   categoryCheckElement.classList.remove("active");
 })  


 //kiem tra Category input co dc dien vao hay ko
  if (categoryInput.value == "") {
    categoryInput.classList.add("active");
  }
  else
  {
    categoryInput.classList.remove("active");
  }

  if (categoryTitle.value == "") {
    categoryTitle.classList.add("active");
  }
  else
  {
    categoryTitle.classList.remove("active");
  }

  if (categoryContent.value == "") {
    categoryContent.classList.add("active");
  }
  else
  {
    categoryContent.classList.remove("active");
    Disappear();
    createElement();
  }
}
