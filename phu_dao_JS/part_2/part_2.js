const url =
  "https://svc-0-staging-usf.hotyon.com/search?apiKey=1fedccb4-262f-4e65-ae6d-d01e8024fe83&q=";

let submitBtn1 = document.getElementById("submit_1");

submitBtn1.addEventListener("click", () => {
  console.log(":check");
  let result_1 = document.getElementById("result_1");

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data && data.data) {
        console.log(data.data.items);
        var products = data.data.items;

        let maxPriceProduct = null;
        let maxPrice = 0;
        let maxID = 0;

        let productIndex; // index of max price product
        let variantIndex; // index of max price variant in product
        let index1 = 0; // index of product in product list, increase each loop
        //Array of 28 product
        products.forEach((product) => {
          let variantsList = product.variants;
          let maxPriceVariant;

          //Check each variant in product
          let index2 = 0; // index of variant in variant list, increase each loop
          variantsList.forEach((item) => {
            var priceString = item.price;
            var price = parseInt(priceString);
            // console.log(price);

            if (price > maxPrice) {
              maxPrice = price;
              maxPriceVariant = item;
              maxID = item.id;
              variantIndex = index2;

              productIndex = index1;
              // console.log(variantIndex);
            }
            index2++;
          });
          //   variantIndex = variantsList.indexOf(maxPriceVariant.id);
          index1++;

          // console.log(variantIndex);
          // console.log(productIndex);
        });

        let productOptions =
          products[productIndex].options &&
          products[productIndex].options.length > 0
            ? products[productIndex].options
            : "None";

        // if(productOption != "None"){

        // }

        console.log(products[productIndex].title);
        console.log(maxPrice);
        console.log(productOptions);

        let HTMLofProduct = `<div class="container">
        <p class="product name">${products[productIndex].title}</p>
        <p class="product price">Price: $${maxPrice} USD</p>
        <ul class="product option">Option: ${productOptions}</ul>
        </div> `;

        result_1.innerHTML = HTMLofProduct;
      }
    });
});

let submitBtn2 = document.getElementById("submit_2");

submitBtn2.addEventListener("click", () => {
  console.log(":check");
  let result_2 = document.getElementById("result_2");

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data && data.data) {
        console.log(data.data.items);
        var products = data.data.items;

        let variantCount = 0;
        let variantPriceSum = 0;
        let index1 = 0;

        let productIndex; // index of max price product

        // let index1 = 0; // index of product in product list, increase each loop

        //Array of 28 product
        products.forEach((product) => {
          if (product.title == "Test bundle") {
            productIndex = index1;
            console.log(productIndex);
            console.log(product.title);

            variantCount = product.variants.length;

            console.log(variantCount);

            for (let variant of product.variants) {
              variantPriceSum += variant.price;
            }
            console.log(variantPriceSum);
          }
          index1++;
        });

        let HTMLofProduct = `<div class="container">
        <p class="product name">${products[productIndex].title}</p>
        <p class="product price">${variantCount} variants</p>
        <ul class="product option">Total price: $${variantPriceSum} USD</ul>
        </div> `;

        result_2.innerHTML = HTMLofProduct;
      }
    });
});

let submitBtn3 = document.getElementById("submit_3");

submitBtn3.addEventListener("click", () => {
  console.log("check3");
  let result_3 = document.getElementById("result_3");
  result_3.innerHTML = "SOLD OUT";
  let soldOutContainer = "";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data && data.data) {
        console.log(data.data.items);
        var products = data.data.items;

        let variantCount = 0;
        let variantPriceSum = 0;

        let productIndex; // index of max price product

        // let index1 = 0; // index of product in product list, increase each loop

        //Array of 28 product
        products.forEach((product) => {
          let check = 0;

          product.variants.forEach((item) => {
            if (item.available > 0) {
              check++;
            }
          });

          if (check == 0) {
            soldOutContainer += `<li>${product.title}</li>`;
            // soldOutContainer += "check";
          }
        });

        result_3.innerHTML += `<ul class="sold_out container" id="sold_out"> 
        ${soldOutContainer}
        </ul>`;
      }
    });
});

