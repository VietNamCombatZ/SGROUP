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
    "https://vietnamcombatz.github.io/SGROUP/buoi_12/bai_tap/sign_up_page/sign_up_page.html";
}

function checkInfoAvailable() {
  let storageEmail = localStorage.getItem("signUpEmail");
  let storagePass = localStorage.getItem("signUpPass");

  let loginEmail = document.getElementById("login_email");
  let loginPass = document.getElementById("login_pass");

  let emailWarning = document.getElementById("email_requirement");
  let passWarning = document.getElementById("login_password_requirement");

  if (loginEmail.value != storageEmail) {
    emailWarning.style.display = "block";

  }else
  if  (loginPass.value != storagePass )
  {
    passWarning.style.display = "block";
  }
}
