import { Component, OnInit, ViewChild } from '@angular/core';
import { HandComponent } from '../hand/hand.component';
import { SocketService } from '../socket.service';
import { Psychic } from '../psychic';

@Component({
  selector: 'app-ghost-container',
  templateUrl: './ghost-container.component.html',
  styleUrls: ['./ghost-container.component.css']
})

export class GhostContainerComponent implements OnInit {
  socketService: SocketService;

  @ViewChild(HandComponent)
  private handComponent: HandComponent;
  psychics = new Array<Psychic>();
  SelectedCards: any[] = [];

  constructor(socketService: SocketService) { 
    console.log('in the constructor of ghost container');
    this.socketService = socketService;
    this.socketService.receiveMessage((inboundMessage) => {
      var messageObject = JSON.parse(inboundMessage.data);

      if (messageObject.type === "new-player") {
        let p = messageObject.psychic;
        let psychic = new Psychic(
            p.id, 
            p.person.id,
            p.place.id, 
            p.thing.id
          );

        this.psychics.push(psychic);
        console.log('new-player response ', messageObject);
      }
      if (messageObject.type === "ghost-creation") {
        console.log('new-player response, ' + messageObject);
        var psychics = messageObject.psychics;
        psychics.forEach(p => {
          var psychic = new Psychic(p.id, p.person.id, p.place.id, p.thing.id);
          this.psychics.push(psychic);
        });
      }
      if (messageObject.type === 'guess-response') {
        // {type: "guess-response", playerId: 1, category: "person", guess: 17, isCorrect: true}

        for(var i = 0; i < this.psychics.length; i++) {
          if(this.psychics[i].playerId == messageObject.playerId) {
            if(messageObject.category == 'person') {
              this.psychics[i].personCorrect = true;
            } else if(messageObject.category == 'place') {
              this.psychics[i].placeCorrect = true;
            } else if(messageObject.category == 'thing') {
              this.psychics[i].objectCorrect = true;
            }
          }
        }
        console.log('player guess: ', messageObject);
      }
		});
  }

  ngOnInit() { }

  sendVisions(imageNumber: Number) {
    // send to player
    // tell hand to remove SelectedCards
    // tell hand to redraw 
    var cardsToSend = this.handComponent.removeSelectedCards();
    this.handComponent.fillHand();

    this.SelectedCards = [];

    console.log('Image Number, ', imageNumber);

    var message = {
      "cards": cardsToSend,
      "player": imageNumber,
      "type": "send-cards"
    }

    console.log('sending visions', message);
    this.socketService.sendMessage(JSON.stringify(message));
  }

}
