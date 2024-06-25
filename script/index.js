import { renderItems, elements } from './renderItems.js';
import { generateFilter } from './filter.js'
import { itemsArr } from './items.js';

/* document.addEventListener('DOMContentLoaded', ()=>{
  renderItems(itemsArr);
}); */
renderItems(elements);
generateFilter();