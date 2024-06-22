import { renderItems } from './renderItems.js';
import { generateFilter } from './filter.js'
import { itemsArr } from './items.js';

document.addEventListener('DOMContentLoaded', ()=>{
  renderItems(itemsArr);
})
generateFilter();