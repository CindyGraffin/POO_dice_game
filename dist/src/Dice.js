"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dice = void 0;
class Dice {
    // constructor
    constructor() {
        this._value = 0;
    }
    // getters/setters
    get value() {
        return this._value;
    }
    set value(newValue) {
        this._value = newValue;
    }
    // methodes
    get_valeur() {
        return this._value;
    }
    lancer() {
        let newDiceValue = Math.ceil(Math.random() * 6);
        this._value = newDiceValue;
    }
}
exports.Dice = Dice;
