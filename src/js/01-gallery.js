// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const ulRef = document.querySelector('.gallery');
if (ulRef === null) return;

const markup = createMarkup(galleryItems);
ulRef.innerHTML = markup;

const simpleLightBox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'top',
  captionDelay: 250,
  doubleTapZoom:1,
});

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}"/>
            </a>
        </li>`
    )
    .join('');
}
