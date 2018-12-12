import { Component, OnInit, ViewChild } from '@angular/core';
import { HandComponent } from '../hand/hand.component';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-ghost-container',
  templateUrl: './ghost-container.component.html',
  styleUrls: ['./ghost-container.component.css']
})

export class GhostContainerComponent implements OnInit {
  socketService: SocketService;

  @ViewChild(HandComponent)
  private handComponent: HandComponent;

  psychics = new Array<String>('1', '2', '3');
  SelectedCards: any[] = [];

  constructor(socketService: SocketService) { 
    console.log('in the constructor of ghost container');
    this.socketService = socketService;
    this.socketService.startSession();
    this.socketService.receiveMessage((inboundMessage) => {
      var messageObject = JSON.parse(inboundMessage.data);
      if (messageObject.type === "welcome") {
        var psychics = new Array<Object>();
        this.psychics.forEach(psychic => {
          var p = {
            "id": psychic,
            "person": '../../assets/characters/char' + psychic.toString() + '.jpg',
            "place": '../../assets/locations/lc' + psychic.toString() + '.jpg',
            "thing": '../../assets/objects/oc' + psychic.toString() + '.jpg'
          }
          psychics.push(p);
        });
    
        var message = {
          "playerId": 'ghost',
          "type": 'new-connection',
          "psychics": psychics
        }
        console.log('sending message');
        this.socketService.sendMessage(JSON.stringify(message));
      }
		});
  }

  ngOnInit() { }

  sendVisions(imageNumber: String) {
    // send to player
    // tell hand to remove SelectedCards
    // tell hand to redraw 
    var cardsToSend = this.handComponent.removeSelectedCards();
    this.handComponent.fillHand();

    this.SelectedCards = [];

    var message = {
      "cards": cardsToSend,
      "player": imageNumber,
      "type": "send-cards"
    }

    this.socketService.sendMessage(JSON.stringify(message));
  }

}
