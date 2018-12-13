import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoryCard } from '../CategoryCard';

@Component({
  selector: 'app-current-category',
  templateUrl: './current-category.component.html',
  styleUrls: ['./current-category.component.css']
})
export class CurrentCategoryComponent implements OnInit {
  _CategoryImages: Array<CategoryCard>;
  @Input() Size: Number;
  @Input() ImageType: string;

  @Output() imageClicked = new EventEmitter<Number>();

  @Input()
  set CategoryImages(CategoryImages: Array<CategoryCard>) {
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
