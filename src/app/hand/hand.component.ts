import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {

  @Input() Size: string;
  @Input() SelectedCards: any[];

  //SelectedCards: Array<Number>;
  //SelectedCards: any[] = [];
  Cards = new Array<String>();
  AvailableVisions = new Array<Number>();

  constructor() { }

  ngOnInit() {
    this.SelectedCards.map(e=> false);  

    for(var x = 1; x <= 83; x++) {
      this.AvailableVisions.push(x);
    }

    while(this.Cards.length < parseInt(this.Size)) {
      var randVision = Math.floor(Math.random() * this.AvailableVisions.length) + 1;

      this.Cards.push('../../assets/visions/cc' + this.AvailableVisions[randVision - 1] + '.jpg');
      this.AvailableVisions.splice((randVision - 1), 1);

    }
  }

  cardSelected(card) {
    this.SelectedCards[card] = !this.SelectedCards[card];
  }

  fillHand() {
    while(this.Cards.length < parseInt(this.Size)) {
      var randVision = Math.floor(Math.random() * this.AvailableVisions.length) + 1;
      this.Cards.push('../../assets/visions/cc' + this.AvailableVisions[randVision - 1] + '.jpg');
      this.AvailableVisions.splice((randVision - 1), 1);
     
    }
  }

}
