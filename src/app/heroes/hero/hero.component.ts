import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = 'Iroman';
  public age: number = 45;

  get capitalizeName():string{
    return this.name.toUpperCase();

  }

  getHeroDescription():string{
    return `${this.name} - ${ this.age }`;

  }

  changeHero():void {
    this.name='Cyclope';

  }

  changeAge():void{
    this.age=30;
  }

  resetForm():void{
    this.name='Iroman';
    this.age= 45;
  }

}
