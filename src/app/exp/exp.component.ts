import { Component, OnInit } from '@angular/core';
import bodyText from "src/assets/body-content.json";

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {
  experience1:string= bodyText.expPar1;
  experience2:string= bodyText.expPar2;

  constructor() { }

  ngOnInit(): void {
  }

}
