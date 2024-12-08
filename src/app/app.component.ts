import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  showCharacterSelected(character: Character) {
    if (character.genre === 'FEMININO') {
      window.alert(`${character.name} foi selecionada!`);
    } else {
      window.alert(`${character.name} foi selecionado!`);
    }
    
  }
  
}

interface Character {
  name?: string;
  genre?: string;
}
