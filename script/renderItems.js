import { itemsArr } from "./items.js";

const items = document.querySelector('.items');

export function renderItems(){
  itemsArr.forEach(element => {
    let newItem = document.createElement('div');
    newItem.innerHTML = `
      <div class="items__element">
          <div class="items__title">${element.title}<hr></div>
          
          <div class="items__content">
            <img src="${element.picture}" class="items__picture" />
            <div>Tamanhos disponíveis: P, M e G</div>
            <div class="items__icons">
              <i class='bx bxl-whatsapp'></i>
              <i class='bx bx-heart'></i>
              <div class="item-likes__cont">12</div> 
            </div>
        </div>
    `;
    items.appendChild(newItem);
  });
}

