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

const card_array = localStorage.getItem("card_items") ? JSON.parse(localStorage.getItem("card_items")) : []

console.log(
  card_array
);
function createElement() {
  let categoryInput = document.getElementById("add_task_category").value;
  let categoryTitle = document.getElementById("add_task_title").value;
  let categoryContent = document.getElementById("add_task_content").value;
  let cardInfo = {
    "category": categoryInput,
    "title": categoryTitle,
    "content": categoryContent,
    "card_id": '1'
  };

  console.log(cardInfo);
  card_array.push(cardInfo);
  console.log(card_array);

  // var todo_Array = localStorage.getItem("Todo_array");
  

  // if(todo_Array != "")
  // {
  //   JSON.parse(localStorage.getItem("Todo_array"))
  // }
  // else
  // {
  //   todo_Array = [];
  // }

  // todo_Array.push(cardInfo);
  // console.log(todo_Array);
  
  
  

}

// display card

let todo_container = document.getElementById("todo_container");
card_array.forEach((card_item) => {
  todo_container.innerHTML += displayCards(card_item);
});

function displayCards (card_item) {
  return `<div class="work_list_card">
                  <div class="work_category_container">
                    <div class="work_category">${card_item.category}</div>
                    <div class="work_icon">
                      <i class="edit_work fa-solid fa-pen"></i>
                      <i class="delete_work fa-solid fa-trash-can"></i>
                    </div>
                  </div>
                  <div class="work_element">
                    <div class="work_title">${card_item.title}</div>
                    <div class="work_title_underline"></div>
                    <div class="work_content">${card_item.content}</div>
                    <div class="work_time">
                      <i class="work_time_icon fa-regular fa-clock"></i>
                      <span class="work_time_content"></span>
                    </div>
                  </div>
                </div>`;
};

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

