import { itemsArr } from "./items.js";
import { turnModal } from "./modal.js";

const items = document.querySelector(".items");
export let elements =
  JSON.parse(localStorage.getItem("arrayItems")) || itemsArr;

function shuffleArray(array) {
  let newArray = array.slice(); // Cria uma cópia do array
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export function renderItems(arr) {
  localStorage.clear();
  let changeClassFav = document.querySelector(".items");
  if (changeClassFav) {
    if (changeClassFav.classList.contains("items__display__message")) {
      changeClassFav.classList.remove("items__display__message");
      changeClassFav.classList.add("items__display__grid");
    }
  } else {
    console.error("Elemento com a classe 'item' não encontrado.");
  }

  items.innerHTML = "";
  let shuffledArray = shuffleArray(arr);
  shuffledArray.forEach((element) => {
    let price = element.price;
    let priceDisplay =
      typeof price === "number" && !isNaN(price)
        ? `R$ ${price.toFixed(2).replace(".", ",")}`
        : "Preço indisponível";

    let newItem = document.createElement("div");
    newItem.innerHTML = `
      <div class="items__element">
          <div class="items__title">${element.title.toUpperCase()}<hr></div>
          
          <div class="items__content">
            <div class="items__pictures__container">
              <img src="${element.picture}" class="items__picture" />
            </div>
            <div>${priceDisplay}</div>
            <div class="items__icons">
              <div class="whats__container"><a href="https://wa.me/5584999456493?text=Olá! Dei uma olhada no catálogo e gostaria de saber mais sobre o produto ${
                element.title
              }"><i class='bx bxl-whatsapp'></i></div></a>
              <i class="bx ${element.iconClass} heart"></i>
            </div>
        </div>
    `;

    /* <i class="bx ${element.iconClass} heart"></i>
       <div class="item-likes__cont">12</div>  */
    items.appendChild(newItem);

    const heart = newItem.querySelector(".heart");
    heart.addEventListener("click", () => {
      favorite(heart, element);
    });

    let imgMod = newItem.querySelector(".items__picture");
    imgMod.addEventListener("click", () => {
      turnModal(`${element.picture}`, `${element.title}`);
      document.querySelector("html").classList.add("body__overflow");
    });
  });
}
function favorite(item, element) {
  if (element.iconClass === "bx-heart") {
    element.iconClass = "bxs-heart";
    item.classList.remove("bx-heart");
    item.classList.add("bxs-heart");
    element.isFavorite = true;
  } else {
    element.iconClass = "bx-heart";
    item.classList.remove("bxs-heart");
    item.classList.add("bx-heart");
    element.isFavorite = false;
  }

  localStorage.setItem("arrayItems", JSON.stringify(elements));
}

export function noFavorites() {
  items.innerHTML =
    'Você ainda não favoritou nenhum item. Para favoritar um item, pressione o ícone <i class="bx bx-heart no__fav"></i> embaixo do item que deseja favoritar.';
  let changeClassFav = document.querySelector(".items");
  if (changeClassFav) {
    if (changeClassFav.classList.contains("items__display__grid")) {
      changeClassFav.classList.remove("items__display__grid");
      changeClassFav.classList.add("items__display__message");
    }
  } else {
    console.error("Elemento com a classe 'item' não encontrado.");
  }
}
