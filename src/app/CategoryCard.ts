export class CategoryCard {
    cardNumber : Number;
    isCorrect : Number;

    constructor(card : Number, correct : Number) {
        this.cardNumber = card;
        this.isCorrect = correct;
    }
}