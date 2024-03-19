function changeType() {
  let loginPass = document.getElementById("login_pass");

  if (loginPass.type == "text") {
    loginPass.type = "password";
  } else {
    loginPass.type = "text";
  }
}

function gotoPage2() {
  window.location.href =
    "http://127.0.0.1:5500/buoi_12/bai_tap/sign_up_page/sign_up_page.html";
}
