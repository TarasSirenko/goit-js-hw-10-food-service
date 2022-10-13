import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

//  create markup ===========================================================
console.log(galleryItems);
const galleryContainerRef = document.querySelector('.gallery');

const createGalleryMarkup = arrPicturesRefs => {
  return arrPicturesRefs
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
};
const galleryItemMarkup = createGalleryMarkup(galleryItems);
// add markup ======================
galleryContainerRef.innerHTML = galleryItemMarkup;
//  and create markup ===========================================================

const options = { captionsData: 'alt', captionDelay: 250 };
const gallery = new SimpleLightbox('.gallery a', options);
