import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-ghost-container',
  templateUrl: './ghost-container.component.html',
  styleUrls: ['./ghost-container.component.css']
})

export class GhostContainerComponent implements OnInit {
  socketService: SocketService;
  psychics = new Array<String>('1', '2', '3');
  SelectedCards: any[] = [];

  constructor(socketService: SocketService) { 
    console.log('in the constructor of ghost container');
    this.socketService = socketService;
    this.socketService.startSession();
  }

  ngOnInit() { }

  sendVisions(imageNumber: String) {
    this.socketService.sendMessage('test');
    // send to player
    // tell hand to remove SelectedCards
    // tell hand to redraw 

    this.SelectedCards = [];
  }

}
