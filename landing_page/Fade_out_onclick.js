// register_box
var register_submit_btn = document.querySelector(".submit_input");
var register_form = document.querySelector(".register_form");
var register_success = document.querySelector(".register_success_box");


var handleClick_1 = () => {
  register_form.classList.add("Fadeout");
  setTimeout(() => {
    register_form.style.display = "none";
  }, 1);
  register_success.classList.add("FadeIn");
};

// contact_box
var contact_submit_btn = document.querySelector(".contact_submit_button");
var contact_form = document.querySelector(".contact_form");
var contact_success = document.querySelector(".contact_success_box");

var handleClick_2 = () => {
  contact_form.classList.add("Fadeout");
  setTimeout(() => {
    contact_form.style.display = "none";
  }, 1);
  contact_success.classList.add("FadeIn");
};

// header_bar
var header_btn = document.querySelector(".header_bar_button");
var header_collapse = document.querySelector(".header_button_container_collapsed");
var handleClick_3 = () => {
  var isCollapse = header_collapse.classList.contains("collapse")
  
  if( !isCollapse)
  {
    header_collapse.classList.add("collapse")
  }
  else
  {
    header_collapse.classList.remove("collapse");
  }


  contact_form.classList.add("Fadeout");
  
  contact_success.classList.add("FadeIn");
};


//review_section
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".card_header");

    

  items.forEach((item) => {
    item.addEventListener("click", function () {
      const isActive = this.classList.contains("active");
      items.forEach((item) => {
        item.classList.remove("active");
        item.previousElementSibling.style.display = "none";
      });
      if (!isActive) {
        this.classList.add("active");
        this.previousElementSibling.style.display = "block";
      }
    });
  });
});