import { Cup } from "./Cup";
import { Iplayer } from "./Iplayer";

export class Player implements Iplayer {
    // attributes
    private _nom: string = '';
    private _score: number = 0;
    // constructor
    constructor(nom: string) {
        this.nom = nom;
    }
    // accesseurs
    get nom() {
        return this._nom;
    }
    get score() {
        return this._score;
    }
    set nom(newNom: string) {
        this._nom = newNom;
    }
    set score(newScore: number) {
        this._score = newScore;
    }
    // methodes
    get_nom(): string {
        return this._nom;
    }
    get_score(): number {
        return this._score;
    }
    jouer(cup: Cup): void {
        cup.lancer();
        let score = cup.get_valeur()
        this._score += score;
    }
    afficher_score(): void {
        console.log(`Le score du joueur ${this._nom} est de ${this._score}.`);
    }

}