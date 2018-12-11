import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {

  @Input() Size: string;

  SelectedCards: Array<Number>;
  Cards = new Array<String>();

  constructor() { }

  ngOnInit() {
    var i = 1;
    do {
      this.Cards.push('../../assets/visions/cc' + i + '.jpg');
      i++;
    } while(i <= parseInt(this.Size));
  }

}
