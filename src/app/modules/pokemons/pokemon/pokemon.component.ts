import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokemonsService} from "../../../pokemons.service";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private pokeService: PokemonsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      const pokemon = params['pokemon'];
      this.pokeService.getOnePokemon(pokemon).subscribe(pokemon => this.pokemon = pokemon)
    })
  }

}
