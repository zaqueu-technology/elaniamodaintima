import { filterItems, itemsArr } from "./items.js";
import { renderItems, elements } from "./renderItems.js";

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
  new Filter('Calças', 'calça'),
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

const filterList = document.querySelector('.filter__list');
const filterText = document.querySelector('.filter__text');
const filterButton = document.querySelector('.filter__button');
const filterChevron = document.querySelector('.arrow');

let buttonDown = false;
filterButton.addEventListener('click', ()=>{
  if(!buttonDown){
    filterList.style.display = 'block';
    buttonDown = true;
    filterChevron.classList.remove('bx-chevron-down');
    filterChevron.classList.add('bx-chevron-up');
  } else{
    filterList.style.display = 'none';
    buttonDown = false;
    filterChevron.classList.remove('bx-chevron-up');
    filterChevron.classList.add('bx-chevron-down');
  }
  

})

export function generateFilter(){
  filterArr.forEach(element =>{
    let newItem = document.createElement('li');
    newItem.textContent = element.name;
    newItem.classList.add('filter__item');
    filterList.appendChild(newItem);

    if (element.name.toLowerCase() === 'todos') {
      newItem.classList.add('filter__removed');
      filterText.textContent = element.name;
    }

    let name  = element.name;
    newItem.addEventListener('click', () =>{

      filterList.style.display = 'none';
      buttonDown = false;
      filterChevron.classList.remove('bx-chevron-up');
      filterChevron.classList.add('bx-chevron-down');

      document.querySelectorAll('.filter__item').forEach(item => {
        item.classList.remove('filter__removed');
      });

      filterText.textContent = element.name;
      newItem.classList.add('filter__removed');
      
      if (element.name.toLowerCase() === 'todos') {
        renderItems(elements);
      } else if(element.name === 'favorito'){
        let filteredFavorites = filterItems('favorito');
        renderItems(filteredFavorites);
      }else {
        const filteredItems = filterItems(element.category);
        renderItems(filteredItems);
      }
    })
  })
}


