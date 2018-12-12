import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-psychic-select',
  templateUrl: './psychic-select.component.html',
  styleUrls: ['./psychic-select.component.css']
})
export class PsychicSelectComponent implements OnInit {
  socketService: SocketService;
  isNotSelected: Boolean = true;
  showGhost: Boolean = false;
  showPsychic: Boolean = false;

  constructor(socketService: SocketService, private router: Router) { 
    this.socketService = socketService;
    this.socketService.startSession();
    this.socketService.receiveMessage((inboundMessage) => {
      var messageObject = JSON.parse(inboundMessage.data);
      if (messageObject.type === "welcome") {
        console.log('socket open');
      }
		});
  }

  ngOnInit() { }

  playerSelectionClicked(selection) {
    var message = {
      "type": "player-selection",
      "selection": selection
    }
    this.socketService.sendMessage(JSON.stringify(message));
    
    this.isNotSelected = false;
    if (selection === 'ghost') {
      this.showGhost = true;
    } else {
      this.showPsychic = true;
    }

    console.log(selection);
  }
}