let submitBtn4 = document.getElementById("submit_4");

submitBtn4.addEventListener("click", () => {
  console.log("check4");
  let input_1 = document.getElementById("input_4_1").value.toUpperCase();
  let input_2 = document.getElementById("input_4_2").value.toUpperCase();
  let result_4 = document.getElementById("result_4");
  // result_4.innerHTML = "SOLD OUT";
  // let soldOutContainer = "";
  console.log(input_1);
  console.log(input_2);

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data && data.data) {
        console.log(data.data.items);
        var products = data.data.items;

        let productListHTML = document.getElementById("product_list_by_option");
        productListHTML.innerHTML = "";
        // console.log(typeof(productListHTML));

        // productListHTML= "";
        // console.log(typeof productListHTML);

        let variantCount = 0;
        let variantPriceSum = 0;

        let productIndex; // index of max price product

        let productName = ""; // Ten san pham
        let optionName = ""; //Ten option
        let variantPrice; //gia tien san pham

        // let check1 ="yay";
        // let check2;
        // check2 += check1;
        // // console.log(check2);
        // check1 = `<p>${check1}</p>`;

        /*format
        Product A
        Size: 10 | price $ 124 USD 
        Size: 12 | price $ 127 USD */

        // let index1 = 0; // index of product in product list, increase each loop

        //Array of 28 product
        products.forEach((product) => {
          let check = 0;
          let variantsList;

          let variantHTML = ""; //the HTML chua cac variant

          let optionList = product.options; // Danh sach cac option (vd: size, color)
          let optionChoice; //danh sach cac lua chon trong option (vd: size M,L, X; color: red, green, blue,...)
          let optionChoiceIndex;
          // console.log(optionList);

          let optionIndex = optionList.findIndex(
            (check) => check.name.toUpperCase() == input_1
          );

          if (optionIndex != -1) {
            optionChoiceIndex = optionList[optionIndex].values.findIndex(
              (item) => item.toUpperCase() == input_2
            );
          }

          // kiem tra neu option co ton tai thi thuc hien lenh tao the HTML theo format
          if (optionIndex != -1 && optionChoiceIndex != -1) {
            variantsList = product.variants; // Lay danh sach cac bien the
            optionChoice = product.options[optionIndex].values; //danh sach cac lua chon trong option (vd: size M,L, X; color: red, green, blue,...)

            // console.log(optionChoice);
            productName = product.title; // ten san pham
            // console.log(productName);

            variantsList.forEach((element) => {
              optionName =
                optionChoice[element.options[optionIndex]].toString(); //thong tin option cua bien the (green, blue, yellow, X, L, M, X, S)

              variantPrice = element.price; //gia cua bien the

              // console.log(optionName);
              // console.log(typeof(optionName));
              // console.log(variantPrice);
              // variantHTML += `<li class="option">${input_1}:${optionName} | Price: $${variantPrice} USD</li>`;
              if (optionName.toUpperCase() == input_2) {
                // console.log(optionList[optionIndex].name);
                // console.log(optionName);
                // console.log(variantPrice);

                variantHTML += `<li class="option">${optionList[optionIndex].name}:${optionName} | Price: $${variantPrice} USD</li>`;
              }
            });
            // console.log(typeof(variantHTML));
            // console.log(productListHTML);
            // productListHTML.innerHTML += `<li>check</li>`;

            productListHTML.innerHTML += `<li class="product_container">
                    <p class="product_name">${productName}</p>
                    <ul class="option_container">
                        ${variantHTML}
                    </ul>
                </li>`;
            // console.log(optionChoice);

            // console.log(variantsList);
          }
        });
        if (productListHTML.innerHTML == "") {
          productListHTML.innerHTML = `<p>Invalid option</p>`;
        }
      }
    });
});

