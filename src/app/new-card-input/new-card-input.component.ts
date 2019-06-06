import { Component, EventEmitter, OnInit, Output, HostListener } from '@angular/core';

@Component({
  selector: 'app-new-card-input',
  templateUrl: './new-card-input.component.html',
  styleUrls: ['./new-card-input.component.css'],
  host: { 'class': 'col-4' }
})
export class NewCardInputComponent implements OnInit {

  public newCard: any = { text: '' };
  @Output() onCardAdd = new EventEmitter<string>();
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === "Enter" && this.newCard.text.length > 0) {
      this.addCard(this.newCard.text);
    }
  }
  addCard(text) {
    this.onCardAdd.emit(text);
    this.newCard.text = '';
  }
  constructor() { }

  ngOnInit() {
  }

}
