import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-psychic-container',
  templateUrl: './psychic-container.component.html',
  styleUrls: ['./psychic-container.component.css']
})
export class PsychicContainerComponent implements OnInit {
  socketService: SocketService;

  constructor(socketService: SocketService) { 
    this.socketService = socketService;
    this.socketService.startSession();
    this.socketService.receiveMessage((inboundMessage) => {
			console.log(inboundMessage);
    });
  }

  ngOnInit() { }

  startConnection() {
    var message = {
      "playerId": 'psychic1',
      "type": 'new-connection'
    }
    this.socketService.sendMessage(JSON.stringify(message));
  }
}
