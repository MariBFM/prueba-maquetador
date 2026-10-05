import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  imports: [],
  selector: 'c-topslider',
  styleUrl: './c-topslider.component.scss',
  templateUrl: './c-topslider.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CTopsliderComponent {
  swipeNext() {
    const swiperEl = document.querySelector('swiper-container');

    if (swiperEl) {
      swiperEl.swiper.slideNext();
    }
  }
  swipePrev() {
    const swiperEl = document.querySelector('swiper-container');

    if (swiperEl) {
      swiperEl.swiper.slidePrev();
    }
  }
}
