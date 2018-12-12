import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-psychic-select',
  templateUrl: './psychic-select.component.html',
  styleUrls: ['./psychic-select.component.css']
})
export class PsychicSelectComponent implements OnInit {
  socketService: SocketService;

  constructor(socketService: SocketService, private router: Router) { 
    this.socketService = socketService;
    this.socketService.startSession();
    this.socketService.receiveMessage((inboundMessage) => {
      var messageObject = JSON.parse(inboundMessage.data);
      if (messageObject.type === "welcome") {
        console.log('socket open');
      }

      if (messageObject.type === "player-creation") {
        console.log('player-creation response, ' + messageObject);
      }
      if (messageObject.type === "new-player") {
        console.log('new-player response, ' + messageObject);
      }
      if (messageObject.type === "ghost-creation") {
        console.log('new-player response, ' + messageObject);
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
    
    console.log('navigating to ghost');
    this.router.navigateByUrl('/ghost');
    console.log(selection);
  }

}
