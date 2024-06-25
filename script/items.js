class Item {
  constructor(title, picture, category){
    this.title = title;
    this.picture = picture;
    this.category = category;
    this.isFavorite = false;
    this.iconClass = 'bx-heart';
  }
}

let cont = localStorage.getItem('productsLingerieCont') || 0;
let tempArr = [];

export let itemsArr = [
    new Item('CJ Espartilho', "pictures/image-010055.jpeg", 'espartilho'),
    new Item('Espartilho', "pictures/image-020055.jpeg", 'espartilho'),
    new Item('Calcinhas Ana Girl', 'pictures/image-030056.jpeg', 'calcinha'),
    new Item('Cueca 1', 'pictures/image-100055.jpeg', 'cueca'),
    new Item('Cueca 2', 'pictures/image-100055.jpeg', 'cueca'),
    new Item('Cueca 3', 'pictures/image-100055.jpeg', 'cueca'),
    new Item('Cueca 4', 'pictures/image-100055.jpeg', 'cueca'),
    new Item('Cueca 5', 'pictures/image-100055.jpeg', 'cueca'),
    new Item('Cueca 10', 'pictures/image-100055.jpeg', 'cueca'),
    new Item('Cuecaquinha 11', 'pictures/image-100055.jpeg', 'cueca'),
    new Item('Cuecaquinha 12', 'pictures/image-100055.jpeg', 'cueca'),
    new Item('Cuecaquinha 13', 'pictures/image-100055.jpeg', 'cueca'),
    new Item('Cuecaquinha 14', 'pictures/image-100055.jpeg', 'cueca'),
    new Item('Cueca 91', 'pictures/image-100055.jpeg', 'cueca'),
    new Item('Cueca 92', 'pictures/image-100055.jpeg', 'cueca'),
    new Item('Cueca 93', 'pictures/image-100055.jpeg', 'cueca')
];

function itemsEqual(item1, item2) {
  return item1.title === item2.title && item1.picture === item2.picture && item1.category === item2.category;
}

tempArr = JSON.parse(localStorage.getItem('arrayItems')) || itemsArr;

itemsArr.forEach(item => {
  if (tempArr.findIndex(tempItem => itemsEqual(tempItem, item)) === -1) {
    tempArr.push(item);
  }
});

tempArr = tempArr.filter(tempItem => {
  return itemsArr.findIndex(item => itemsEqual(item, tempItem)) !== -1;
});

// Atualiza o itemsArr com o tempArr sincronizado
itemsArr = tempArr;

// Atualiza o localStorage
localStorage.setItem('arrayItems', JSON.stringify(tempArr));

/* if((tempArr.length > itemsArr.length) || (tempArr.length < itemsArr.length)){
  itemsArr.forEach(item=>{
    if(!tempArr.contains(item)){
      itemsArr.push(item);
      localStorage.setItem('arrayItems', JSON.stringify(tempArr));
    } 
  })
  tempArr.forEach((item, index)=>{
    if(!itemsArr.contains(item)){
      tempArr.splice(index, 1);
    }
  })
} */
console.log(cont);

export function filterItems(category){
  return itemsArr.filter(item => item.category === category);
}