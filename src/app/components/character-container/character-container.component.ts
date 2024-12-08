import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-character-container',
  standalone: false,
  
  templateUrl: './character-container.component.html',
  styleUrl: './character-container.component.scss'
})
export class CharacterContainerComponent {
  @Input({required: true}) characterName: string = '';
  @Input({required: true}) characterImgPath: string = '';
  @Input({required: true}) characterAlt: string = '';
  @Input({required: true}) characterNickname: string = '';
  @Input({required: true}) characterAge: number = 0;
  @Input({required: true}) characterGenre: string = '';
  @Input({required: true}) characterSpecie: string = '';
  @Input({required: true}) characterReward: string = '';
  @Input({required: true}) characterIndex: number = 0;

  @Output() onCharacterSelectEmitt = new EventEmitter<number>();

  selectCharacter() {
    this.onCharacterSelectEmitt.emit(this.characterIndex);
  }
}
