import { Component, OnInit } from '@angular/core';
import {GenerationsService} from "../../../generations.service";

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {
  generations:any = [];

  constructor(private generationsService:GenerationsService) { }

  ngOnInit(): void {
    this.generationsService.getGenerations()
      .subscribe((response: any) => {
        this.generations = response.results
      })
  }

}
