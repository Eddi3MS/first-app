import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css'],
})
export class StringInterpolationComponent implements OnInit {
  name: string;
  numberOne: number;
  numberTwo: number;
  constructor() {
    this.name = 'Edson Marcelo';
    this.numberOne = 4;
    this.numberTwo = 12;
  }

  ngOnInit() {}
}
