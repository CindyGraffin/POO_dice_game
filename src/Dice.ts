import { Idice } from "./Idice";

export class Dice implements Idice {
    // attribute
    private _value: number;
    // constructor
    constructor() {
        this._value = 0
    }
    // getters/setters
    get value(): number {
        return this._value;
    }
    set value(newValue: number) {
        this._value = newValue;
    }
    // methodes
    get_valeur(): number {
        return this._value;
    }
    lancer(): void {
        let newDiceValue = Math.ceil(Math.random()*6)
        this._value = newDiceValue
    }
}


