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
