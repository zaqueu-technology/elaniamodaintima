class Item {
  constructor(title, picture, category){
    this.title = title;
    this.picture = picture;
    this.category = category;
  }
}

export const itemsArr = [
  new Item('CJ Espartilho', "pictures/image-010055.jpeg", 'espartilho'),
  new Item('Espartilho', "pictures/image-020055.jpeg", 'espartilho'),
  new Item('Calcinhas Ana Girl', 'pictures/image-030056.jpeg', 'calcinha'),
  new Item('Cueca 1', 'pictures/image-100055.jpeg', 'cueca'),
  new Item('Cueca 2', 'pictures/image-100055.jpeg', 'cueca'),
  new Item('Cueca 3', 'pictures/image-100055.jpeg', 'cueca'),
  new Item('Cueca 4', 'pictures/image-100055.jpeg', 'cueca'),
  new Item('Cueca 5', 'pictures/image-100055.jpeg', 'cueca')
]

export function filterItems(category){
  return itemsArr.filter(item => item.category === category);
}