function checkInfoAvailable() {
  let storageEmail = localStorage.getItem("signUpEmail");
  let storagePass = localStorage.getItem("signUpPass");

  let loginEmail = document.getElementById("login_email");
  let loginPass = document.getElementById("login_pass");

  let emailWarning = document.getElementById("email_warning");
  let passWarning = document.getElementById("password_warning");

  if (loginEmail.value == "") {
    emailWarning.style.display = "block";
  } else if (loginPass.value == "") {
    emailWarning.style.display = "none";
    passWarning.style.display = "block";
  } else {
    passWarning.style.display = "none";
  }
}


