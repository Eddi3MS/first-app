import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent {
  handleChangeColor: (ref: any) => void;

  constructor() {
    this.handleChangeColor = function (ref) {
      const randomColor = `rgb(${Math.random() * 255}, ${
        Math.random() * 255
      }, ${Math.random() * 255})`;
      ref.style.border = `1px solid ${randomColor}`;
      ref.style.backgroundColor = randomColor;

      const getContrast = (rgbColor: string) => {
        const r = parseInt(rgbColor.slice(4, rgbColor.indexOf(',')), 10);
        const g = parseInt(
          rgbColor.slice(rgbColor.indexOf(',') + 1, rgbColor.lastIndexOf(',')),
          10
        );
        const b = parseInt(
          rgbColor.slice(rgbColor.lastIndexOf(',') + 1, rgbColor.length),
          10
        );
        const yiq = (r * 299 + g * 587 + b * 114) / 1000;
        return yiq >= 128 ? '#000' : '#fff';
      };

      const textColor = getContrast(randomColor);
      ref.style.color = textColor;
    };
  }
}
