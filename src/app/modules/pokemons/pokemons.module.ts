import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import {Pokemons_listComponent} from "./pokemons_list/pokemons_list.component";
import {PokemonComponent} from "./pokemon/pokemon.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    Pokemons_listComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    FormsModule
  ]
})
export class PokemonsModule { }
