const discover_box = document.getElementById("discover_image");
const gallery_box = document.getElementById("fortfolio");
const nav_bar = document.getElementById("nav");

console.log(discover_box);
const handleScroll1 = (offset) => {
  const scrollPosition = window.pageYOffset;
  console.log("discover_image", scrollPosition);
  if (scrollPosition > offset) {
    discover_box.classList.add("show");
  }
  // else {
  //   discover_box.classList.remove("show");
  // }
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
  }
};

window.addEventListener("scroll", () => handleScroll1(1400));
window.addEventListener("scroll", () => handleScroll2(3600));
window.addEventListener("scroll", () => handleScroll3(800));










// window.addEventListener("scroll", () => {
//   const innnerHeightofWindow = window.innerHeight;

//   const boxTop = discover_box.getBoundingClientRect().top;

//   if (boxTop < innnerHeightofWindow)
//   {
//     discover_box.classList.add("show");
//   }
// });
