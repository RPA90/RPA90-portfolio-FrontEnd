import { Component, OnInit } from '@angular/core';
import bodyText from "src/assets/body-content.json"

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills1:string= bodyText.skllPar1;
  skills2:string= bodyText.skllPar1;

  constructor() { }

  ngOnInit(): void {
  }

}
