import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { HandComponent } from '../hand/hand.component';

@Component({
  selector: 'app-raven',
  templateUrl: './raven.component.html',
  styleUrls: ['./raven.component.css']
})
export class RavenComponent implements OnInit {

  @Input() Number: string;

  @ViewChild(HandComponent)
  private handComponent: HandComponent;

  Ravens = new Array<String>();
  ClickedRavens: any[] = [];

  constructor() { }

  ngOnInit() {
    var i = 1;
    do {
      this.Ravens.push('../../assets/misc/raven.png');
      i++;
    } while(i <= parseInt(this.Number));
  }

  clickRaven(raven) {
    this.ClickedRavens[raven] = !this.ClickedRavens[raven];

    // this.handComponent.removeEntireHand();
    // this.handComponent.fillHand();
  }

}
