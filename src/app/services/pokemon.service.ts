import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

import { IPokemon } from '../pokemons/interfaces/Pokemon/Pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemons(limit: number): Observable<IPokemon[]> {
    const pokemons = [];

    for (let i = 1; i < limit + 1; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      pokemons.push(this.http.get<IPokemon>(url));
    }

    return forkJoin(pokemons);
  }

  getPokemon(id: number): Observable<IPokemon> {
    return this.http.get<IPokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
