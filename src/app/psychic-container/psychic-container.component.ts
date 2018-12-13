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
  CurrentCategory = new Array<Number>();
  CategoryType: string;
  PlayerId = Number;
  GuessNumber = Number;

  constructor(socketService: SocketService) { 
    this.socketService = socketService;
    this.socketService.receiveMessage((inboundMessage) => {
      var messageObject = JSON.parse(inboundMessage.data);
      if (messageObject.type === "send-cards") {
        this.Visions = messageObject.cards;
      }
      
      if (messageObject.type === "player-creation") {
        this.PlayerId = messageObject.id;
        this.People = messageObject.people;
        this.Places = messageObject.places;
        this.Things = messageObject.things;
        this.CurrentCategory = this.People;
        this.CategoryType = 'characters';
        console.log('player-creation response, ', messageObject);
      }

      if (messageObject.type === 'guess-response') {
        if (messageObject.isCorrect && messageObject.category === 'person') {
          this.CurrentCategory = this.Places;
          this.CategoryType = 'locations';
          console.log('updating category and type: ', this.CurrentCategory, this.CategoryType);
        } else if (messageObject.isCorrect && messageObject.category === 'place') {
          this.CurrentCategory = this.Things;
          this.CategoryType = 'objects';
          console.log('updating category and type: ', this.CurrentCategory, this.CategoryType);
        }
      }
		});
  }

  ngOnInit() { }

  guess(guess) {
    this.GuessNumber = guess;
    var message = {
      "type": "psychic-guess",
      "playerId": this.PlayerId,
      "guess": guess
    }
    console.log('guessing', message);
    this.socketService.sendMessage(JSON.stringify(message));
  }
}
