import { Component, OnInit } from '@angular/core';
import { PokemonType } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
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

  ngOnInit(): void {}
}
