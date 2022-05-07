
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);


// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";

const addGalleryItems = document.querySelector('.gallery');//поиск класса в HTML
const galleryMarkup = createGallereyCard(galleryItems);//ссылка на createGallereyCard
addGalleryItems.insertAdjacentHTML("beforeend", galleryMarkup);//добавление елементов
// Реализация делегирования на div.gallery и получение url большого изображения.
// addGalleryItems.addEventListener("click", handGalleryClick);

// создание шаблоной разметки
function createGallereyCard(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        
        `;
    })
    .join(''); 
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  showCounter: false,
})

