// bai 1

let submitBtn1 = document.getElementById("submit_1");

submitBtn1.addEventListener("click", () => {
  checkIncreaseArray();
});

function checkIncreaseArray() {
  let input1 = document.getElementById("input_1").value;
  let result1 = document.getElementById("result_1");
  let array = [];
  let result_array = [];

  array = input1.split(",");

  result1.innerHTML ="";
  console.log(array);
  let check = true;
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) {
      console.log(i);
      check = false;
      break;
    }
  }

  result1.innerHTML = check;
  // console.log(result_array);
  // console.log(typeof(result_array));

  //     console.log(array);
  //     console.log(typeof(array));
}

// bai 2

let submitBtn2 = document.getElementById("submit_2");
var test = [];
submitBtn2.addEventListener("click", () => {
  checkMaxFrequency();
});

function checkMaxFrequency() {
  let input2 = document.getElementById("input_2").value;
  let result2 = document.getElementById("result_2");
  let array = [];
  let checkarray = [];
  let max = -1;
  let maxfrequency = 0;

  array = input2.split(",");

  for (let i = 0; i < array.length; i++) {
    if (checkarray[array[i]] == undefined) {
      checkarray[array[i]] = 1;
    } else {
      checkarray[array[i]] += 1;
    }
  }

  for (let i = 0; i < checkarray.length; i++) {
    if (checkarray[i] >= max) {
      max = checkarray[i];
      maxfrequency = i;
    }
  }
  if (max <= 1){
    result2.innerHTML = "ko co so xuat hien nhieu nhat";
  }else{
    result2.innerHTML = maxfrequency;

  }

  
  
}

// bai 3

let submitBtn3 = document.getElementById("submit_3");
var test = [];
submitBtn3.addEventListener("click", () => {
  deleteRepeatElement();
});

function deleteRepeatElement() {
  let input3 = document.getElementById("input_3").value;
  let result3 = document.getElementById("result_3");

  let array = [];
  let result_array = [];
  array = input3.split(",");

  for (let i = 0; i < array.length; i++) {
    for (let k = i + 1; k < array.length; k++) {
      if (array[k] == array[i]) {
        delete array[k];
      }
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] != undefined) {
      result_array.push(array[i]);
    }
  }

  result3.innerHTML = `[${result_array}]`;
}

// bai 4

let submitBtn4 = document.getElementById("submit_4");

submitBtn4.addEventListener("click", () => {
  checkLongestString();
});

function checkLongestString() {
  let input4 = document.getElementById("input_4").value;
  let result4 = document.getElementById("result_4");

  let array = [];
  let result_array = [];
  let max = "";
  array = input4.split(" ");

  for (let i = 0; i < array.length; i++) {
    if (max <= array[i]) {
      max = array[i];
    }
  }
  result4.innerHTML = max;
}

// bai 5

let submitBtn5 = document.getElementById("submit_5");

submitBtn5.addEventListener("click", () => {
  checkSecondLongestString();
});

