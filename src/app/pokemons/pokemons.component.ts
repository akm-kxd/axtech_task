import { Component, OnInit } from '@angular/core';

import { PokemonService } from './pokemon.service';
import { IPokemon } from './interfaces/Pokemon/Pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}

  pokemons: IPokemon[] = [];
  isLoading: boolean = true;
  limit: number = 6;

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons(this.limit).subscribe((pokemons) => {
      this.pokemons = pokemons;
      this.isLoading = false;
    });
  }

  showMore(): void {
    this.limit = this.limit + 6;
    this.getPokemons();
  }
}
