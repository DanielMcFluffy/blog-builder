import { Component, inject } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { RouterLink } from '@angular/router';
import { BlogCardComponent } from '../../../components/builder/blog-card/blog-card.component';

@Component({
  selector: 'app-main',
  imports: [
    RouterLink,
    BlogCardComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

private readonly _httpService = inject(HttpService);

blogs = this._httpService.blogs;

}
