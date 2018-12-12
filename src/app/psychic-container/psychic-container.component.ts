import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-psychic-container',
  templateUrl: './psychic-container.component.html',
  styleUrls: ['./psychic-container.component.css']
})
export class PsychicContainerComponent implements OnInit {
  socketService: SocketService;
  Cards = new Array<Number>();

  constructor(socketService: SocketService) { 
    this.socketService = socketService;
    this.socketService.startSession();
    this.socketService.receiveMessage((inboundMessage) => {
			console.log(inboundMessage);
    });
    this.socketService.receiveMessage((inboundMessage) => {
      var messageObject = JSON.parse(inboundMessage.data);
      if (messageObject.type === "send-cards") {
        this.Cards = messageObject.cards;
      }
      if (messageObject.type === "welcome") {
        var message = {
          "playerId": '1',
          "type": 'new-connection'
        }
        this.socketService.sendMessage(JSON.stringify(message));
      }
		});
  }

  ngOnInit() { }
}
