import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GenerationsComponent} from "./generations/generations.component";
import {GenerationComponent} from "./generation/generation.component";

const routes: Routes = [
  { path: '', component: GenerationsComponent },
  { path: ':generation', component: GenerationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerationsRoutingModule { }
