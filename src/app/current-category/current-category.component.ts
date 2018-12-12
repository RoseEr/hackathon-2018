import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-current-category',
  templateUrl: './current-category.component.html',
  styleUrls: ['./current-category.component.css']
})
export class CurrentCategoryComponent implements OnInit {
  @Input() Size: Number;
  @Input() ImageType: string;

  CategoryImages = new Array<String>();
  AvailableImages = new Array<Number>();

  constructor() { }

  ngOnInit() {
    for(var x = 1; x <= 18; x++) {
      this.AvailableImages.push(x);
    }

    console.log(this.ImageType);
    console.log(this.Size);

    while(this.CategoryImages.length < this.Size) {
      var randImage = Math.floor(Math.random() * this.AvailableImages.length) + 1;

      switch(this.ImageType)
      {
        case "characters":
          this.CategoryImages.push('../../assets/characters/char' + this.AvailableImages[randImage - 1] + '.jpg');
          break;

        case "locations":
          this.CategoryImages.push('../../assets/locations/lc' + this.AvailableImages[randImage - 1] + '.jpg');
          break;

        case "objects":
          this.CategoryImages.push('../../assets/objects/oc' + this.AvailableImages[randImage - 1] + '.jpg');
          break;

        default:
          console.log('Default.');
          this.CategoryImages.push('../../assets/characters/char' + this.AvailableImages[randImage - 1] + '.jpg');
      }

      
      this.AvailableImages.splice((randImage - 1), 1);
    }
  }

}
