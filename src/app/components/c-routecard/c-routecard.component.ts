import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'c-routecard',
  styleUrl: './c-routecard.component.scss',
  templateUrl: './c-routecard.component.html',
})
export class CRoutecardComponent {
  isPopupOpen = false;

  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }
}
