export class Psychic {
    playerId: Number;
    person: Number;
    personCorrect: Boolean;
    place: Number;
    placeCorrect: Boolean;
    object: Number;
    objectCorrect: Boolean;

    constructor(playerId: Number, person: Number, place: Number, object: Number) {
        this.playerId = playerId;
        this.person = person;
        this.place = place;
        this.object = object;

        this.personCorrect = false;
        this.placeCorrect = false;
        this.objectCorrect = false;
    }
}