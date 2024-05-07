var advan_btn_01 = document.getElementById("advantage_option_1");
var advan_btn_02 = document.getElementById("advantage_option_2");
var advan_btn_03 = document.getElementById("advantage_option_3");

var advan_img_01 = document.getElementById("advantage_image_01");
var advan_img_02 = document.getElementById("advantage_image_02");
var advan_img_03 = document.getElementById("advantage_image_03");

var AdvanClick_1 = () => {
  if (
    (advan_btn_02.classList.contains("active") ||
      advan_btn_03.classList.contains("active")) 
  ) {
    advan_btn_02.classList.remove("active");
    advan_btn_03.classList.remove("active");

    advan_img_02.classList.remove("appear");
    advan_img_03.classList.remove("appear");

    advan_btn_01.classList.add("active");
    advan_img_01.classList.add("appear");

  }
};

var AdvanClick_2= () => {
  if (
    advan_btn_01.classList.contains("active") ||
    advan_btn_03.classList.contains("active")
  ) {
    advan_btn_01.classList.remove("active");
    advan_btn_03.classList.remove("active");

    advan_img_01.classList.remove("appear");
    advan_img_03.classList.remove("appear");

    advan_btn_02.classList.add("active");
    advan_img_02.classList.add("appear");
  }
};

var AdvanClick_3 = () => {
  if (
    advan_btn_01.classList.contains("active") ||
    advan_btn_02.classList.contains("active")
  ) {
    advan_btn_01.classList.remove("active");
    advan_btn_02.classList.remove("active");

    advan_img_01.classList.remove("appear");
    advan_img_02.classList.remove("appear");

    advan_btn_03.classList.add("active");
    advan_img_03.classList.add("appear");
  }
};