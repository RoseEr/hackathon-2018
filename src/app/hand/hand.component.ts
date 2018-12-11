import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {

  @Input() Size: string;

  //SelectedCards: Array<Number>;
  SelectedCards: any[] = [];
  Cards = new Array<String>();
  AvailableVisions = new Array<Number>();

  constructor() {
    this.SelectedCards.map(e=> false);  
  }

  ngOnInit() {
    var i = 1;
    for(var x = 0; x < 83; x++) {
      this.AvailableVisions.push(x);
    }

    do {
      var randVision = Math.floor(Math.random() * this.AvailableVisions.length) + 1;

      this.Cards.push('../../assets/visions/cc' + randVision + '.jpg');
      this.AvailableVisions.splice((randVision - 1), 1);

      i++;
    } while(i <= parseInt(this.Size));
  }

  cardSelected(card) {
    this.SelectedCards[card] = !this.SelectedCards[card];
  }

}
