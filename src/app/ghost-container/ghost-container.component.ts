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
    this.socketService.receiveMessage((inboundMessage) => {
      var messageObject = JSON.parse(inboundMessage.data);

      if (messageObject.type === "new-player") {
          /* Example JSON {
            'type': 'new-player',
            'psychic': {
              'person': 12,
              'place': 3,
              'thing': 1
            }
          }
          */
        
        console.log('new-player response, ' + messageObject);
      }
      if (messageObject.type === "ghost-creation") {
        console.log('new-player response, ' + messageObject);
          /* Example JSON {
            'type': 'new-player',
            'psychic': [{
              'person': 12,
              'place': 3,
              'thing': 1
            },
            {
              'person': 1,
              'place': 13,
              'thing': 5
            },
            ]
          }
          */
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
