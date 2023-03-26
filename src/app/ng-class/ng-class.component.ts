import { Component, Input } from '@angular/core';
import { PokemonType } from '../models/pokemon';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css'],
})
export class NgClassComponent {
  @Input()
  pokemons!: PokemonType[];

  constructor() {}
}
