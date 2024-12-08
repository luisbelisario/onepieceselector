import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  
  characterList = [
    {name: 'MONKEY D. LUFFY',
      imgPath: '/LUFFY.jpg',
      alt: 'luffy',
      nickname: 'CHAPÉU DE PALHA', 
      age: 17, genre: 'MASCULINO', 
      specie: 'HUMANA', reward: 3000000000},
    {name: 'RORONOA ZORO',
      imgPath: '/ZORO.jpg',
      alt: 'zoro', 
      nickname: 'CAÇADOR DE PIRATAS', 
      age: 19, genre: 'MASCULINO', 
      specie: 'HUMANA', reward: 1111000000},
    {name: 'NAMI',
      imgPath: '/NAMI.jpg',
      alt: 'nami',
      nickname: 'GATUNA', 
      age: 18, genre: 'FEMININO', 
      specie: 'HUMANA', reward: 366000000},
    {name: 'SANJI',
      imgPath: '/SANJI.jpg',
      alt: 'sanji',
      nickname: 'PERNA PRETA', 
      age: 19, genre: 'MASCULINO', 
      specie: 'HUMANA', reward: 1032000000}
  ]

  @Output() onCharacterSelectEmitt = new EventEmitter<object>();

  showCharacterSelected(index: number) {
    const character = this.characterList.at(index);
    this.onCharacterSelectEmitt.emit({name: character?.name, genre: character?.genre});
  }
}
