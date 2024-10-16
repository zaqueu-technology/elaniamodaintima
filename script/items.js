import { elements } from "./renderItems.js";

class Item {
  constructor(title, picture, category, price) {
    this.title = title;
    this.picture = picture;
    this.category = category;
    this.price = price;
    this.isFavorite = false;
    this.iconClass = "bx-heart";
  }
}

export function sendMessage(item) {
  let text =
    "Olá! Dei uma olhada no seu catálogo e gostaria de saber mais sobre o produto ";
  let linkText = `<a href='https://wa.me/5584991458984?text=${text}'>`;
}

let cont = localStorage.getItem("productsLingerieCont") || 0;
let tempArr = [];

export let itemsArr = [
  new Item("Cinturita", "pictures/image-010055.jpeg", "cinturita", 50),
  new Item("Camiseta", "pictures/image-020055.jpeg", "camiseta", 35),
  new Item("Calça cós", "pictures/image-030055.jpeg", "calcinha", 4.5),
  new Item("Tanga algodão", "pictures/image-040055.jpeg", "tanga", 6),
  new Item(
    "Modelador macaquinho",
    "pictures/image-050055.jpeg",
    "modelador",
    60
  ),
  new Item("Calça infantil luxo", "pictures/image-060055.jpeg", "calcinha", 8),
  new Item("Sutiã tomara que caia", "pictures/image-070055.jpeg", "sutiã", 22),
  new Item("Sutiã fiona largo", "pictures/image-080055.jpeg", "sutiã", 25),
  new Item("Pijama", "pictures/image-090055.jpeg", "pijama", 27),
  new Item(
    "Sutiã sem bojo alça esponjada",
    "pictures/image-100055.jpeg",
    "sutiã",
    23
  ),
  new Item("Tanga", "pictures/image-110055.jpeg", "tanga", 6),
  new Item(
    "Calça pala microfibra",
    "pictures/image-130055.jpeg",
    "calcinha",
    8.5
  ),
  new Item(
    "Calçola microfibra adulto",
    "pictures/image-140055.jpeg",
    "calcinha",
    6.5
  ),
  new Item(
    "Calça cinta pala dupla",
    "pictures/image-150055.jpeg",
    "calcinha",
    20
  ),
  new Item("Calça renda frente", "pictures/image-160055.jpeg", "calcinha", 8.5),
  new Item("Sutiã duplo", "pictures/image-170055.jpeg", "sutiã", 22),
  new Item("Calça cinta", "pictures/image-180055.jpeg", "calcinha", 27),
  new Item("Fio largo", "pictures/image-200055.jpeg", "fio", 8.5),
  new Item(
    "Sutiã top microfibra sem bojo",
    "pictures/image-210055.jpeg",
    "sutiã",
    28.5
  ),
  new Item("Fio juliette", "pictures/image-220055.jpeg", "fio", 9),
  new Item("Babydoll modal", "pictures/image-230055.jpeg", "babydoll", 28),
  new Item("Sutiã top renda", "pictures/image-240055.jpeg", "sutiã", 25),
  new Item(
    "Calça algodão infantil Suede",
    "pictures/image-260055.jpeg",
    "calcinha",
    5
  ),
  new Item(
    "Calça infantil microfibra",
    "pictures/image-270055.jpeg",
    "calcinha",
    4
  ),
  new Item("Tanga microfibra", "pictures/image-280055.jpeg", "tanga", 6),
  new Item(
    "Calça infantil semaninha - Kit",
    "pictures/image-290055.jpeg",
    "calcinha",
    32
  ),
  new Item("Camisola alça Suede", "pictures/image-300055.jpeg", "camisola", 21),
  new Item("Sutiã microfibra fiona", "pictures/image-320055.jpeg", "sutiã", 18),
  new Item(
    "Sutiã top com bojo removível",
    "pictures/image-330055.jpeg",
    "sutiã",
    20
  ),
  new Item("Camisola cava Suede", "pictures/image-340055.jpeg", "camisola", 21),
  new Item(
    "Camisola manga algodão",
    "pictures/image-360055.jpeg",
    "camisola",
    22
  ),
  new Item("Calcinhas LOL - Kit", "pictures/image-370055.jpeg", "calcinha", 25),
  new Item(
    "Calça lateral com renda",
    "pictures/image-380055.jpeg",
    "calcinha",
    8.5
  ),
  new Item(
    "Babydoll americano infantil Suede",
    "pictures/image-390055.jpeg",
    "babydoll",
    28
  ),
  new Item("Sutiã duplo", "pictures/image-400055.jpeg", "sutiã", 26),
  new Item("Tanga malha", "pictures/image-410055.jpeg", "tanga", 5.5),
  new Item("Babydoll americano", "pictures/image-420055.jpeg", "babydoll", 35),
  new Item(
    "Calça coton cós virado",
    "pictures/image-430055.jpeg",
    "calcinha",
    7
  ),
  new Item("Calça coton pala", "pictures/image-440055.jpeg", "calcinha", 7),
  new Item("Calça box", "pictures/image-450055.jpeg", "calcinha", 8),
  new Item("Calça conforto", "pictures/image-460055.jpeg", "calcinha", 7.5),
  new Item("Fio duplo", "pictures/image-470055.jpeg", "fio", 6),
  new Item(
    "Calça plus reforçada",
    "pictures/image-480055.jpeg",
    "calcinha",
    18
  ),
  new Item("Fio rendado", "pictures/image-490055.jpeg", "fio", 7.5),
  new Item("Calça drapeada", "pictures/image-500055.jpeg", "calcinha", 8.5),
  new Item(
    "Calça infantil algodão",
    "pictures/image-520055.jpeg",
    "calcinha",
    5
  ),
  new Item(
    "Calça infantil microfibra",
    "pictures/image-530055.jpeg",
    "calcinha",
    5
  ),
  new Item("Short segunda pele", "pictures/image-540055.jpeg", "short", 15),
  new Item(
    "Sutiã reforçado setinete",
    "pictures/image-550055.jpeg",
    "sutiã",
    28
  ),
  new Item("Calça cinta", "pictures/image-560055.jpeg", "calcinha", 22),
  new Item("Calça reforçada", "pictures/image-570055.jpeg", "calcinha", 13),
  new Item(
    "Camisola amamentação",
    "pictures/image-580055.jpeg",
    "camisola",
    35
  ),
  new Item("Robe", "pictures/image-590055.jpeg", "robe", 37),
  new Item("Pijama", "pictures/image-600055.jpeg", "pijama", 27),
  new Item("Sutiã alça esponjada", "pictures/image-610055.jpeg", "sutiã", 25),
  new Item("Babydoll microfibra", "pictures/image-620055.jpeg", "babydoll", 37),
  new Item("Calça algodão", "pictures/image-640055.jpeg", "calcinha", 7.5),
  new Item(
    "Calça pala microfibra",
    "pictures/image-650055.jpeg",
    "calcinha",
    8.5
  ),
  new Item(
    "Babydoll Suede adulto",
    "pictures/image-660055.jpeg",
    "babydoll",
    15
  ),
  new Item(
    "Babydoll Suede infantil",
    "pictures/image-670055.jpeg",
    "babydoll",
    10
  ),
  new Item("Camisola", "pictures/image-700055.jpeg", "camisola", 44),
  new Item("Conjunto esponjado", "pictures/image-720055.jpeg", "conjunto", 48),
  new Item("Fio biquíni microfibra", "pictures/image-750055.jpeg", "fio", 7.5),
  new Item("Babydoll Suede", "pictures/image-760055.jpeg", "babydoll", 21),
  new Item(
    "Calça franzida microfibra",
    "pictures/image-770055.jpeg",
    "calcinha",
    7
  ),
  new Item("Calça pala dupla", "pictures/image-780055.jpeg", "calcinha", 7.5),
  new Item("Tanga microfibra", "pictures/image-790055.jpeg", "tanga", 5),
  new Item("Calça infantil", "pictures/image-800055.jpeg", "calcinha", 4.5),
  new Item("Sutiã sem bojo com aro", "pictures/image-820055.jpeg", "sutiã", 30),
  new Item(
    "Sutiã sem bojo setinete",
    "pictures/image-830055.jpeg",
    "sutiã",
    18
  ),
  new Item("Sutiã nadador", "pictures/image-840055.jpeg", "sutiã", 20),
  new Item("Sutiã reforçado", "pictures/image-850055.jpeg", "sutiã", 25),
  new Item("Fio cinta", "pictures/image-860055.jpeg", "fio", 20),
  new Item("Camisola Tully", "pictures/image-880055.jpeg", "camisola", 22),
  new Item(
    "Cueca box poliéster adulto",
    "pictures/image-900056.jpeg",
    "cueca",
    8
  ),
  new Item(
    "Calça microfibra plus",
    "pictures/image-910055.jpeg",
    "calcinha",
    11
  ),
  new Item(
    "Cueca box infantil poliéster",
    "pictures/image-920056.jpeg",
    "cueca",
    5.5
  ),
  new Item("Tanga microfibra", "pictures/image-100.jpeg", "tanga", 5.5),
  new Item(
    "Calça infantil algodão",
    "pictures/image-101.jpeg",
    "calcinha",
    5.7
  ),
  new Item("Conjunto microfibra", "pictures/image-108.jpeg", "conjunto", 22),
  new Item("Samba canção", "pictures/image-114.jpeg", "cueca", 15),
  new Item("Camisola algodão", "pictures/image-115.jpeg", "camisola", 21),
  new Item("Babydoll algodão", "pictures/image-116.jpeg", "babydoll", 21),
  new Item("Camisola algodão", "pictures/image-117.jpeg", "camisola", 22),
  new Item("Camisola suede", "pictures/image-118.jpeg", "camisola", 21),
  new Item("Box infantil romantique", "pictures/image-121.jpeg", "cueca", 5.5),
  new Item(
    "Calça infantil romantique",
    "pictures/image-122.jpeg",
    "calcinha",
    3.5
  ),
  new Item("Calça algodão", "pictures/image-123.jpeg", "calcinha", 6),
  new Item("Camisola suede", "pictures/image-124.jpeg", "camisola", 21),
  new Item("Box poliamida infantil", "pictures/image-125.jpeg", "cueca", 8),
  new Item(
    "Calça cós virado em microfibra",
    "pictures/image-126.jpeg",
    "calcinha",
    6.5
  ),
  new Item("Sutiã amamentação", "pictures/image-1111.jpeg", "sutiã", 23),
  new Item("teste", "pictures/image-1111.jpeg", "cueca", 23),
];

function itemsEqual(item1, item2) {
  return (
    item1.title === item2.title &&
    item1.picture === item2.picture &&
    item1.category === item2.category
  );
}

tempArr = JSON.parse(localStorage.getItem("arrayItems")) || itemsArr;

itemsArr.forEach((item) => {
  if (tempArr.findIndex((tempItem) => itemsEqual(tempItem, item)) === -1) {
    tempArr.push(item);
  }
});

tempArr = tempArr.filter((tempItem) => {
  return itemsArr.findIndex((item) => itemsEqual(item, tempItem)) !== -1;
});

// Atualiza o itemsArr com o tempArr sincronizado
itemsArr = tempArr;

// Atualiza o localStorage
localStorage.setItem("arrayItems", JSON.stringify(tempArr));

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

export function filterItems(category) {
  if (category === "todos") {
    let arrayToReturn =
      JSON.parse(localStorage.getItem("arrayItems")) || itemsArr;
    return arrayToReturn;
  }

  if (category !== "favorito") {
    return elements.filter((item) => item.category === category);
  } else {
    return elements.filter((item) => item.isFavorite === true);
  }
}
