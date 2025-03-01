import { Component } from '@angular/core';
import { HeaderTabComponent } from '../header-tab/header-tab.component';

@Component({
  selector: 'app-builder-header',
  imports: [
    HeaderTabComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
