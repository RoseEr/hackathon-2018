import { Component, OnInit, ViewChild } from '@angular/core';
import { HandComponent } from '../hand/hand.component';

@Component({
  selector: 'app-ghost-container',
  templateUrl: './ghost-container.component.html',
  styleUrls: ['./ghost-container.component.css']
})

export class GhostContainerComponent implements OnInit {

  @ViewChild(HandComponent)
  private handComponent: HandComponent;

  psychics = new Array<String>('1', '2', '3');
  SelectedCards: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  sendVisions(imageNumber: String) {
    // send to player
    // tell hand to remove SelectedCards
    // tell hand to redraw 

    this.handComponent.removeSelectedCards();
    this.handComponent.fillHand();

    this.SelectedCards = [];
  }

}
