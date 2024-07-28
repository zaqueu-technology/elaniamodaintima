import { filterItems, itemsArr } from "./items.js";
import { renderItems, elements, noFavorites } from "./renderItems.js";

class Filter{
  constructor(name, category){
    this.name = name;
    this.category = category;
  }
}

const filterArr = [
  new Filter('Todos', 'todos'),
  new Filter('Cuecas', 'cueca'),
  new Filter('Calcinhas', 'calcinha'),
  new Filter('Sutiãs', 'sutiã'),
  new Filter('Modeladores', 'modelador'),
  new Filter('Camisolas', 'camisola'),
  new Filter('Fios', 'fio'),
  new Filter('Tangas', 'tanga'),
  new Filter('Babydolls', 'babydoll'),
  new Filter('Conjuntos', 'conjunto'),
  new Filter('Pijamas', 'pijama'),
  new Filter('Robes', 'robe'),
  new Filter('Shorts', 'short'),
  new Filter('Camisetas', 'camiseta'),
  new Filter('Cinturitas', 'cinturita'),
  new Filter('Favoritos', 'favorito')
];

const filterList = document.querySelector('.filter__options');

function verifySelectedClass(){
  let changeClassFav = document.querySelector(".item");

  if (changeClassFav) {
    if (changeClassFav.classList.contains('items__display__message')) {
      changeClassFav.classList.remove('items__display__message');
      changeClassFav.classList.add('items__display__grid');
    }
  } else {
    console.error("Elemento com a classe 'item' não encontrado.");
  }

}

export function generateFilter(){
  filterArr.forEach(element =>{
    let newItem = document.createElement('div');
    newItem.textContent = element.name;
    if(element.name === 'Todos'){
      newItem.classList.add('item__selected');
    }
    newItem.classList.add('filter__item');
    filterList.appendChild(newItem);

    newItem.addEventListener('click', ()=>{
      let filteredArr = filterItems(element.category);
      if(filteredArr.length === 0){
        noFavorites();
        let verifySelected = document.querySelectorAll('.filter__item');
        verifySelected.forEach(element =>{
          if(element.classList.contains('item__selected')){
            element.classList.remove('item__selected');
          }
        });
        newItem.classList.add('item__selected')
      }else{
        renderItems(filteredArr);
        document.querySelector('.items-container').scrollIntoView({behavior: "smooth"});
        let verifySelected = document.querySelectorAll('.filter__item');
        verifySelected.forEach(element =>{
          if(element.classList.contains('item__selected')){
            element.classList.remove('item__selected');
          }
        });
        newItem.classList.add('item__selected')
      }
      
    })
  })
}


