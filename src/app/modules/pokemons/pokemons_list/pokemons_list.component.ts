import { Component, OnInit } from '@angular/core';
import {PokemonsService} from "../../../pokemons.service";
import {FormSearchPokemon} from "../../../models/FormSearchPokemon";

@Component({
  selector: 'app-pokemons_list',
  templateUrl: './pokemons_list.component.html',
  styleUrls: ['./pokemons_list.component.css']
})
export class Pokemons_listComponent implements OnInit {
  pokemons:any=[];
  next:string='';
  previous:string='';
  formSearchPokemon = new FormSearchPokemon();

  constructor(private pokeService:PokemonsService) { }

  ngOnInit(): void {
    this.getAllPokemons()
  }
  getAllPokemons () {
    this.pokeService.getPokemons()
      .subscribe((response: any) => {
        this.pokemons = response.results
        this.next = response.next
        this.previous = response.previous
      })
  }
  getMorePokemons (url: string) {
    this.pokeService.getMorePokemons(url)
      .subscribe((response: any) => {
        this.pokemons = response.results
        this.next = response.next
        this.previous = response.previous
      })
  }
  searchPokemon (namePokemon: string) {
    if(namePokemon.length > 0) {
      this.pokeService.getOnePokemon(namePokemon)
        .subscribe((response:any) => {
          this.pokemons = []
          this.pokemons.push(response)
        })
    } else {
      this.getAllPokemons()
    }

  }
}
