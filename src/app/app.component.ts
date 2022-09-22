import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';
import bodyText from "../assets/body-content.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = "Bienvenidos a mi perfil de desarrollador | #YoProgramo";
  experience1:string= bodyText.expPar1;
  experience2:string= bodyText.expPar2;
  education1:string= bodyText.eduPar1;
  education2:string= bodyText.eduPar1;
  skills1:string= bodyText.skllPar1;
  skills2:string= bodyText.skllPar1;
  project1:string= bodyText.projPar1;
  project2:string= bodyText.projPar1;
}
