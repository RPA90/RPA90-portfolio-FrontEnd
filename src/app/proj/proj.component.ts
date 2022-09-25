import { Component, OnInit } from '@angular/core';
import bodyText from "src/assets/body-content.json"

@Component({
  selector: 'app-proj',
  templateUrl: './proj.component.html',
  styleUrls: ['./proj.component.css']
})
export class ProjComponent implements OnInit {
  project1:string= bodyText.projPar1;
  project2:string= bodyText.projPar1;

  constructor() { }

  ngOnInit(): void {
  }

}
