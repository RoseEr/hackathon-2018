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

  removeSelectedCards() {
    for(var i = 0; i < this.SelectedCards.length; i++) {
      if(this.SelectedCards[i]) {
        console.log(i + ' -> ' + this.SelectedCards[i]);
      }
    }

    for(i = this.Cards.length - 1; i >= 0; i--) {
      console.log(this.SelectedCards[i]);
      if(this.SelectedCards[i]) {
        console.log('removing... ' + i + ' -> ' + this.Cards[i]);
        this.Cards.splice(i, 1);
      }
    }
    
  }

  fillHand() {
    while(this.Cards.length < parseInt(this.Size)) {
      if(this.AvailableVisions.length == 0) {
        for(var x = 1; x <= 83; x++) {
          this.AvailableVisions.push(x);
        }
      }

      var randVision = Math.floor(Math.random() * this.AvailableVisions.length) + 1;
      this.Cards.push('../../assets/visions/cc' + this.AvailableVisions[randVision - 1] + '.jpg');
      this.AvailableVisions.splice((randVision - 1), 1);
     
    }
  }

}
