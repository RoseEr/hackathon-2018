import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-collection',
  templateUrl: './card-collection.component.html',
  styleUrls: ['./card-collection.component.css']
})
export class CardCollectionComponent implements OnInit {
  @Input() AllVisions = new Array<Number>();

  constructor() { }

  ngOnInit() {
    
  }

}
