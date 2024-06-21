let modal = document.getElementById('imageModal');
let modalImg = document.getElementById('img01');
let captionText = document.getElementById('caption');

export function turnModal(source, alt){
  modal.style.display = "block";
  modalImg.src = source;
  captionText.innerHTML = alt;

  let span = document.querySelector('.close');
  span.addEventListener('click', ()=>{
    modal.style.display = 'none';
  })
}