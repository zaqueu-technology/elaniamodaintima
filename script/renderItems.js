import { itemsArr } from "./items.js";
import { turnModal } from "./modal.js";

const items = document.querySelector('.items');

const elements = JSON.parse(localStorage.getItem('arrayItems'));

export function renderItems(arr){
  items.innerHTML = '';
  arr.forEach(element => {
    let newItem = document.createElement('div');
    newItem.innerHTML = `
      <div class="items__element">
          <div class="items__title">${element.title}<hr></div>
          
          <div class="items__content">
            <div class="items__pictures__container">
              <img src="${element.picture}" class="items__picture" />
            </div>
            <div>Tamanhos disponíveis: P, M e G</div>
            <div class="items__icons">
              <i class='bx bxl-whatsapp'></i>
              <i class='bx bx-heart heart'></i>
              <div class="item-likes__cont">12</div> 
            </div>
        </div>
    `;
    items.appendChild(newItem);

    const heart = newItem.querySelector('.heart');
    heart.addEventListener('click', ()=>{
      favorite(heart, element, arr);
    })

    let imgMod = newItem.querySelector('.items__picture');
    imgMod.addEventListener('click', ()=>{
    turnModal(`${element.picture}`, `${element.title}`);
  });
  });
}

function favorite(likes, element, arr){
  if(likes.classList.contains('bx-heart')){
    likes.classList.remove('bx-heart');
    likes.classList.add('bxs-heart');
    element.isFavorite = true;
  }else{
    likes.classList.remove('bxs-heart');
    likes.classList.add('bx-heart');
    element.isFavorite = false;
  }

  localStorage.setItem('arrayItems', JSON.stringify(arr));
}
