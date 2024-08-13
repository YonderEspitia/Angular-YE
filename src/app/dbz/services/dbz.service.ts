import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid}  from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }


  public characters:Character[] = [
    {
      id:uuid(),
      name:'krillin',
      power:100
    },
    {
      id:uuid(),
      name:'Goku',
      power: 9500
    },
    {
      id:uuid(),
      name:'Vegueta',
      power: 7500
    }
  ];

  addCharacter(character: Character):void{
    const newCharacter: Character={
        id:uuid(),...character

    }

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index:number){
  //   this.characters.splice(index,1);
  // }
deleteCharacteresById(id:string){

  this.characters= this.characters.filter(Character => Character.id !== id);
}

}
