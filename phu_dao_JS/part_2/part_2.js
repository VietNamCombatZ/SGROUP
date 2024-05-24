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

        let productIndex;   // index of max price product
        let variantIndex ; // index of max price variant in product
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
          // console.log(index1);
          // console.log(variantIndex);
          // console.log(productIndex);
        });

        let productOption = products[productIndex].option || "None";

        // if(productOption != "None"){

        // }


        console.log(products[productIndex].title);
        console.log(maxPrice);
        console.log(productOption);

        let HTMLofProduct = `<div class="container">
        <p class="product name">${products[productIndex].title}</p>
        <p class="product price">Price: $${maxPrice} USD</p>
        <ul class="product option">Option: ${productOption}</ul>
        </div> `; 

        result_1.innerHTML = HTMLofProduct;
      }
    });
});
