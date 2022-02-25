import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }
  getPokemons () {
    return this.http.get(`${this.apiUrl}?limit=12`);
  }
  getOnePokemon (pokemon:string) {
    return this.http.get(`${this.apiUrl}/${pokemon}`);
  }
  getMorePokemons (url: string) {
    return this.http.get(url)
  }
}
