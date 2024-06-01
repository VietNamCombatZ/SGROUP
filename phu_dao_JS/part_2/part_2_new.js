const app = {
  API_URL:
    "https://svc-0-staging-usf.hotyon.com/search?apiKey=1fedccb4-262f-4e65-ae6d-d01e8024fe83",

  async fetchData() {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  },

  async getMostExpensiveProduct() {},

  handleEvent(btnID,callback) {
    const button = document.querySelector(btnID);
    const result = document.querySelector(resultID);

    button.addEventListener("click", callback);
  },

  bai1() {
    app.handleEvent("#submit_1", "#result_1", getMostExpensiveProduct());
  },

  bai2() {
    app.handleEvent("#submit_2", "#result_2", getMostExpensiveProduct());
  },
  bai3() {
    app.handleEvent("#submit_3", "#result_3", getMostExpensiveProduct());
  },

  async getProductByOption(option, optionValue) {
    if (!option || !optionValue) {
      return "Nhap option value";
    }

    option = option.toUpperCase();
    optionValue = optionValue.toUpperCase();

    const data = await app.fetchData();

    let products = data.items.filter((product) => {
      const hasOption = product.options.find((opt) => {
        opt.name.toUpperCase() == option;
      });
      if (!hasOption) {
        return false;
      }

      const hasValue = hasOption.values.find((val) => {
        return val.toUpperCase == optionValue;
      });
      return hasValue;
    });

    if (products.length == 0) {
      return "No matches product";
    }

    return products.map((product) => {
      let optionIndex = product.options.findIndex(
        (opt) => opt.name.toUpperCase() == option
      );
      let valueIndex = product.options[optionIndex].values.findIndex(
        (val) => val.toUpperCase() == optionValue
      );
      let productOptions = product.options;

      let variants = product.variants.filter(
        (variant) => variant.options[optionIndex] == valueIndex
      );

      variants = variants.map((variant) => {
        let option = variant.options.map((val, index) => {}); //chua xong
      });
    });
  },
  bai4() {
    let submitBtn4 = document.getElementById("submit_4");
    let input_1 = document.getElementById("input_4_1").value;
    let input_2 = document.getElementById("input_4_2").value;
    let result_4 = document.getElementById("result_4");

    submitBtn4.addEventListener("click", async function () {
      result_4.innerHTML = await getProductByOption(input_1, input_2);
    });
  },

  async getProductWithPrice(minPrice, maxPrice){
    if(!(minPrice == 0) || !(maxPrice == 0)){
        return "nhap price"
    }

    const data = await app.fetchData();
    const products = data.items.filter((product) => {
        let variant = product.variants.filter(
          (variant) => variant.price >= minPrice && variant.price <= maxPrice

        );
        return product.variant.length //chua xong


    })

    if(!products.length){
        
    }



  }
  ,

  bai5() {
    let submitBtn5 = document.getElementById("submit_5");
    let input_1 = document.getElementById("input_5_1").value;
    let input_2 = document.getElementById("input_5_2").value;
    let result_5 = document.getElementById("result_5");

    submitBtn5.addEventListener("click", async function () {
      result_5.innerHTML = await getProductWithPrice(input_1, input_2);
    });
  },

  init() {
    app.bai1();
    app.bai2();
    app.bai3();
    app.bai4();
    app.bai5();
  },
};

app.init();