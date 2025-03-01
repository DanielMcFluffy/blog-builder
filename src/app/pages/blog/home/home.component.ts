import { Component, inject } from '@angular/core';
import { BlogCardComponent } from '../../../components/blog/blog-card/blog-card.component';
import { HttpService } from '../../../services/http.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    BlogCardComponent,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private readonly _httpService = inject(HttpService);

  blogs = this._httpService.blogs;

}
