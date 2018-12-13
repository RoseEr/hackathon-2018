import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';
import { CategoryCard } from '../CategoryCard';

@Component({
  selector: 'app-psychic-container',
  templateUrl: './psychic-container.component.html',
  styleUrls: ['./psychic-container.component.css']
})
export class PsychicContainerComponent implements OnInit {
  socketService: SocketService;
  Visions = new Array<Number>();
  People = new Array<CategoryCard>();
  Places = new Array<CategoryCard>();
  Things = new Array<CategoryCard>();
  CurrentCategory = new Array<CategoryCard>();
  CategoryType: string;
  PlayerId = Number;
  GuessNumber = Number;

  AllVisions = new Array<Number>();

  NumberOfGuesses = 1;

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

        for(var i = 0; i < messageObject.people.length; i++) {
          this.People.push(new CategoryCard(messageObject.people[i], 0, 'person'));
        }

        for(i = 0; i < messageObject.places.length; i++) {
          this.Places.push(new CategoryCard(messageObject.places[i], 0, 'place'));
        }

        for(i = 0; i < messageObject.things.length; i++) {
          this.Things.push(new CategoryCard(messageObject.things[i], 0, 'thing'));
        }

        //this.People = messageObject.people;
        //this.Places = messageObject.places;
        //this.Things = messageObject.things;
        this.CurrentCategory = this.People;
        this.CategoryType = 'characters';
        console.log('player-creation response, ', messageObject);
      }

      if (messageObject.type === 'guess-response') {
        if(!messageObject.isCorrect && messageObject.category === 'person') {
          for(var i = 0; i < this.People.length; i++) {
            if(this.People[i].cardNumber == messageObject.guess) {
              this.People[i].isCorrect = -1;
            }
          }
        } else if(!messageObject.isCorrect && messageObject.category === 'place') {
          for(var i = 0; i < this.Places.length; i++) {
            if(this.Places[i].cardNumber == messageObject.guess) {
              this.Places[i].isCorrect = -1;
            }
          }
        } else if(!messageObject.isCorrect && messageObject.category === 'thing') {
          for(var i = 0; i < this.Things.length; i++) {
            if(this.Things[i].cardNumber == messageObject.guess) {
              this.Things[i].isCorrect = -1;
            }
          }
        }

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
    if(this.NumberOfGuesses <= 7) {
      this.GuessNumber = guess;
      var message = {
        "type": "psychic-guess",
        "playerId": this.PlayerId,
        "guess": guess
      }
      console.log('guessing', message);
      this.socketService.sendMessage(JSON.stringify(message));
  
      if(this.NumberOfGuesses != 7) {
        this.NumberOfGuesses ++;  
      }
    }
  }
}
