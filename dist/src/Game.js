"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const Cup_1 = require("./Cup");
class Game {
    // constructor
    constructor(nb_tours, nb_des) {
        // attributes
        this._joueurs = [];
        this._nb_tours = 0;
        this._gobelet = new Cup_1.Cup(0);
        this.nb_tours = nb_tours;
        let gameCup = new Cup_1.Cup(nb_des);
        this.gobelet = gameCup;
    }
    // getters/setters
    get joueurs() {
        return this._joueurs;
    }
    get nb_tours() {
        return this._nb_tours;
    }
    get gobelet() {
        return this._gobelet;
    }
    set joueurs(newJoueurs) {
        this._joueurs = newJoueurs;
    }
    set nb_tours(newNbTours) {
        this._nb_tours = newNbTours;
    }
    set gobelet(newGobelet) {
        this._gobelet = newGobelet;
    }
    // methodes
    /* for each player in the array parameter of the method, we add each player in the 'joueurs' array attribute */
    initialiser(players) {
        players.forEach(player => {
            this._joueurs.push(player);
        });
    }
    /* make the palyers play for x turns defined in the Game class attributes */
    lancer() {
        for (let i = 0; i < this.nb_tours; i++) {
            this._joueurs.forEach(joueur => {
                joueur.jouer(this._gobelet);
            });
        }
        this.afficher_gagnant();
    }
    afficher_gagnant() {
        let scoreMax = 0;
        /* define the maximum score */
        this._joueurs.forEach(joueur => {
            let score = joueur.get_score();
            if (score >= scoreMax) {
                scoreMax = score;
            }
        });
        console.log(this._joueurs);
        let players = this._joueurs;
        /* filter players to determine who have the max score */
        let winners = players.filter(joueur => joueur.get_score() === scoreMax);
        if (winners.length > 1) {
            console.log(`Les gagnants sont: ${this.log(winners)}bien joué !`);
        }
        else {
            console.log(`Le gagnant est ${winners[0].get_nom()}, bien joué !`);
        }
    }
    /* allow to construct a string when there are more than one winner */
    log(winners) {
        let string = '';
        for (let i = 0; i < winners.length; i++) {
            string += `${winners[i].get_nom()}, `;
        }
        return string;
    }
}
exports.Game = Game;
