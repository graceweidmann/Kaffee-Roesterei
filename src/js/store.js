import products from "./products.json";

// Pfad zu den Bildern
// alternativ können auch alle Dateien importiert werden:
// import productFiles from "../images/products/*";
import productImages from "../img/*.png";
import productIcons from "../img/*.svg";
function fillTemplate(product) {
  // damit das hier funktioniert muss der image-tag im JSON dem Dateinamen ohne Endung entsprechen
  // Bsp.:
  // Datei: fend-coffee-costa-rica-2.png
  // im JSON:
  // ...
  // image: "fend-coffee-costa-rica-2",
  // ...
  return `
    <img
      src="${productImages[product.image]}"
      alt="Eine Packung unserers Kaffess ${product.productName}"
    />;
    <img
    xlink:href="${productIcons[product.icon1]}"
    alt="icon1 ${product.productName}" 
  />;
    
  `;
}

function initShop() {
  const productTemplates = products.map(fillTemplate).join("");
  const shop = document.querySelector(".shop");
  shop.innerHTML = productTemplates;
}

export default initShop;

function handleCartButtonClick(event) {
  const productId = parseInt(this.dataset.productId, 10);
  const variantId = document.querySelector(`select[data-product-id="${productId}"]`).value;

  const chosenProduct = products.find((product) => product.id === productId);

  const cartProduct = {
      ...chosenProduct,
      variantId,
  };

  const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

  console.log(currentCart);

  if (currentCart !== null) {
    const updatedCart = [...currentCart, cartProduct];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  } else {
    localStorage.setItem("cart", JSON.stringify([cartProduct]));
  }
}

      
    
function shop() {
  const productContainer = document.querySelector(".products-center");

  const productTemplate = `
   ${products
     .map((product, index) => {
       const sortedVariants = product.variants.sort((variant1, variant2) => {
         if (variant1.price > variant2.price) {
           return 1;
         }
         return -1;
       });
   

       return `
   <div class="coffee_flavors">
      <div class="card">
          <img class="img-coffee-kilo card-color" src="${productImages[product.image]}" alt="${product.productName}"/>
          <p class="subhead_m black margin-top-10">${product.productName}</p>
          <p class="text_m_no_margin grey margin-top-5">${sortedVariants[0].price / 100} - ${
            sortedVariants[sortedVariants.length - 1].price / 100
          }€</p>
        <div class="feature-icons margin-top-5">
          <img class="icon-coffee-symbols fill-black" xlink:href="${productIcons[product.icon1]} alt="icon">
        </div>
       
     
      <!-- end of single product -->
      
      <select data-product-id="${
        product.id
      }">
        ${sortedVariants.map(variant => `<option value="${variant.id}">${variant.name} - ${variant.price}</option>`).join("")}
      </select>
       <button class="add-to-cart-button" data-product-id="${
            product.id
          }">Add to cart</button></div>
      </div>
   `;
     })
     .join("")} 
  `;

  productContainer.innerHTML = productTemplate;

  const addToCartButtons = document.querySelectorAll(".add-to-cart-button");

  addToCartButtons.forEach((cartButton) =>
    cartButton.addEventListener("click", handleCartButtonClick)
  );
}

shop();