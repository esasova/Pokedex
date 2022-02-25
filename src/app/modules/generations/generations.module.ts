import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerationsRoutingModule } from './generations-routing.module';
import {GenerationsComponent} from "./generations/generations.component";
import {GenerationComponent} from "./generation/generation.component";


@NgModule({
  declarations: [
    GenerationsComponent,
    GenerationComponent
  ],
  imports: [
    CommonModule,
    GenerationsRoutingModule
  ]
})
export class GenerationsModule { }
