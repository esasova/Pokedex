import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Pokemons_listComponent} from "./pokemons_list/pokemons_list.component";
import {PokemonComponent} from "./pokemon/pokemon.component";

const routes: Routes = [
  { path: 'pokemons', component: Pokemons_listComponent },
  { path: 'pokemons/:pokemon', component: PokemonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
