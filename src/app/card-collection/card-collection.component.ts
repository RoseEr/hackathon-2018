import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-collection',
  templateUrl: './card-collection.component.html',
  styleUrls: ['./card-collection.component.css']
})
export class CardCollectionComponent implements OnInit {
  @Input() AllVisions = new Array<Number>();

  showModal : Boolean;

  constructor() {
    this.showModal = false;
  }

  ngOnInit() {
    // for(var i = 1; i < 10; i++) {
    //   this.AllVisions.push(i);
    // }
  }

  hideModal() {
    this.showModal = false;
  }

  openModal() {
    this.showModal = true;
  }

}
