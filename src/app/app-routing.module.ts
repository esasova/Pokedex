import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
  loadChildren: () =>
    import('./modules/generations/generations.module').then((mod) => mod.GenerationsModule)
  },
  {
    path: 'pokemons',
    loadChildren: () =>
      import('./modules/pokemons/pokemons.module').then((mod) => mod.PokemonsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
