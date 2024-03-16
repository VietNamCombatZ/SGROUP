function validateInputCheck() {
  let passWarning = document.getElementById("confirm_password_requirement");
  let signUpPass = document.getElementById("signup_pass").value;
  let signUpConfirmPass = document.getElementById("signup_confirm_pass").value;

  let signUpEmail = document.getElementById("signup_email").value;
  let emailWarning = document.getElementById("email_requirement");
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // nếu confirm pass khác pass hoặc pass rỗng => in ra dòng báo lỗi
  if ((signUpPass != signUpConfirmPass) || (signUpPass == "")) {
    passWarning.classList.add("active");
  } else {
    passWarning.classList.remove("active");
  }

  // nếu email không đúng theo form => in ra dòng báo lỗi

  if (!regex.test(signUpEmail)) {
    emailWarning.classList.add("active");
  } else {
    emailWarning.classList.remove("active");
  }

  // nếu độ dài pass không hợp lệ => in ra báo lỗi
  if (((signUpPass).length < 8) ||((signUpPass).length > 32)) {
    passWarning.classList.add("active");
  } else {
    passWarning.classList.remove("active");
  }
}

function getInfo() {
  let signUpEmail = document.getElementById("signup_email").value;
  let signUpPass = document.getElementById("signup_pass").value;

  localStorage.setItem("signUpEmail", signUpEmail);
  localStorage.setItem("signUpPass", signUpPass);

  let Email = localStorage.getItem("signUpEmail");
  let Pass = localStorage.getItem("signUpPass");
}


// ẩn hiện input pass khi click vào con mắt
function ActiveBtn() {
  let passShow = document.querySelectorAll(".sign_up_input.show");
  let passHidden = document.querySelectorAll(".sign_up_input.hidden");

  passShow.forEach(passShow1 => {
    if (passShow1.classList.contains("active")) {
      passShow1.classList.remove("active");
      passHidden.forEach(
        passHidden1 => {
          passHidden1.classList.add("active");
        }
      )
    } else {
       passShow1.classList.add("active");
      passHidden.forEach((passHidden1) => {
        passHidden1.classList.add("active");
      });
    }
    
  });
  
}


//chuyển kí tự gõ được thành dấu chấm
let inputField = document.getElementById("signup_pass");
let inputFieldHidden = document.getElementById("signup_pass_hidden").value;

inputField.addEventListener("input", function (event) {
  const currentValue = inputField.value;
  const newValue = currentValue.replace(/\S/g, "."); // Replace commas with dots

  // Update the input field value with the modified value
  inputFieldHidden.value = newValue;
});

