import { Component } from '@angular/core';
import { PokemonType } from './models/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pokemons: PokemonType[];

  constructor() {
    this.pokemons = [
      {
        id: 1,
        name: 'Pikachu',
        type: 'electric',
        isCool: true,
      },
      {
        id: 2,
        name: 'Charmander',
        type: 'fire',
        isCool: false,
      },
      {
        id: 3,
        name: 'Bulbasaur',
        type: 'nature',
        isCool: false,
      },
    ];
  }
}
