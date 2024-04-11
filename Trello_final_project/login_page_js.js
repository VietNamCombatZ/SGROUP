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
    checkAPI();
  }
}


//kiem tra thong tin input co khop thong tin trong API khong
async function checkAPI() {
  const url = "https://recruitment-api.pyt1.stg.jmr.pl/login";
  let loginEmail = document.getElementById("login_email").value;
  let loginPass = document.getElementById("login_pass").value;

  let emailWarning = document.getElementById("email_warning");
  let passWarning = document.getElementById("password_warning");

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login: loginEmail,
      password: loginPass,
    }),
  });
  const data = await res.json();
  const status = data.status;

  // console.log(status);
  if(status == 'error'){
    emailWarning.style.display = "block";
    passWarning.style.display = "block";

    console.error('err');

  }
  else
  {
    window.location.href =
      "http://127.0.0.1:5500/Trello_final_project/final_project.html";
  }
}
