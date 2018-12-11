import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ghost-container',
  templateUrl: './ghost-container.component.html',
  styleUrls: ['./ghost-container.component.css']
})

export class GhostContainerComponent implements OnInit {

  psychics = new Array<String>('1', '2', '3');

  constructor() { }

  ngOnInit() {
  }

}
