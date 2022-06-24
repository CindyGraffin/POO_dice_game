"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cup = void 0;
const Dice_1 = require("./Dice");
class Cup {
    // constructor
    constructor(nb_des) {
        this._des = [];
        this._value = 0;
        /* we push a Dice in dice array's attribute while we haven't the nb_des in our Cup */
        for (let i = 0; i < nb_des; i++) {
            let dice = new Dice_1.Dice();
            this._des.push(dice);
        }
    }
    // getters/setters
    get value() {
        return this._value;
    }
    get des() {
        return this._des;
    }
    set value(newValue) {
        this._value = newValue;
    }
    set des(newDes) {
        this._des = newDes;
    }
    // methodes
    get_valeur() {
        return this._value;
    }
    /* for each dice in the dice attribute's array, we use the method launch of the class Dice in order to get a random value that we add to the new value*/
    lancer() {
        let newCupValue = 0;
        this._des.forEach((de) => {
            de.lancer();
            newCupValue += de.get_valeur();
        });
        this._value = newCupValue;
    }
    afficher_score() {
        console.log(`Le score du dernier lancé de gobelet est de ${this._value}`);
    }
}
exports.Cup = Cup;
