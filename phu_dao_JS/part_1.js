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

  for (let i = 0; i < input1.length; i++) {
    array.push(Number(input1[i]));
  }

  let check = false;
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] < array[i]) {
      result_array.push(array[i - 1]);

      check = true;
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

// submitBtn2.addEventListener("click", () => {
//   console.log(test[3]);;
// });

function checkMaxFrequency() {
  let input2 = document.getElementById("input_2").value;
  let result2 = document.getElementById("result_2");
  let array = [];
  let checkarray = [];
  let max = -1;
  let maxfrequency =0;

  array = input2.split(',');



  for(let i = 0; i < array.length; i++){

    if ( checkarray[array[i]] == undefined) {
        checkarray[array[i]] = 1;

    }else{
        checkarray[array[i]] += 1;

    }
              
  }

  for (let i =0; i < checkarray.length; i++){
    if(checkarray[i] >= max){
      max = checkarray[i];
      maxfrequency = i;
    }
  }

  result2.innerHTML = maxfrequency;
  console.log(checkarray);
}

// bai 3

let submitBtn3 = document.getElementById("submit_3");
var test = [];
submitBtn3.addEventListener("click", () => {
  deleteRepeatElement();
});

function deleteRepeatElement (){
  let input3 = document.getElementById("input_3").value;
  let result3 = document.getElementById("result_3");

  let array =[];
  let result_array = [];
  array = input3.split(",");

  

  for(let i = 0; i <array.length; i++){
     for( let k = i+1; k <array.length; k++){
      if(array [k] == array [i]){
        delete array[k];
      }
     }

  }
  for( let i = 0; i <array.length; i++){
    if(array[i] != undefined){
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

function checkLongestString(){
    let input4 = document.getElementById("input_4").value;
    let result4 = document.getElementById("result_4");


    let array = [];
    let result_array = [];
    let max = "";
    array = input4.split(" ");
    
    
   for( let i = 0; i < array.length; i++){
    if (max <= array[i]){
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

function checkSecondLongestString(){
    let input5 = document.getElementById("input_5").value;
    let result5 = document.getElementById("result_5");


    let array = [];
    let result_array = [];
    let max = "";
    let max_2 = "";
    array = input5.split(" ");
    
    
   for( let i = 0; i < array.length; i++){
    if (max.length <= array[i].length){
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
  let sum ;
  
  array = input6.split(",");
  
  sum = array.reduce(function(value, number) {
      number = Number(number);
      if(number % 2 == 0){
        return value + number;
      }else{
        return value;
      }
  }, 0); 
  
  result6.innerHTML = sum;


}

// Bai 7

let submitBtn7 = document.getElementById("submit_7");

submitBtn7.addEventListener("click", () => {
  convertToFollowingChar()

});
function convertToFollowingChar(){
   let input7 = document.getElementById("input_7").value;
   let result7 = document.getElementById("result_7");
   let check = /[^a-z]/g;
   let charCode;

   let check_array = input7.match(check);
   let result_string = "" ;

   if(check_array != null){
    result7.innerHTML = 'chuoi khong hop le';
    
   }else{

    for(let i = 0; i < input7.length; i++){
      charCode = input7.charCodeAt(i) ;
      
      if(charCode < 122)
        {
          ++charCode;
        }
      
      // input7[i] =String.fromCharCode(charCode);
      result_string += String.fromCharCode(charCode);
    
    }
    result7.innerHTML = result_string;
    
      
    };
   }

// Bai 8

let submitBtn8 = document.getElementById("submit_8");

submitBtn8.addEventListener("click", () => {
  printThreeMiddleChar();
});

function printThreeMiddleChar() {

  let input8 = document.getElementById("input_8").value;
  let result8 = document.getElementById("result_8");

  if(input8.length <  3 || input8.length % 2 == 0){
    result8.innerHTML = 'Chuoi ko hop le';
  }else if(input8.length == 3){
    result8.innerHTML = input8;
  }
  else{
    result8.innerHTML ="";
    for(let i = (input8.length - 3)/2; i  <= (input8.length - 3)/2 + 2; i++){
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

// Bai 11

let submitBtn11 = document.getElementById("submit_11");

let submit_array_1_btn = document.getElementById("subit_element_11_1");
let submit_array_2_btn = document.getElementById("subit_element_11_2");

let input11_1 = document.getElementById("input_11_1").value;
let input11_2 = document.getElementById("input_11_2").value;

let array_11_1 =[];
let array_11_2 = [];

submit_array_1_btn.addEventListener("click", () => {
  array_11_1 = input11_1.split(",");
  
})

submit_array_2_btn.addEventListener("click", () => {
  array_11_2 = input11_2.split(",");
  for (const iterator of array_11_2) {
    console.log(iterator);
    
  }
});

submitBtn11.addEventListener("click", () => {
  checkRepeatValue();
});

function checkRepeatValue() {

  

  

  

  let result11 = document.getElementById("result_11");


}
   



