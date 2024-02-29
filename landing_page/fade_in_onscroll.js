var char_box_01 = document.getElementById("char_box_01");
var char_box_02 = document.getElementById("char_box_02");
var char_box_03 = document.getElementById("char_box_03");
var char_box_04 = document.getElementById("char_box_04");
var char_box_05 = document.getElementById("char_box_05");
var char_box_06 = document.getElementById("char_box_06");


const handleScroll4 = (offset) => {
  const scrollPosition = window.scrollY;
  
  if (scrollPosition > offset) {
    char_box_01.classList.add("Fade_In_Query");
    char_box_02.classList.add("Fade_In_Query");
    char_box_03.classList.add("Fade_In_Query");



  } 
};
window.addEventListener("scroll", () => handleScroll4(5700));

const handleScroll5 = (offset) => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > offset) {
    char_box_04.classList.add("Fade_In_Query");
    char_box_05.classList.add("Fade_In_Query");
    char_box_06.classList.add("Fade_In_Query");
  }
};
window.addEventListener("scroll", () => handleScroll5(5900));