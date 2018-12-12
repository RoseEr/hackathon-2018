import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {

  @Input() Size: string;
  @Input() SelectedCards: any[];
  @Input() Cards = Array<Number>();
  
  AvailableVisions = new Array<Number>();

  constructor() { }

  ngOnInit() {
    if (!this.SelectedCards) {
      this.SelectedCards = new Array<any>();
    }
    if (!this.Cards) {
      this.Cards = new Array<Number>();
    }

    this.SelectedCards.map(e=> false);  

    for(var x = 1; x <= 83; x++) {
      this.AvailableVisions.push(x);
    }

    while(this.Cards.length < parseInt(this.Size)) {
      var randVision = Math.floor(Math.random() * this.AvailableVisions.length) + 1;

      this.Cards.push(this.AvailableVisions[randVision - 1]);
      this.AvailableVisions.splice((randVision - 1), 1);
    }
  }

  cardSelected(card) {
    this.SelectedCards[card] = !this.SelectedCards[card];
  }

  removeSelectedCards() : Array<any> {
    for(var i = 0; i < this.SelectedCards.length; i++) {
      if(this.SelectedCards[i]) {
        console.log(i + ' -> ' + this.SelectedCards[i]);
      }
    }

    var returnCardIds = new Array<any>();

    for(i = this.Cards.length - 1; i >= 0; i--) {
      console.log(this.SelectedCards[i]);
      if(this.SelectedCards[i]) {
        console.log('removing... ' + i + ' -> ' + this.Cards[i]);
        var card = this.Cards[i];
        returnCardIds.push(card);
        this.Cards.splice(i, 1);
      }
    }
    
    return returnCardIds;
  }

  fillHand() {
    while(this.Cards.length < parseInt(this.Size)) {
      if(this.AvailableVisions.length == 0) {
        for(var x = 1; x <= 83; x++) {
          this.AvailableVisions.push(x);
        }
      }

      var randVision = Math.floor(Math.random() * this.AvailableVisions.length) + 1;
      this.Cards.push(this.AvailableVisions[randVision - 1]);
      this.AvailableVisions.splice((randVision - 1), 1);
     
    }
  }

}
