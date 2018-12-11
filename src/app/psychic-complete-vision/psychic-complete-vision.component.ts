import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-psychic-complete-vision',
  templateUrl: './psychic-complete-vision.component.html',
  styleUrls: ['./psychic-complete-vision.component.css']
})
export class PsychicCompleteVisionComponent implements OnInit {

  @Input() imageNumber: String;
  @Output() wasClicked = new EventEmitter<String>();

  characterImage: String;
  locationImage: String;
  objectImage: String;
  psychicImage: String;

  constructor() { }

  ngOnInit() {
    this.characterImage = '../../assets/characters/char' + this.imageNumber + '.jpg';
    this.locationImage = '../../assets/locations/lc' + this.imageNumber + '.jpg';
    this.objectImage = '../../assets/objects/oc' + this.imageNumber + '.jpg';
    this.psychicImage = '../../assets/psychics/pi' + this.imageNumber + '.png';
  }

  psychicClicked() {
    this.wasClicked.emit(this.imageNumber);
  }
}
