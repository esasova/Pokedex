import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GenerationsApi} from "./models/generations-api";

@Injectable({
  providedIn: 'root'
})
export class GenerationsService {

  constructor(private http: HttpClient) { }
  getGenerations () {
    const url = 'https://pokeapi.co/api/v2/generation';
    return this.http.get<GenerationsApi>(url);
  }
  getOneGeneration (generation:string) {
    return this.http.get(`https://pokeapi.co/api/v2/generation/${generation}`)
  }
}
