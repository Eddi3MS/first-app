import { Component } from '@angular/core';

@Component({
  selector: 'app-html-properties',
  templateUrl: './html-properties.component.html',
  styleUrls: ['./html-properties.component.css'],
})
export class HtmlPropertiesComponent {
  imageSrc: string;
  h1Title: string;

  constructor() {
    this.h1Title = 'Hello World';
    this.imageSrc =
      'https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0';
  }
}
