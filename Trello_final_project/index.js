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
function createElement() {}

//function to check whether input field are fullfilled

// ! bug 
function checkCategoryValidate() {
  let categoryInput = document.getElementById("add_task_category").value;
  let categoryTitle = document.getElementById("add_task_title").value;
  let categoryContent = document.getElementById("add_task_content").value;

  let categoryCheckAll = document.querySelectorAll(".add_task_input");

  
//   categoryCheckAll.forEach((categoryCheck) => {
//     categoryCheck.classList.remove("active");
//   });

  console.log(categoryTitle);
  if (categoryInput == "") {
    categoryInput.classList.add("active");
  }
  else
  {
    categoryInput.classList.remove("active");
  }

  if (categoryTitle == "") {
    categoryTitle.classList.add("active");
  }
  else
  {
    categoryTitle.classList.remove("active");
  }

  if (categoryContent == "") {
    categoryContent.classList.add("active");
  }
  else
  {
    categoryContent.classList.remove("active");
  }
}
