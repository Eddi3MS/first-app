import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css'],
})
export class NgIfComponent {
  text: string;
  handleChange: (event: any) => void;

  constructor() {
    this.text = '';
    this.handleChange = function (event) {
      this.text = event.target.value;
    };
  }
}
