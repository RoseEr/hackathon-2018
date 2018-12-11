import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-raven',
  templateUrl: './raven.component.html',
  styleUrls: ['./raven.component.css']
})
export class RavenComponent implements OnInit {

  @Input() Number: string;

  Ravens = new Array<String>();

  constructor() { }

  ngOnInit() {
    var i = 1;
    do {
      this.Ravens.push('../../assets/misc/raven.png');
      i++;
    } while(i <= parseInt(this.Number));
  }

}
