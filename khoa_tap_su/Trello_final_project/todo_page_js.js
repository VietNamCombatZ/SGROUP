// console.log(typeof Number(JSON.parse(localStorage.getItem("current_index"))));
// console.log(temp);

// function to turn on display add_task_section
function displayAddCard() {
  let addTaskSect = document.getElementById("add_task_section");
  let addTaskBtn = document.getElementById("add_task_btn");

  addTaskSect.style.display = "flex";

  // addTaskBtn.addEventListener("click", () => {
  //     addTaskSect.style.display = "flex";
  // })
}



// grab and drop function
var work_card = document.querySelectorAll(".work_list_card");
var section_container_array = document.querySelectorAll(".section_name");
var current_drag_card = null;

console.log(work_card);


work_card.forEach((card) => {
  card.addEventListener("dragstart", function(){
    current_drag_card = this;
    // console.log(current_drag_card);
  })
})

section_container_array.forEach(section => {
  section.addEventListener('dragover', function (event) {
    event.preventDefault();
  } );
  section.addEventListener("drop", function () {
    this.appendChild(current_drag_card);
  });
});

// edit function
function editFunction(name) {
  let editTaskSect = document.getElementById("edit_task_section");

  let editCardRoot = document.getElementById(name);

  editTaskSect.style.display = "flex";

  // gán giá trị của các trường trong Edit card
  // let editCardIndex = editCardRoot.getAttribute("id");
  let editCardCategory = editCardRoot.querySelector(".work_category").innerHTML;
  let editCardTitle = editCardRoot.querySelector(".work_title").innerHTML;
  let editCardContent = editCardRoot.querySelector(".work_content").innerHTML;

  let editCategoryIndex =
    document.getElementById("edit_task_index").textContent;
  let editCategorySection = document.getElementById("edit_task_category");
  let editTitleSection = document.getElementById("edit_task_title");
  let editContentSection = document.getElementById("edit_task_content");
  let editSectionSelection = document.querySelectorAll(".edit_option_btn");

  editCategorySection.value = editCardCategory;
  editTitleSection.value = editCardTitle;
  editContentSection.value = editCardContent;

  editCategoryIndex = name;
  // console.log(editCategoryIndex);

  // console.log(editCardRoot.children[0].children[1].children[0].classList[0]);

  editSectionSelection.forEach((option, index) => {
    if (
      index + 1 ==
      editCardRoot.children[0].children[1].children[0].classList[0]
    ) {
      option.checked = true;
    }
  });
  let edit_submit_btn = document.getElementById("edit_task_box_btn");
  edit_submit_btn.addEventListener("click", () =>
    checkEditCategoryValidate(editSectionSelection, name)
  );
}

// function to turn off display add_task_section
function Disappear() {
  let addTaskSect = document.getElementById("add_task_section");
  addTaskSect.style.display = "none";

  let editTaskSect = document.getElementById("edit_task_section");
  editTaskSect.style.display = "none";
}

//function to create work_todo_card

var card_array = localStorage.getItem("todo_card")
  ? JSON.parse(localStorage.getItem("todo_card"))
  : [];

// display all card when screen is loaded
window.document.onload = displayCards(card_array);

// show number of card in a section when screen is loaded
window.document.onload = showCardAmount(card_array);

function showCardAmount(card_array) {
  let section_array = document.querySelectorAll(".section_name");

  for (i = 0; i < section_array.length; i++) {
    let section_number = section_array[i]
      .querySelector(".section_title_container")
      .querySelector(".child_count");
    let section_container = section_array[i].querySelector(".card_container");

    section_number.innerHTML = section_container.childElementCount;
  }
}

//function to display all card when load screen
function displayCards(card_array) {
  let card_container = document.querySelectorAll(".card_container");
  

  for (i = 0; i < card_container.length; i++) {
    let card_cnt = "";
    card_array.forEach((card_item) => {
      if (card_item.card_type == i + 1) {
        card_cnt += createCard(
          card_item.index,
          card_item.card_type,
          card_item.category,
          card_item.title,
          card_item.content,
          card_item.date
        );
      }
    });
    card_container[i].innerHTML = card_cnt;

    //action for delete card button
    var editBtn = document.querySelectorAll(".edit_work");
    editBtn.forEach((item) => {
      item.addEventListener("click", () => {
        editFunction(item.getAttribute("name"));
      });
    });

    // action for delete card button
    var deleteBtn = document.querySelectorAll(".delete_work");
    deleteBtn.forEach((item) => {
      item.addEventListener("click", () => {
        deleteFunction(item.getAttribute("name"));
      });
    });
  }
  
}

