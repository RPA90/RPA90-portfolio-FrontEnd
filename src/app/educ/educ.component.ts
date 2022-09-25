import { Component, OnInit } from '@angular/core';
import bodyText from "src/assets/body-content.json";

@Component({
  selector: 'app-educ',
  templateUrl: './educ.component.html',
  styleUrls: ['./educ.component.css']
})
export class EducComponent implements OnInit {
  education1:string= bodyText.eduPar1;
  education2:string= bodyText.eduPar1;

  constructor() { }

  ngOnInit(): void {
  }

}
