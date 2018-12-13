import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-psychic-container',
  templateUrl: './psychic-container.component.html',
  styleUrls: ['./psychic-container.component.css']
})
export class PsychicContainerComponent implements OnInit {
  socketService: SocketService;
  Visions = new Array<Number>();
  People = new Array<Number>();
  Places = new Array<Number>();
  Things = new Array<Number>();
  PlayerId = Number;

  AllVisions = new Array<Number>();

  constructor(socketService: SocketService) { 
    this.socketService = socketService;
    this.socketService.receiveMessage((inboundMessage) => {
      var messageObject = JSON.parse(inboundMessage.data);
      if (messageObject.type === "send-cards") {
        this.Visions = messageObject.cards;

        for(var i = 0; i < this.Visions.length; i++) {
          this.AllVisions.push(this.Visions[i]);
        }
      }
      
      if (messageObject.type === "player-creation") {
        this.PlayerId = messageObject.id;
        this.People = messageObject.people;
        this.Places = messageObject.places;
        this.Things = messageObject.things;
        console.log('player-creation response, ' + messageObject);
      }
		});
  }

  ngOnInit() { }

  sendGuess(guess) {
    var message = {
      "type": "psychic-guess",
      "playerId": this.PlayerId,
      "guess": guess
    }
    this.socketService.sendMessage(JSON.stringify(message));
  }
}
