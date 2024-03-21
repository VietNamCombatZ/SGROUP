function gotoPage() {
  window.location.href =
    "https://vietnamcombatz.github.io/SGROUP/buoi_12/bai_tap/login_page/login_page";
}



function validateInputCheck() {
  let passWarning = document.getElementById("password_requirement");
   let confirmPassWarning = document.getElementById("confirm_password_requirement");

  let signUpPass = document.getElementById("signup_pass").value;
  let signUpConfirmPass = document.getElementById("signup_confirm_pass").value;

  let signUpEmail = document.getElementById("signup_email").value;
  let emailWarning = document.getElementById("email_requirement");
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var uppercaseRegex = /[A-Z]/;
  var numberRegex = /[0-9]/;

  // nếu confirm pass khác pass hoặc pass rỗng => in ra dòng báo lỗi
  if ((signUpPass != signUpConfirmPass) || (signUpPass == "")) {
    passWarning.classList.add("active");
  } else {
    passWarning.classList.remove("active");

    // nếu email không đúng theo form => in ra dòng báo lỗi

    if (
      !regex.test(signUpEmail)
      
    ) {
      emailWarning.classList.add("active");
    } else {
      emailWarning.classList.remove("active");

      // nếu độ dài pass không hợp lệ => in ra báo lỗi
      if ((signUpPass.length < 8) || (signUpPass.length > 32) || (!uppercaseRegex.test(signUpPass)) ||
      (!numberRegex.test(signUpPass))) {
        passWarning.classList.add("active");
      } else {
        passWarning.classList.remove("active");


        gotoPage();
        getInfo();
      }
    }
  }

  

  
}


// lấy info đưa lên local Storage (chưa code phần kiểm tra hợp lệ )
function getInfo() {
  let signUpEmail = document.getElementById("signup_email").value;
  let signUpPass = document.getElementById("signup_pass").value;

  localStorage.setItem("signUpEmail", signUpEmail);
  localStorage.setItem("signUpPass", signUpPass);

  // let Email = localStorage.getItem("signUpEmail");
  // let Pass = localStorage.getItem("signUpPass");
}


// đổi type của pass input: text <--> password
function changeType() {
  let signUpPass = document.getElementById("signup_pass");
  let signUpConfirmPass = document.getElementById("signup_confirm_pass");
  if (signUpPass.type == "text") {
    signUpConfirmPass.type = "password";
    signUpPass.type = "password";
  } else {
    signUpPass.type = "text";
    signUpConfirmPass.type = "text";
  }
}


  let signUpPass = document.getElementById("signup_pass");
  let signUpConfirmPass = document.getElementById("signup_confirm_pass");
signUpPass.addEventListener('input', function() {
    signUpConfirmPass.value = signUpPass.value;
  });

  signUpConfirmPass.addEventListener("input", function () {
    signUpPass.value = signUpConfirmPass.value;
  });

  

// ẩn hiện input pass khi click vào con mắt
// function ActiveBtn() {
//   let passShow = document.querySelectorAll(".sign_up_input.show");
//   let passHidden = document.querySelectorAll(".sign_up_input.hidden");

//   passShow.forEach((passShow1) => {
//     if (passShow1.classList.contains("active")) {
//       passShow1.classList.remove("active");
//       passHidden.forEach((passHidden1) => {
//         passHidden1.classList.add("active");
//       });
//     } else {
//       passShow1.classList.add("active");
//       passHidden.forEach((passHidden1) => {
//         passHidden1.classList.add("active");
//       });
//     }
//   });
// }

// //chuyển kí tự gõ được thành dấu chấm
// const inputField = document.getElementById("signup_pass");
// const inputFieldHidden = document.getElementById("signup_pass_hidden");

// inputField.addEventListener("input", function (event) {
//   const currentValue = inputField.value;
//   const newValue = currentValue.replace(/\S/g, "."); // Replace anything with dots

//   // Update the input field value with the modified value
//   inputFieldHidden = newValue;
// });

// //chuyển kí tự  gõ được thành dấu chấm v2

// // Get references to the input fields
//   const input1 = document.getElementById('signup_pass');
//   const input2 = document.getElementById('signup_pass_hidden');

//   // Function to convert text to dots
//   function convertToDots(text) {
//     return text.replace(/./g, '.');
//   }

//   // Add event listener to input1
//   input1.addEventListener('input', function() {
//     input2.value = convertToDots(this.value);
//   });

//   // Add event listener to input2
//   input2.addEventListener('input', function() {
//     input1.value = this.value;
//     input2.value = convertToDots(this.value);
//   });
