import { Component } from '@angular/core';
import { CRoutecardComponent } from '../c-routecard';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  imports: [CRoutecardComponent, MatTooltipModule],
  selector: 'c-routelist',
  styleUrl: './c-routelist.component.scss',
  templateUrl: './c-routelist.component.html',
})
export class CRoutelistComponent {
  isFiltersOpen = false;

  openFilters() {
    this.isFiltersOpen = true;
  }

  closeFilters() {
    this.isFiltersOpen = false;
  }
}
