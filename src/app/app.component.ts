import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My First Angular App';
  public cards: Array<any> = [
    {text: 'Card 1'},
    {text: 'Card 2'},
    {text: 'Card 3'},
    {text: 'Card 4'},
    {text: 'Card 5'},
    {text: 'Card 6'},
    {text: 'Card 7'},
    {text: 'Card 8'},
    {text: 'Card 9'}
  ];
  addCard(cardText: string) {
    this.cards.push({text: cardText});
  }
}