let submitBtn5 = document.getElementById("submit_5");

submitBtn5.addEventListener("click", () => {
  console.log("check5");
  let input_1 = document.getElementById("input_5_1").value;
  let input_2 = document.getElementById("input_5_2").value;
  let result_5 = document.getElementById("result_5");
  // result_5.innerHTML = "SOLD OUT";
  // let soldOutContainer = "";
  if (Number(input_1) > Number(input_2)) {
    console.log("Invalid");
    return;
  } else {
    console.log("check");
  }

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data && data.data) {
        console.log(data.data.items);
        var products = data.data.items;

        let productListHTML = document.getElementById("product_list_by_price");
        productListHTML.innerHTML = "";
        // console.log(typeof(productListHTML));

        // productListHTML= "";
        // console.log(typeof productListHTML);

        let variantCount = 0;
        let variantPriceSum = 0;

        let productIndex; // index of max price product

        let productName = ""; // Ten san pham
        let optionName = ""; //Ten option
        let variantPrice; //gia tien san pham

        // console.log( check1 > check2 && check3 <check1);
        /*format
        Product A
        Size: 10 | price $ 124 USD 
        Size: 12 | price $ 127 USD */

        // let index1 = 0; // index of product in product list, increase each loop

        //Array of 28 product
        products.forEach((product) => {
          // let check = 0;
          let variantsList = product.variants; // danh sach cac bien the
          let variantOptionIndex; // chi so cua option, trong danh sach option cua 1 variant

          let variantsListHTML = "";

          let optionList = product.options; // Danh sach cac option (vd: size, color)
          let optionChoice; //danh sach cac lua chon trong option (vd: size M,L, X; color: red, green, blue,...)
          let optionChoiceIndex;

          let optionArray = [];
          optionList.forEach((element) => {
            // console.log(element.values);
            optionArray.push(element.values);
          });

          console.log(optionArray);
          // console.log(optionList);

          // let variantIndex = variantsList.findIndex(
          //   (check) => check.price >= input_1 && check.price <= input_2
          // );
          // console.log(variantIndex);

          // Duyet qua danh sach tung variant trong product
          variantsList.forEach((variant) => {
            let variantHTML = ""; //the HTML cua 1 variant
            variantOptionIndex = 0; //reset moi lan duyet 1 variant moi

            //kiem tra neu input_1 <= variant.price <= input_2
            if (variant.price >= input_1 && variant.price <= input_2) {
              //duyet qua danh sach options trong 1 variants

              
              variant.options.forEach((option) => {
                // console.log(
                //   product.options[variant.options.indexOf(option)].name
                // );

                // // bug chi lay dc index 0,1
                // console.log(variant.options.indexOf(option));
                // variantHTML += `${
                //   product.options[variant.options.indexOf(option)].name
                // }: ${
                //   optionArray[variant.options.indexOf(option)][Number(option)]
                // }|`;

                // console.log(variantOptionIndex);
                variantHTML += `${
                  product.options[variantOptionIndex].name
                }: ${
                  optionArray[variantOptionIndex][Number(option)]
                }|`;

                variantOptionIndex++;
                //  console.log(variantHTML);
              });

              variantHTML += `Price: $ ${variant.price} USD`;
              variantHTML = `<li class="option">${variantHTML}</li>`;
              // console.log(variantHTML);
              if (variantHTML != "") {
                variantsListHTML += variantHTML;
              }
            }
            // console.log("finish");
            
          });
          
          if(variantsListHTML != ""){
          variantsListHTML = `
                    <ul class="option_container">
                        ${variantsListHTML}
                    </ul>
                `;

          productListHTML.innerHTML += `<li class="product_container">
                    <p class="product_name">${product.title}</p>
                    ${variantsListHTML}
                </li>`;
        }

        
          // console.log(variantsListHTML);

        });
        if (productListHTML.innerHTML == "") {
          productListHTML.innerHTML = `<p>Invalid option</p>`;
        }
      }
    });
});
