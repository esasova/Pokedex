import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GenerationsService} from "../../../generations.service";

@Component({
  selector: 'app-generation',
  templateUrl: './generation.component.html',
  styleUrls: ['./generation.component.css']
})
export class GenerationComponent implements OnInit {
  generation: any;

  constructor(
    private route: ActivatedRoute,
    private generationsService: GenerationsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:any) => {
      const generation = params['generation'];
      this.generationsService.getOneGeneration(generation)
        .subscribe(generation => this.generation = generation)
    })
  }

}