var temp = JSON.parse(localStorage.getItem("current_index")) || [];

var index = Number(temp);

// var index = Number(localStorage.getItem("current_index"))
//   ? Number(JSON.parse(localStorage.getItem("current_index")))
//   : 0;

// let index =0;
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
    card_type: 1,
    index: index++,
  };

  // console.log(cardInfo);
  card_array.push(cardInfo);
  localStorage.setItem("todo_card", JSON.stringify(card_array));
  // console.log(card_array);

  // create item_container
  let items = "";

  card_array.forEach((card_item) => {
    items += createCard(
      card_item.index,
      card_item.card_type,
      card_item.category,
      card_item.title,
      card_item.content,
      card_item.date
    );

    todo_container.innerHTML = items;
    localStorage.setItem("current_index", JSON.stringify(index));

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
        showCardAmount(card_array);
      });
    });

    showCardAmount(card_array);
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
function createCard(index, type, category, title, content, time) {
  return `<div id="${index}" class="work_list_card  " draggable = "true">
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

function deleteFunction(name) {
  // console.log(name);
  let cardContainerID = document.getElementById(name);
  cardContainerID.remove();

  // let card_array = JSON.parse(localStorage.getItem("todo_card"));
  // console.log(card_array);
  for (i = 0; i < card_array.length; i++) {
    if (card_array[i].index == name) {
      card_array.splice(i, 1);
    }
  }

  // console.log(card_array);
  localStorage.setItem("todo_card", JSON.stringify(card_array));
  // console.log(card_array);
  showCardAmount(card_array);
  // location.reload(showCardAmount(card_array));
  // location.reload(displayCards(card_array));
}

//function to check whether input field are fullfilled

// ! bug
function checkCategoryValidate() {
  let categoryInput = document.getElementById("add_task_category");
  let categoryTitle = document.getElementById("add_task_title");
  let categoryContent = document.getElementById("add_task_content");

  let categoryCheckAll = document.querySelectorAll(".add_task_input");

  //clear trang thai active cua tat ca input
  categoryCheckAll.forEach((categoryCheckElement) => {
    categoryCheckElement.classList.remove("active");
  });

  //kiem tra Category input co dc dien vao hay ko
  if (categoryInput.value == "") {
    categoryInput.classList.add("active");
  } else {
    categoryInput.classList.remove("active");
  }

  if (categoryTitle.value == "") {
    categoryTitle.classList.add("active");
  } else {
    categoryTitle.classList.remove("active");
  }

  if (categoryContent.value == "") {
    categoryContent.classList.add("active");
  } else {
    categoryContent.classList.remove("active");
  }

  if (
    categoryInput.value != "" &&
    categoryTitle.value != "" &&
    categoryContent.value != ""
  ) {
    Disappear();
    createElement();
  }
}

let checkEditCategoryValidate = (editSectionSelection, name) => {
  // console.log(index);
  let categoryInput = document.getElementById("edit_task_category");
  let categoryTitle = document.getElementById("edit_task_title");
  let categoryContent = document.getElementById("edit_task_content");

  let categoryCheckAll = document.querySelectorAll(".edit_task_input");

  //clear trang thai active cua tat ca input
  categoryCheckAll.forEach((categoryCheckElement) => {
    categoryCheckElement.classList.remove("active");
  });

  //kiem tra Category input co dc dien vao hay ko
  if (categoryInput.value == "") {
    categoryInput.classList.add("active");
  } else {
    categoryInput.classList.remove("active");
  }

  if (categoryTitle.value == "") {
    categoryTitle.classList.add("active");
  } else {
    categoryTitle.classList.remove("active");
  }

  if (categoryContent.value == "") {
    categoryContent.classList.add("active");
  } else {
    categoryContent.classList.remove("active");
  }

  if (categoryInput != "" && categoryTitle != "" && categoryContent != "") {
    Disappear();

    // thay doi thong tin trong card_array
    card_array.forEach((item) => {
      if (item.index == name) {
        console.log(name);
        console.log(item.index);
        item.category = categoryInput.value;
        item.title = categoryTitle.value;
        item.content = categoryContent.value;

        editSectionSelection.forEach((option, index) => {
          if (option.checked) {
            item.card_type = index + 1;
          }
        });
        localStorage.setItem("todo_card", JSON.stringify(card_array));

        // console.log(item);
      }
    });
    location.reload(displayCards(card_array));
    
  }
};
