var discover_box = document.getElementById("discover_image");
var gallery_box = document.getElementById("fortfolio");
var nav_bar = document.getElementById("nav");

var char_box_01 = document.querySelectorAll(".characteristic_box");

console.log(discover_box);
const handleScroll1 = (offset) => {
  const scrollPosition = window.pageYOffset;
  console.log("discover_image", scrollPosition);
  if (scrollPosition > offset) {
    discover_box.classList.add("show");
  }
};

const handleScroll2 = (offset) => {
  const scrollPosition = window.pageYOffset;
  console.log("fortfolio", scrollPosition);
  if (scrollPosition > offset) {
    gallery_box.classList.add("BlurIn");
  }
};

const handleScroll3 = (offset) => {
  const scrollPosition = window.pageYOffset;
  console.log("nav", scrollPosition);
  if (scrollPosition > offset) {
    nav_bar.classList.add("Fixed");
  } else {
    nav_bar.classList.remove("Fixed");
  }
};

const handleScroll4 = (offset) => {
  const scrollPosition = window.pageYOffset;

  if (scrollPosition > offset) {
    char_box_01.querySelectorAll.classList.add("FadeIn_2");
  }
};

window.addEventListener("scroll", () => handleScroll1(1300));
window.addEventListener("scroll", () => handleScroll2(3400));
window.addEventListener("scroll", () => handleScroll3(600));
window.addEventListener("scroll", () => handleScroll3(5400));

// window.addEventListener("scroll", () => {
//   const innnerHeightofWindow = window.innerHeight;

//   const boxTop = discover_box.getBoundingClientRect().top;

//   if (boxTop < innnerHeightofWindow)
//   {
//     discover_box.classList.add("show");
//   }
// });
