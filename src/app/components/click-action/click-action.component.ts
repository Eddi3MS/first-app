import { Component } from '@angular/core';

@Component({
  selector: 'app-click-action',
  templateUrl: './click-action.component.html',
  styleUrls: ['./click-action.component.css'],
})
export class ClickActionComponent {
  isTrue: boolean;
  toggleIsTrue: () => void;

  constructor() {
    this.isTrue = false;
    this.toggleIsTrue = function () {
      this.isTrue = !this.isTrue;
    };
  }
}
