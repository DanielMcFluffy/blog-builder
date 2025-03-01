import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  blogs = [
    {
      id: 1,
      title: 'First blog',
      content: 'first content',
    },
    {
      id: 2,
      title: 'second blog',
      content: 'second content',
    }
  ]
}
