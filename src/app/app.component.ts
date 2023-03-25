import { Component } from '@angular/core';

type PokemonType = { id: number; name: string; type: string; isCool: boolean };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string;
  numberOne: number;
  numberTwo: number;
  isPokemon: boolean;
  togglePokemon: () => void;

  imageSrc: string;
  h1Title: string;

  favoriteColor: string;

  pokemon: string;
  handleChange: (event: any) => void;

  handleClick: (value: any) => void;

  pokemons: PokemonType[];

  constructor() {
    this.name = 'Edson Marcelo';
    this.numberOne = 1;
    this.numberTwo = 2;

    this.isPokemon = false;
    this.togglePokemon = function () {
      this.isPokemon = !this.isPokemon;
    };

    this.h1Title = 'Hello World';

    this.imageSrc =
      'https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0';

    this.favoriteColor = 'black';

    this.pokemon = '';
    this.handleChange = function (event) {
      this.pokemon = event.target.value;
    };

    this.handleClick = function (ref) {
      const randomColor = `rgb(${Math.random() * 255}, ${
        Math.random() * 255
      }, ${Math.random() * 255})`;
      ref.style.border = `1px solid ${randomColor}`;
    };

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
