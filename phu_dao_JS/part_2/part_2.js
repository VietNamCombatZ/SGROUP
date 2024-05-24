const url =
  "https://svc-0-staging-usf.hotyon.com/search?apiKey=1fedccb4-262f-4e65-ae6d-d01e8024fe83&q=";

var submitBtn1 = document.getElementById("submit_1");

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
        let maxID =0;

        let productIndex;
        let variantIndex;

        //Array of 28 product
        products.forEach((product) => {
          let variantsList = product.variants;
          let maxPriceVariant ;

          //Check each variant in product

          variantsList.forEach((item) => {
            var priceString = item.price;
            var price = parseInt(priceString);

            if (price > maxPrice) {
              maxPrice = price;
              maxPriceVariant = item;
              maxID = item.id;
            }
          });
          variantIndex = variantsList.indexOf(maxPriceVariant.id);
          console.log(variantIndex);



        });
         
        
      }
    });

  
});
