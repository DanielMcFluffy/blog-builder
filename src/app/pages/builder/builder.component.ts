import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/builder/header/header.component';

@Component({
  selector: 'app-builder',
  imports: [
    RouterOutlet,
    HeaderComponent,
  ],
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.scss'
})
export class BuilderComponent {

}
