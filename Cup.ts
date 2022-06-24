import { Dice } from "./Dice";
import { Icup } from "./Icup";

export class Cup implements Icup {
    // attributes
    private _value: number;
    private _des: Dice[] = [];
    // constructor
    constructor(nb_des: number) {
        this._value = 0
        /* we push a Dice in dice array's attribute while we haven't the nb_des in our Cup */
        for (let i = 0; i < nb_des; i++) {
            let dice = new Dice()
            this._des.push(dice)
        }
    }
    // getters/setters
    get value(): number {
        return this._value;
    }
    get des(): Dice[] {
        return this._des;
    }
    set value(newValue: number) {
        this._value = newValue;
    }
    set des(newDes: Dice[]) {
        this._des = newDes;
    }
    // methodes
    get_valeur(): number {
        return this._value;
    }
    /* for each dice in the dice attribute's array, we use the method launch of the class Dice in order to get a random value that we add to the new value*/
    lancer(): void  {
        let newCupValue = 0;
        this._des.forEach((de) => {
            de.lancer()
            newCupValue += de.get_valeur()
        })
        this._value = newCupValue;
    }
    afficher_score(): void {
        console.log(`Le score du dernier lancé de gobelet est de ${this._value}`);
    }
}