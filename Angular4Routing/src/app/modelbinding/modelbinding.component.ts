import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modelbinding',
  templateUrl: './modelbinding.component.html',
  styleUrls: ['./modelbinding.component.css']
})

export class Hero {
 id: number;
 name: string;
}
export class ModelbindingComponent {
  hero: Hero = {
    id: 1 ,
    name : 'Angular4'
  };
}
