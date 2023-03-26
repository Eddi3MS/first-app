import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonType } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {
  @Input()
  pokemon!: PokemonType;

  @Output()
  toogleIsCool: EventEmitter<number> = new EventEmitter();

  constructor() {}

  onToogle() {
    this.toogleIsCool.emit(this.pokemon.id);
  }

  ngOnInit() {}
}
