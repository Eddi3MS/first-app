import { Component, Input, OnInit } from '@angular/core';
import { PokemonType } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {
  @Input()
  pokemon!: PokemonType;

  constructor() {}

  ngOnInit() {}
}
