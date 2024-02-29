document.addEventListener("DOMContentLoaded", function () {
  const register_form_wrapper = document.querySelector(".form_wrapper");
   
  register_form_wrapper.classList.add("bounce_in");

  var price_box_white = document.querySelector(".price_box_white");
  var price_box_red = document.querySelector(".price_box_red");

  var contact_form = document.querySelector(".contact_form_wrapper")
  

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll1() {
    if (isInViewport(price_box_red) && isInViewport(price_box_red)) {
      price_box_red.classList.add("bounce_in");
      price_box_white.classList.add("bounce_in");
      window.removeEventListener("scroll", handleScroll1);
    }
  }

   function handleScroll2() {
     if (isInViewport(contact_form) ) {
       contact_form.classList.add("bounce_in");
       
       window.removeEventListener("scroll", handleScroll2);
     }
   }



  window.addEventListener("scroll", handleScroll1);
  window.addEventListener("scroll", handleScroll2);
});


