import { Dice } from "./Dice";
import { Cup } from "./Cup";
import { Player } from "./Player";
import { Game } from "./Game";

// players
let player1 = new Player('Anthony');
let player2 = new Player('Mickael');
let player3 = new Player('Roland');
let player4 = new Player('Cindy');
let player5 = new Player('Cyriak');

let players = [player1, player2, player3, player4, player5]

// new game
let game1 = new Game(3, 2)

// add the players to the game
game1.initialiser(players);

// launch game
game1.lancer();





