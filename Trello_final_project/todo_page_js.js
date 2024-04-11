// function to turn on display add_task_section
function displayAddCard() {
  let addTaskSect = document.getElementById("add_task_section");
  let addTaskBtn = document.getElementById("add_task_btn");

  addTaskSect.style.display = "flex";

  // addTaskBtn.addEventListener("click", () => {
  //     addTaskSect.style.display = "flex";
  // })
}

function editFunction(name) {
  let editTaskSect = document.getElementById("edit_task_section");
  let editTaskBtn = document.getElementById("edit_task_btn");

  editTaskSect.style.display = "flex";

  
  


}



// function to turn off display add_task_section
function Disappear() {
  let addTaskSect = document.getElementById("add_task_section");
  addTaskSect.style.display = "none";

  let editTaskSect = document.getElementById("edit_task_section");
  editTaskSect.style.display = "none";
}




//function to create work_todo_card

const card_array = localStorage.getItem("card_items") ? JSON.parse(localStorage.getItem("card_items")) : []

// console.log(
//   card_array
// );
let index = 0;
function createElement() {
  let categoryInput = document.getElementById("add_task_category").value;
  let categoryTitle = document.getElementById("add_task_title").value;
  let categoryContent = document.getElementById("add_task_content").value;
  
  let todo_container = document.getElementById("todo_container");

  

  let date = new Date();
  let dateArray = date.toString().split(" ");
  let displayDate = dateArray[1] + " " + dateArray[2] + "," + dateArray[3];
  
  // console.log(displayDate);

  let cardInfo = {
    category: categoryInput,
    title: categoryTitle,
    content: categoryContent,
    date: displayDate,
    card_type: "1",
    index: index++,
  };

  // console.log(cardInfo);
  card_array.push(cardInfo);
  localStorage.setItem("todo_card", JSON.stringify(card_array));
  // console.log(card_array);

  // create item_container
   let items = "";
   
  card_array.forEach((card_item) => {
    
    items +=  createCard(card_item.index,card_item.card_type,card_item.category, card_item.title, card_item.content, card_item.date);
    todo_container.innerHTML = items;


    // action for delete card button
    var deleteBtn = document.querySelectorAll(".delete_work");
    deleteBtn.forEach((item) => {
      item.addEventListener("click", () => {
        deleteFunction(item.getAttribute("name"));
      });
    });

    // action for edit card button
    var editBtn = document.querySelectorAll(".edit_work");
    editBtn.forEach((item) => {
      item.addEventListener("click", () => {
        editFunction(item.getAttribute("name"));
      });
    });
    
  });

  // function displayCards(card_item) {
  //   return `<div class="work_list_card">
  //                 <div class="work_category_container">
  //                   <div class="work_category">${card_item.category}</div>
  //                   <div class="work_icon">
  //                     <i class="edit_work fa-solid fa-pen"></i>
  //                     <i class="delete_work fa-solid fa-trash-can"></i>
  //                   </div>
  //                 </div>
  //                 <div class="work_element">
  //                   <div class="work_title">${card_item.title}</div>
  //                   <div class="work_title_underline"></div>
  //                   <div class="work_content">${card_item.content}</div>
  //                   <div class="work_time">
  //                     <i class="work_time_icon fa-regular fa-clock"></i>
  //                     <span class="work_time_content"></span>
  //                   </div>
  //                 </div>
  //               </div>`;
  // }

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

// create innerHTML of todo_container
function createCard(index,type, category, title, content, time) {
   return `<div id="${index}" class="work_list_card ">
                  <div class="work_category_container ">
                    <div class="work_category">${category}</div>
                    <div class="work_icon">
                      <i  name="${index}"  class="${type} edit_work fa-solid fa-pen"></i>
                      <i  name="${index}" class="  delete_work fa-solid fa-trash-can"></i>
                    </div>
                  </div>
                  <div class="work_element">
                    <div class="work_title">${title}</div>
                    <div class="work_title_underline"></div>
                    <div class="work_content">${content}</div>
                    <div class="work_time">
                      <i class="work_time_icon fa-regular fa-clock"></i>
                      <span class="work_time_content">${time}</span>
                    </div>
                  </div>
                </div>`;

}

// display card

// let todo_container = document.getElementById("todo_container");
// card_array.forEach((card_item) => {
//   todo_container.innerHTML += displayCards(card_item);
// });

// function displayCards (card_item) {
//   return `<div class="work_list_card">
//                   <div class="work_category_container">
//                     <div class="work_category">${card_item.category}</div>
//                     <div class="work_icon">
//                       <i class="edit_work fa-solid fa-pen"></i>
//                       <i class="delete_work fa-solid fa-trash-can"></i>
//                     </div>
//                   </div>
//                   <div class="work_element">
//                     <div class="work_title">${card_item.title}</div>
//                     <div class="work_title_underline"></div>
//                     <div class="work_content">${card_item.content}</div>
//                     <div class="work_time">
//                       <i class="work_time_icon fa-regular fa-clock"></i>
//                       <span class="work_time_content"></span>
//                     </div>
//                   </div>
//                 </div>`;
// };



// delete current card
// function deleteCard(){
//   let card_array = JSON.parse(localStorage.getItem("todo_card"));
//   let card_index_array = document.getElementsByClassName

//   card_array.forEach((card_element) => {
  
    
//   });
  

// }

// var deleteBtn = document.querySelectorAll(".fa-trash-can");
// deleteBtn.forEach((item) => {
//   addEventListener("click", console.log(item.name)  );
// });



function deleteFunction(name){
  // console.log(name);
  let cardContainerID = document.getElementById(name);
  cardContainerID.style.display="none";

  let card_array = JSON.parse(localStorage.getItem("todo_card"));
  for(i=0; i< card_array.length; i++)
  {
    if(card_array[i].index == name)
    {
      card_array.splice(i,1);
    }
  }
  localStorage.setItem("todo_card", JSON.stringify(card_array));
  
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
