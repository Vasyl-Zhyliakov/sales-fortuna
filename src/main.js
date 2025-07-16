import './styles/main.scss';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  loop: true,
  navigation: {
    nextEl: '.swiper__button-next',
    prevEl: '.swiper__button-prev',
  },
  pagination: {
    el: '.swiper__pagination',
    type: 'bullets',
    clickable: true,
  },

  slideToClickedSlide: true,
  autoHeight: false,
  breakpoints: {
    0: {
      spaceBetween: 18,
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    768: {
      spaceBetween: 18,
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    1024: {
      spaceBetween: 18,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    1440: {
      spaceBetween: 18,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});