function checkSecondLongestString() {
  let input5 = document.getElementById("input_5").value;
  let result5 = document.getElementById("result_5");

  let array = [];
  let result_array = [];
  let max = "";
  let max_2 = "";
  array = input5.split(" ");

  for (let i = 0; i < array.length; i++) {
    if (max.length <= array[i].length) {
      max = array[i];
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (max_2.length <= array[i].length && array[i] != max) {
      max_2 = array[i];
    }
  }
  result5.innerHTML = max_2;
}

// bai 6

let submitBtn6 = document.getElementById("submit_6");

submitBtn6.addEventListener("click", () => {
  sumAllEvenNumber();
});

function sumAllEvenNumber() {
  let input6 = document.getElementById("input_6").value;
  let result6 = document.getElementById("result_6");

  let array = [];
  let sum;

  array = input6.split(",");

  sum = array.reduce(function (value, number) {
    number = Number(number);
    if (number % 2 == 0) {
      return value + number;
    } else {
      return value;
    }
  }, 0);

  result6.innerHTML = sum;
}

// Bai 7

let submitBtn7 = document.getElementById("submit_7");

submitBtn7.addEventListener("click", () => {
  convertToFollowingChar();
});
function convertToFollowingChar() {
  let input7 = document.getElementById("input_7").value;
  let result7 = document.getElementById("result_7");
  let check = /[^a-z]/g;
  let charCode;

  let check_array = input7.match(check);
  let result_string = "";

  if (check_array != null) {
    result7.innerHTML = "chuoi khong hop le";
  } else {
    for (let i = 0; i < input7.length; i++) {
      charCode = input7.charCodeAt(i);

      if (charCode < 122) {
        ++charCode;
      }

      // input7[i] =String.fromCharCode(charCode);
      result_string += String.fromCharCode(charCode);
    }
    result7.innerHTML = result_string;
  }
}

// Bai 8

let submitBtn8 = document.getElementById("submit_8");

submitBtn8.addEventListener("click", () => {
  printThreeMiddleChar();
});

function printThreeMiddleChar() {
  let input8 = document.getElementById("input_8").value;
  let result8 = document.getElementById("result_8");

  if (input8.length < 3 || input8.length % 2 == 0) {
    result8.innerHTML = "Chuoi ko hop le";
  } else if (input8.length == 3) {
    result8.innerHTML = input8;
  } else {
    result8.innerHTML = "";
    for (
      let i = (input8.length - 3) / 2;
      i <= (input8.length - 3) / 2 + 2;
      i++
    ) {
      result8.innerHTML += input8[i];
    }
  }
}

// Bai 9

let submitBtn9 = document.getElementById("submit_9");

submitBtn9.addEventListener("click", () => {
  checkRepeatKey();
});

function checkRepeatKey() {
  let input9 = document.getElementById("input_9").value;
  let result9 = document.getElementById("result_9");
}

//Bai 11

let submitBtn11 = document.getElementById("submit_11");

submitBtn11.addEventListener("click", () => {
  createReapeatArray();
});

function createReapeatArray() {
  let input11_1 = document.getElementById("input_11_1").value;
  let input11_2 = document.getElementById("input_11_2").value;

  let result11 = document.getElementById("result_11");

  let array_11_1 = [];
  let array_11_2 = [];

  let merge_array = [];
  let freq_array = [];

  let return_array = [];

  array_11_1 = input11_1.split(",");
  array_11_2 = input11_2.split(",");

  for (let i = 0; i < array_11_1.length; i++) {
    array_11_1[i] = Number(array_11_1[i]);
  }

  for (let i = 0; i < array_11_2.length; i++) {
    array_11_2[i] = Number(array_11_2[i]);
  }

  merge_array = array_11_1.concat(array_11_2);
  merge_array.sort();

  for (let i = 0; i < merge_array.length; i++) {
    if (freq_array[merge_array[i]] == undefined) {
      freq_array[merge_array[i]] = 1;
    } else {
      freq_array[merge_array[i]] += 1;
    }
  }

  for (let i = 0; i < freq_array.length; i++) {
    if (freq_array[i] != undefined && freq_array[i] > 1) {
      return_array.push(Number(i));
    }
  }

  result11.innerHTML = `[${return_array}]`;
}

//Bai 12

let submitBtn12 = document.getElementById("submit_12");

submitBtn12.addEventListener("click", () => {
  createNewArray();
});

function createNewArray() {
  let input12_1 = document.getElementById("input_12_1").value;
  let input12_2 = document.getElementById("input_12_2").value;

  let result12 = document.getElementById("result_12");

  let array_12_1 = [];
  let array_12_2 = [];

  let merge_array = [];
  let freq_array = [];

  let return_array = [];

  console.log(input12_1);

  array_12_1 = input12_1.split(",");
  array_12_2 = input12_2.split(",");

  for (let i = 0; i < array_12_1.length; i++) {
    array_12_1[i] = Number(array_12_1[i]);
  }

  for (let i = 0; i < array_12_2.length; i++) {
    array_12_2[i] = Number(array_12_2[i]);
  }

  merge_array = array_12_1.concat(array_12_2);
  merge_array.sort();
  console.log(merge_array);

  for (let i = 0; i < merge_array.length; i++) {
    if (freq_array[merge_array[i]] == undefined) {
      freq_array[merge_array[i]] = 1;
    } else {
      freq_array[merge_array[i]] += 1;
    }
  }

  for (let i = 0; i < freq_array.length; i++) {
    if (freq_array[i] != undefined) {
      return_array.push(Number(i));
    }
  }

  result12.innerHTML = `[${return_array}]`;
}

//Bai 13

let submitBtn13 = document.getElementById("submit_13");

submitBtn13.addEventListener("click", () => {
  createNonReapeatArray();
});

function createNonReapeatArray() {
  let input13_1 = document.getElementById("input_13_1").value;
  let input13_2 = document.getElementById("input_13_2").value;

  let result13 = document.getElementById("result_13");

  let array_13_1 = [];
  let array_13_2 = [];

  let merge_array = [];
  let freq_array = [];

  let return_array = [];

  array_13_1 = input13_1.split(",");
  array_13_2 = input13_2.split(",");

  for (let i = 0; i < array_13_1.length; i++) {
    array_13_1[i] = Number(array_13_1[i]);
  }

  for (let i = 0; i < array_13_2.length; i++) {
    array_13_2[i] = Number(array_13_2[i]);
  }

  merge_array = array_13_1.concat(array_13_2);
  merge_array.sort();

  for (let i = 0; i < merge_array.length; i++) {
    if (freq_array[merge_array[i]] == undefined) {
      freq_array[merge_array[i]] = 1;
    } else {
      freq_array[merge_array[i]] += 1;
    }
  }

  for (let i = 0; i < freq_array.length; i++) {
    if (freq_array[i] == 1) {
      return_array.push(Number(i));
    }
  }

  result13.innerHTML = `[${return_array}]`;
}

// Bai 16

let submitBtn16 = document.getElementById("submit_16");

submitBtn16.addEventListener("click", () => {
  powerNonEvenNumberArray();
});

function powerNonEvenNumberArray() {
  let input16 = document.getElementById("input_16").value;

  let result16 = document.getElementById("result_16");

  let array_16 = [];

  let merge_array = [];
  let freq_array = [];

  let return_array = [];

  array_16 = input16.split(",");

  for (let i = 0; i < array_16.length; i++) {
    array_16[i] = Number(array_16[i]);
    if (array_16[i] % 2 == 1) {
      return_array.push(Math.pow(array_16[i], 2));
    }
  }

  result16.innerHTML = `[${return_array}]`;
}

// Bai 17

let submitBtn17 = document.getElementById("submit_17");

submitBtn17.addEventListener("click", () => {
  nameWithStartChar();
});

function nameWithStartChar() {
  let input17_1 = document.getElementById("input_17_1").value;
  let input17_2 = document.getElementById("input_17_2").value;

  let result17 = document.getElementById("result_17");

  let array_17 = [];
  return_array = [];

  array_17 = input17_1.split(",");
  console.log(array_17);
  console.log(input17_2);

  for (let i = 0; i < array_17.length; i++) {
    if (array_17[i][0] == input17_2) {
      return_array.push(array_17[i]);
    }
  }
  result17.innerHTML = `[${return_array}]`;
}

// Bai 19

let submitBtn19 = document.getElementById("submit_19");

submitBtn19.addEventListener("click", () => {
  flatNestedArray();
});

function flatNestedArray() {
  let input19 = document.getElementById("input_19").value;

  let result19 = document.getElementById("result_19");

  let array_19 = [];

  let merge_array = [];
  let freq_array = [];

  let return_array = [];
  try{
    array_19 = JSON.parse("["+ input19 + "]");

  }
  catch(e){
    result19.innerHTML =
      "Chuỗi không hợp lệ. Chuỗi hợp lệ ví dụ:[3, 4], [5, 6], [12, 16] ";
      return;
  }
  return_array = array_19.flat();

  result19.innerHTML = `[${return_array}]`;
}




// bai 21

let submitBtn21 = document.getElementById("submit_21");

submitBtn21.addEventListener("click", () => {
  arithmeticMeanAllNumber();
});

function arithmeticMeanAllNumber() {
  let input21 = document.getElementById("input_21").value;
  let result21 = document.getElementById("result_21");

  let array = [];
  let sum;

  array = input21.split(",");
  let check = 0;

  sum = array.reduce(function (value, number) {
    number = Number(number);
    check++;

    return value + number;
  }, 0);

  result21.innerHTML = sum / check;
}

// Bai 23

let submitBtn22 = document.getElementById("submit_22");

submitBtn22.addEventListener("click", () => {
  birthdayCal();
});

function birthdayCal() {
  let input22 = document.getElementById("input_22").value;

  let result22 = document.getElementById("result_22");

  let date_1 = new Date(input22);
  let date_2 = new Date();
  let day = date_2.getDate();
  let month = date_2.getMonth() + 1;
  let year = date_2.getFullYear();

  let year_age;
  let month_age;
  let day_age;
  

  let today = new Date(`${year + "-" + month + "-" + day}`);

  console.log(date_1.getFullYear());
  console.log(date_1.getMonth());
  console.log(date_1.getDate());

  console.log(today.getFullYear());
  console.log(typeof(today.getMonth()));
  console.log(today.getDate());

  console.log((today - date_1)/(1000*60*60*24));
 
  if(today - date_1 < 0){
    result22.innerHTML = "Nhập sai tuổi rồi, ngmu ngmu";
  }else{
     year_age = today.getFullYear() - date_1.getFullYear();
    //  result22.innerHTML= year_age;
    

    if(today.getMonth() < date_1.getMonth()){
      --year_age;
      month_age = 12 - (date_1.getMonth()+1) + (today.getMonth()+1);
      

      if (today.getDate() < date_1.getDate()) {
        --month_age;
        day_age = 31 - date_1.getDate() + today.getDate();
      }
      else{
        day_age = today.getDate() - date_1.getDate();
      }

    }else{
      month_age = today.getMonth() - date_1.getMonth();


      if (today.getDate() < date_1.getDate()) {
        --month_age;
        day_age = 31 - date_1.getDate() + today.getDate();
      } else {
        day_age = today.getDate() - date_1.getDate();
      }
    }
    result22.innerHTML = `${year_age} tuổi, ${month_age} tháng, ${day_age} ngày`;
  }

}

// Bai 23

let submitBtn23 = document.getElementById("submit_23");

submitBtn23.addEventListener("click", () => {
  daysCal();
});

function daysCal() {
  let input23 = document.getElementById("input_23").value;

  let result23 = document.getElementById("result_23");

  let date_1 = new Date(input23);
  let date_2 = new Date();
  let day = date_2.getDate();
  let month = date_2.getMonth() + 1;
  let year = date_2.getFullYear();

  let today = new Date(`${year + "-" + month + "-" + day}`);

  let pos = "";
  if (today - date_1 >= 0) {
    pos = "trước";
  } else {
    pos = "sau";
  }

  let time = Math.abs(today - date_1);
  let days = Math.ceil(time / (1000 * 60 * 60 * 24));

  result23.innerHTML = `${days} ngày ${pos}`;
}

// Bai 24

let submitBtn24 = document.getElementById("submit_24");

submitBtn24.addEventListener("click", () => {
  daysBetweenGivenDates();
});

function daysBetweenGivenDates() {
  let input24_1 = document.getElementById("input_24_1").value;
  let input24_2 = document.getElementById("input_24_2").value;

  let result24 = document.getElementById("result_24");

  let date_1 = new Date(input24_1);
  let date_2 = new Date(input24_2);

  let time = Math.abs(date_2 - date_1);
  let days = Math.ceil(time / (1000 * 60 * 60 * 24));

  result24.innerHTML = days;
}
