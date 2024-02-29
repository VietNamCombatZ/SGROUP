var header_home_btn_01 = document.getElementById("header_home_01");
var header_about_btn_01 = document.getElementById("header_about_01");
var header_testimonial_btn_01 = document.getElementById(
  "header_testimonial_01"
);
var header_work_btn_01 = document.getElementById("header_work_01");
var header_team_btn_01 = document.getElementById("header_team_01");
var header_features_btn_01 = document.getElementById("header_features_01");
var header_pricing_btn_01 = document.getElementById("header_pricing_01");

var header_home_btn_02 = document.getElementById("header_home_02");
var header_about_btn_02 = document.getElementById("header_about_02");
var header_testimonial_btn_02 = document.getElementById(
  "header_testimonial_02"
);
var header_work_btn_02 = document.getElementById("header_work_02");
var header_team_btn_02 = document.getElementById("header_team_02");
var header_features_btn_02 = document.getElementById("header_features_02");
var header_pricing_btn_02 = document.getElementById("header_pricing_02");

var header_nav_btn = document.querySelectorAll(".header_nav_button");

const handleScroll11 = (offset) => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > offset) {
    header_nav_btn.forEach((header_nav) => {
      header_nav.classList.remove("active");
    });

    header_home_btn_01.classList.add("active");
    header_home_btn_02.classList.add("active");
  }
};
window.addEventListener("scroll", () => handleScroll11(0));

const handleScroll12 = (offset) => {
  const scrollPosition = window.pageYOffset;

  if (scrollPosition > offset) {
    header_nav_btn.forEach((header_nav) => {
      header_nav.classList.remove("active");
    });

    header_about_btn_01.classList.add("active");
    header_about_btn_02.classList.add("active");
  }
};
window.addEventListener("scroll", () => handleScroll12(600));

const handleScroll13 = (offset) => {
  const scrollPosition = window.pageYOffset;

  if (scrollPosition > offset) {
    header_nav_btn.forEach((header_nav) => {
      header_nav.classList.remove("active");
    });

    header_testimonial_btn_01.classList.add("active");
    header_testimonial_btn_02.classList.add("active");
  }
};
window.addEventListener("scroll", () => handleScroll13(2900));

const handleScroll14 = (offset) => {
  const scrollPosition = window.pageYOffset;

  if (scrollPosition > offset) {
    header_nav_btn.forEach((header_nav) => {
      header_nav.classList.remove("active");
    });

    header_work_btn_01.classList.add("active");
    header_work_btn_02.classList.add("active");
  }
};
window.addEventListener("scroll", () => handleScroll14(3700));

const handleScroll15 = (offset) => {
  const scrollPosition = window.pageYOffset;

  if (scrollPosition > offset) {
    header_nav_btn.forEach((header_nav) => {
      header_nav.classList.remove("active");
    });

    header_team_btn_01.classList.add("active");
    header_team_btn_02.classList.add("active");
  }
};
window.addEventListener("scroll", () => handleScroll15(4600));

const handleScroll16 = (offset) => {
  const scrollPosition = window.pageYOffset;

  if (scrollPosition > offset) {
    header_nav_btn.forEach((header_nav) => {
      header_nav.classList.remove("active");
    });

    header_features_btn_01.classList.add("active");
    header_features_btn_02.classList.add("active");
  }
};
window.addEventListener("scroll", () => handleScroll16(6000));

const handleScroll17 = (offset) => {
  const scrollPosition = window.pageYOffset;

  if (scrollPosition > offset) {
    header_nav_btn.forEach((header_nav) => {
      header_nav.classList.remove("active");
    });

    header_pricing_btn_01.classList.add("active");
    header_pricing_btn_02.classList.add("active");
  }
};
window.addEventListener("scroll", () => handleScroll17(6700));
