
let shop = document.getElementById("shop");
let suits = document.getElementById("suits");
let shirts = document.getElementById("shirts");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShopSuits = () => {
  return (suits.innerHTML = suitsItemsData.map((x) => {
      let { id, name, price, desc, img } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `
      <div class="pro" id=product-id-${id} id= onclick="window.location.href='sproduct.html';">
                <img class="products_img" src=${img} alt="">
                <div class="des">
                    <span class="shop-item-title">${name}</span>
                    <h5>${desc}</h5>
                    <div class="star">
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <h4 class="shop-item-price">$${price}</h4>
                </div>
                <div class="buttons">
                    <i id="increase"  class="fa solid fa-plus plus"></i>                
                    <div id=${id} class="quantity">0</div>
                    <i onclick="decrement(${id})" class="fa solid fa-minus minus"></i>
                </div>
            </div>
    `;
    })
    .join(""));
};

let generateShopShirts = () => {
    return (shirts.innerHTML = shirtsItemsData
      .map((x) => {
        let { id, name, price, desc, img } = x;
        let search = basket.find((x) => x.id === id) || [];
        return `
        <div class="pro" id=product-id-${id} id= onclick="window.location.href='sproduct.html';">
                  <img class="products_img" src=${img} alt="">
                  <div class="des">
                      <span class="shop-item-title">${name}</span>
                      <h5>${desc}</h5>
                      <div class="star">
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                      </div>
                      <h4 class="shop-item-price">$${price}</h4>
                  </div>
                  <div class="buttons">
                      <i id="increase" class="fa solid fa-minus minus"></i>
                      <div id=${id} class="quantity">
                      ${search.item === undefined ? 0 : search.item}
                      </div>
                      <i onclick="decrement(${id})" class="fa solid fa-plus plus"></i>
                  </div>
              </div>
      `;
      })
      .join(""));
  };
  
generateShopSuits();
generateShopShirts();


let increment = (id) => {

    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
  
    if (search === undefined) {
      basket.push({
        id: selectedItem.id,
        item: 1,
      });
    } else {
      search.item += 1;
    }
    console.log(basket)
    // console.log(basket);
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
  };


let pluses = document.querySelectorAll(".plus")
pluses.forEach(pluses => pluses.addEventListener("click",increment))

let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
  
    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
      search.item -= 1;
    }
    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0);
    // console.log(basket);
    localStorage.setItem("data", JSON.stringify(basket));
  };

  let update = (id) => {
    let search = basket.find((x) => x.id === id);
    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
  };

  let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  };
  
calculation();
