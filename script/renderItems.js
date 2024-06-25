import { itemsArr } from "./items.js";
import { turnModal } from "./modal.js";

const items = document.querySelector('.items');
export let elements = JSON.parse(localStorage.getItem('arrayItems')) || itemsArr;
console.log(elements);

export function renderItems(arr){
  items.innerHTML = '';
  arr.forEach((element) => {
    let newItem = document.createElement('div');
    newItem.innerHTML = `
      <div class="items__element">
          <div class="items__title">${element.title}<hr></div>
          
          <div class="items__content">
            <div class="items__pictures__container">
              <img src="${element.picture}" class="items__picture" />
            </div>
            <div>${element.price} R$</div>
            <div class="items__icons">
              <div class="whats__container"><a href="https://wa.me/5584991458984?text=Olá! Dei uma olhada no catálogo e gostaria de saber mais sobre o produto ${element.title}"><i class='bx bxl-whatsapp'></i></div></a>
              <i class="bx ${element.iconClass} heart"></i>
            </div>
        </div>
    `;

    /* <i class="bx ${element.iconClass} heart"></i>
       <div class="item-likes__cont">12</div>  */
    items.appendChild(newItem);

    const heart = newItem.querySelector('.heart');
    heart.addEventListener('click', ()=>{
      favorite(heart, element);
    }) 

    let imgMod = newItem.querySelector('.items__picture');
    imgMod.addEventListener('click', ()=>{
    turnModal(`${element.picture}`, `${element.title}`);
  });
  });
}
function favorite(item, element){
  if(element.iconClass === 'bx-heart'){
    element.iconClass = 'bxs-heart';
    item.classList.remove('bx-heart');
    item.classList.add('bxs-heart');
    element.isFavorite = true;
  }else{
    element.iconClass = 'bx-heart';
    item.classList.remove('bxs-heart');
    item.classList.add('bx-heart');
    element.isFavorite = false;
  }

  localStorage.setItem('arrayItems', JSON.stringify(elements));
  console.log(JSON.parse(localStorage.getItem('arrayItems')));
}
 