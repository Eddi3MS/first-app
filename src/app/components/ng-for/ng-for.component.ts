import { Component, Input } from '@angular/core';
import { PokemonType } from '../../models/pokemon';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css'],
})
export class NgForComponent {
  @Input()
  pokemons!: PokemonType[];

  constructor() {}
}
