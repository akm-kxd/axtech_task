import { Component, OnInit } from '@angular/core';

import { PokemonService } from '../services/pokemon.service';
import { LimitService } from '../services/limit.service';
import { IPokemon } from './interfaces/Pokemon/Pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit {
  constructor(
    private pokemonService: PokemonService,
    private limitService: LimitService
  ) {}

  pokemons: IPokemon[] = [];
  isLoading: boolean = true;
  limit: number;

  ngOnInit(): void {
    this.refreshLimit();
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons(this.limit).subscribe((pokemons) => {
      this.pokemons = pokemons;
      this.isLoading = false;
    });
  }

  showMore(): void {
    this.limitService.setLimit(this.limit + 6);
    this.refreshLimit();
    this.getPokemons();
  }

  refreshLimit(): void {
    this.limit = this.limitService.getLimit();
  }
}
