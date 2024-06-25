import { elements } from "./renderItems.js";

class Item {
  constructor(title, picture, category, price){
    this.title = title;
    this.picture = picture;
    this.category = category;
    this.price = price;
    this.isFavorite = false;
    this.iconClass = 'bx-heart';
  }
}

export function sendMessage(item){
  let text = "Olá! Dei uma olhada no seu catálogo. Gostaria de saber mais sobre o produto ";
  let linkText = `<a href='https://wa.me/5584991458984?text=${text}'>` 
}

let cont = localStorage.getItem('productsLingerieCont') || 0;
let tempArr = [];

export let itemsArr = [
    new Item('CJ Espartilho', "pictures/image-010055.jpeg", 'espartilho', 50),
    new Item('Espartilho', "pictures/image-020055.jpeg", 'espartilho', 35),
    new Item('Calcinhas Ana Girl', 'pictures/image-030055.jpeg', 'calcinha'),
    new Item('Modelador', 'pictures/image-050055.jpeg', 'modelador', 45),
    new Item('Calça franzida microfibra', 'pictures/image-770055.jpeg', 'calça', 7),
    new Item('Calça pala dupla', 'pictures/image-780055.jpeg', 'calça', 7.5.toFixed(2)),
    new Item('Tanga microfibra', 'pictures/image-790055.jpeg', 'tanga', 5),
    new Item('Calça infantil', 'pictures/image-800055.jpeg', 'calça', 4.5.toFixed(2)),
    new Item('Sutiã sem bojo com aro', 'pictures/image-820055.jpeg', 'sutiã', 30),
    new Item('Sutiã sem bojo setinete', 'pictures/image-830055.jpeg', 'sutiã', 18),
    new Item('Sutiã nadador', 'pictures/image-840055.jpeg', 'sutiã', 20),
    new Item('Sutiã reforçado', 'pictures/image-850055.jpeg', 'sutiã', 25),
    new Item('Fio cinta', 'pictures/image-860055.jpeg', 'fio', 20),
    new Item('Camisola Tully', 'pictures/image-880055.jpeg', 'camisola', 22),
    new Item('Samba canção', 'pictures/image-114.jpeg', 'cueca', 15),
    
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
  if(category !== 'favorito'){
    return elements.filter(item => item.category === category);
  }else{
    return elements.filter(item => item.isFavorite === true);
  }
 
}