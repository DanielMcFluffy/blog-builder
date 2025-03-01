import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/blog/header/header.component';
import { FooterComponent } from '../../components/blog/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
