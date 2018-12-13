export class CategoryCard {
    cardNumber : Number;
    isCorrect : Number;
    cardType: String;

    constructor(card : Number, correct : Number, type : String) {
        this.cardNumber = card;
        this.isCorrect = correct;
        this.cardType = type;
    }
}