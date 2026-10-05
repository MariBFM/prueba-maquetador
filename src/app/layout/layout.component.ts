import { Component } from '@angular/core';
import {
  CNavComponent,
  CRoutelistComponent,
  CTopsliderComponent,
  CFooterComponent,
  CHeaderComponent,
} from '../components';

@Component({
  selector: 'app-layout',
  imports: [
    CNavComponent,
    CRoutelistComponent,
    CTopsliderComponent,
    CFooterComponent,
    CHeaderComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
