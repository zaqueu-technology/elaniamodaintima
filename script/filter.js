import { filterItems, itemsArr } from "./items.js";
import { renderItems } from "./renderItems.js";

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
  new Filter('Sutiãs', 'sutiã')
];

const filterList = document.querySelector('.filter__list');
const filterText = document.querySelector('.filter__text');
const filterButton = document.querySelector('.filter__button');

let buttonDown = false;
filterButton.addEventListener('click', ()=>{
  if(!buttonDown){
    filterList.style.display = 'block';
    buttonDown = true;
  } else{
    filterList.style.display = 'none';
    buttonDown = false;
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

      document.querySelectorAll('.filter__item').forEach(item => {
        item.classList.remove('filter__removed');
      });

      filterText.textContent = element.name;
      newItem.classList.add('filter__removed');
      
      if (element.name.toLowerCase() === 'todos') {
        renderItems(itemsArr);
      } else {
        const filteredItems = filterItems(element.category);
        renderItems(filteredItems);
        console.log(filteredItems);
      }
    })
  })
}


