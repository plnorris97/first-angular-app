import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card:any;
  name: string = 'Joe';
  myAdjective: string = 'happy';

  constructor() { }

  ngOnInit() {
  }

}
