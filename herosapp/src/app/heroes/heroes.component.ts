import { Component, OnInit } from '@angular/core';
import { HEROES } from "../mock-heroes";
import { Hero } from "../hero";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {


  //get hero data
  heroes = HEROES;
  
  //user selection from DOM
  selectedHero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  //when user clicks on 
  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }



}
