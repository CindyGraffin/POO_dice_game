"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    // constructor
    constructor(nom) {
        // attributes
        this._nom = '';
        this._score = 0;
        this.nom = nom;
    }
    // accesseurs
    get nom() {
        return this._nom;
    }
    get score() {
        return this._score;
    }
    set nom(newNom) {
        this._nom = newNom;
    }
    set score(newScore) {
        this._score = newScore;
    }
    // methodes
    get_nom() {
        return this._nom;
    }
    get_score() {
        return this._score;
    }
    jouer(cup) {
        cup.lancer();
        let score = cup.get_valeur();
        this._score += score;
    }
    afficher_score() {
        console.log(`Le score du joueur ${this._nom} est de ${this._score}.`);
    }
}
exports.Player = Player;
