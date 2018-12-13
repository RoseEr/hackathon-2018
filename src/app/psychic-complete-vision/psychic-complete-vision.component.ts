import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Psychic } from '../psychic';

@Component({
  selector: 'app-psychic-complete-vision',
  templateUrl: './psychic-complete-vision.component.html',
  styleUrls: ['./psychic-complete-vision.component.css']
})
export class PsychicCompleteVisionComponent implements OnInit {
  _psychic: Psychic;

  @Input() imageNumber: String;
  @Input()
  set psychic(psychic: Psychic) {
    console.log('psychic has changed', psychic);
    this._psychic = psychic;
    this.characterImage = '../../assets/characters/char' + psychic.person+ '.jpg';
    this.locationImage = '../../assets/locations/lc' + psychic.place + '.jpg';
    this.objectImage = '../../assets/objects/oc' + psychic.object + '.jpg';
    this.psychicImage = '../../assets/psychics/pi' + psychic.playerId + '.png';
  }
  @Output() wasClicked = new EventEmitter<Number>();

  characterImage: String;
  locationImage: String;
  objectImage: String;
  psychicImage: String;

  constructor() { }

  ngOnInit() { }

  psychicClicked() {
    this.wasClicked.emit(this._psychic.playerId);
  }
}
