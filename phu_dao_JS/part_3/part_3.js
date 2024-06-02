const app = {
  API_URL:
    "https://svc-0-staging-usf.hotyon.com/search?q=&apiKey=1fedccb4-262f-4e65-ae6d-d01e8024fe83",

  async fetchData(API) {
    const response = await fetch(API);
    const data = await response.json();
    return data.data;
  },
  debounce(callback, delay) {
    let timer = null;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(callback, delay);
    };
  },

  handleEvent(BtnID, resultID, callback) {
    // console.log(BtnID);
    let Btn = document.getElementById(BtnID);
    let result = document.getElementById(resultID);

    if (BtnID == "bai_2") {
      Btn.addEventListener("click", async function () {
        result.innerHTML = await callback();
      });
    }

    if (BtnID == "bai_3") {
      // Btn.addEventListener("input", async () => {
      //   result.innerHTML = `<div class="warning">Loading product</div>`;
      //   try {
      //     app.debounce(async function () {
      //       // try {
      //         result.innerHTML = await callback(Btn);
      //       // } catch (err) {
      //       //   result.innerHTML = `<div class="warning">Failed to get product</div>`;
      //       //   console.log(err);
      //       // }
      //       // console.log("check");
      //     }, 3000);
      //   } catch (err) {
      //     result.innerHTML = `<div class="warning">Failed to get product</div>`;
      //   }
      // });
      Btn.addEventListener("input", 
        app.debounce(async function () {
          result.innerHTML = `<div class="warning">Loading product</div>`;
          try {
            result.innerHTML = await callback(Btn);
          } catch (err) {
            result.innerHTML = `<div class="warning">Failed to get product</div>`;
            console.log(err);
          }
          console.log("check");
        }, 3000)
      );
    }
  },

  //Bai 3

  async findProduct(userInput) {
    // console.log(userInput.value);
    // const database = await app.fetchData(app.API_URL);

    //Get product user want to find
    let productToFind = userInput.value;
    // let new_API = app.API_URL +"&q=" +"[" +productToFind.split(" ").join("%20")+ "]";

    //Create new API URL match product to find
    let new_API = `${app.API_URL}&q=[${productToFind.split(" ").join("%20")}]`;
    const database = await app.fetchData(new_API);
    // console.log(database);
    // console.log(new_API);

    //Get product list from database
    const productList = database.items;

    console.log(productList);

    if (productList == []) {
      return `<div class="warning">No matches product</div>`;
    } else {
      return `<ol class="productList">${productList
        .map(
          //return HTML tag of each product
          (product) => {
            //Get all available option of product
            let optionList = app.getAllProductOption(product.options);

            //Get index of valid variant(first to have discount) or first of array
            let index = app.getValidIndex(product.variants);
            console.log(index);

            if (index == -1) {
              var price = app.getFirstValidPrice(product.variants, 0);
              var discount = "";
            } else {
              //Get valid price (price of first discount variant or first variant)
              var price = app.getFirstValidPrice(product.variants, index);

              //Get discount of variant
              var discount = `Discount: ${app.getDiscount(
                product.variants,
                index
              )}%`;
            }

            return `<li class="product">
      <p class="product_title">${product.title}</p>
      <p class="product_option container">${optionList}</p>
      <p class="price">Price:${price}</p>
      <p class="discount">${discount}</p>

      </li>`;
          }
        )
        .join(" ")}</ol>`;
    }
  },

  //Bai 2

  getAllProductOption(optionList) {
    if (optionList == []) {
      return;
    } else {
      return `<div>
  ${optionList
    .map((option) => {
      //Tra ve danh sach trong tung option
      let optionValues = option.values.join(", ");
      return `<div class="option">
         <p>${option.name}: ${optionValues}</p>


           </div>`;
    })
    .join("\n")}
            </div>`;
    }
  },

  getValidIndex(variantList) {
    let index = variantList.findIndex(
      (variant) =>
        variant.compareAtPrice != 0 && variant.compareAtPrice > variant.price
    );

    return index;
  },
  getFirstValidPrice(variantList, index) {
    return variantList[index].price;
  },
  getDiscount(variantList, index) {
    let comparePrice = Number(variantList[index].compareAtPrice);
    let price = Number(variantList[index].price);
    let discount = (comparePrice - price) / comparePrice;
    return Math.round(discount * 1000) / 10;
  },
  async showProductsList() {
    const database = await app.fetchData(app.API_URL);

    //Get product list from database
    const productList = database.items;
    // console.log(productList);

    //return HTML tag contain all product
    return `<ol class="productList">${productList
      .map(
        //return HTML tag of each product
        (product) => {
          //Get all available option of product
          let optionList = app.getAllProductOption(product.options);

          //Get index of valid variant(first to have discount) or first of array
          let index = app.getValidIndex(product.variants);
          console.log(index);

          if (index == -1) {
            var price = app.getFirstValidPrice(product.variants, 0);
            var discount = "";
          } else {
            //Get valid price (price of first discount variant or first variant)
            var price = app.getFirstValidPrice(product.variants, index);

            //Get discount of variant
            var discount = `Discount: ${app.getDiscount(
              product.variants,
              index
            )}%`;
          }

          return `<li class="product">
      <p class="product_title">${product.title}</p>
      <p class="product_option container">${optionList}</p>
      <p class="price">Price:${price}</p>
      <p class="discount">${discount}</p>

      </li>`;
        }
      )
      .join(" ")}</ol>`;
  },

  showAllBtn() {
    let BtnList = document.querySelectorAll(".disappear");
    BtnList.forEach((element) => {
      element.classList.remove("disappear");
    });
  },

  hideAllBtn() {
    let BtnList = document.querySelectorAll(".appear");
    BtnList.forEach((element) => {
      element.classList.remove("appear");
    });
  },

  // Bai 1
  async startProgram(BtnID) {
    const Btn = document.getElementById(BtnID);
    Btn.addEventListener("click", async () => {
      app.hideAllBtn();
      Btn.innerHTML = "Downloading";

      try {
        const database = await app.fetchData(app.API_URL);
        if (database) {
          Btn.innerHTML = `Downloaded ${database.items.length} products successfully`;
          app.showAllBtn();
          console.log(database);
        } else {
          Btn.innerHTML = "Download failed";
        }
      } catch (err) {
        Btn.innerHTML = "Download failed";
        console.log(err);
      }
    });
  },
  bai1() {
    app.startProgram("download_btn");
  },
  bai2() {
    app.handleEvent("bai_2", "result_2", app.showProductsList);
  },

  bai3() {
    app.handleEvent("bai_3", "result_3", app.findProduct);
  },
  init() {
    app.bai1();
    app.bai2();
    app.bai3();
  },
};

app.init();

// let test ={
//   name: "yay/",
//   list:["xanh", "do", "vang"],

// }

// let test2 = "yay"

// console.log(test.name + test2);
