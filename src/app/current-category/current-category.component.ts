import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-current-category',
  templateUrl: './current-category.component.html',
  styleUrls: ['./current-category.component.css']
})
export class CurrentCategoryComponent implements OnInit {
  private _CategoryImages: Array<Number>;
  @Input() Size: Number;
  @Input() ImageType: string;

  @Output() imageClicked = new EventEmitter<Number>();

  @Input()
  set CategoryImages(CategoryImages: Array<Number>) {
    this._CategoryImages = CategoryImages;

    switch(this.ImageType) {
      case "characters":
        this.Category = 'characters/char';
        break;

      case "locations":
        this.Category = 'locations/lc';
        break;

      case "objects":
        this.Category = 'objects/oc';
        break;

      default:
        console.log('Default.');
        this.Category = 'characters/char';
    }
  }
  Category: String;
  AvailableImages = new Array<Number>();

  constructor() { }

  ngOnInit() {
    switch(this.ImageType) {
      case "characters":
        this.Category = 'characters/char';
        break;

      case "locations":
        this.Category = 'locations/lc';
        break;

      case "objects":
        this.Category = 'objects/oc';
        break;

      default:
        console.log('Default.');
        this.Category = 'characters/char';
    }
  }

  handleClick(image) {
    this.imageClicked.emit(image);
  }

}
