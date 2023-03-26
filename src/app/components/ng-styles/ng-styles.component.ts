import { Component, Input } from '@angular/core';
import { PokemonType } from '../../models/pokemon';

@Component({
  selector: 'app-ng-styles',
  templateUrl: './ng-styles.component.html',
  styleUrls: ['./ng-styles.component.css'],
})
export class NgStylesComponent {
  @Input()
  pokemons!: PokemonType[];
}
