"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = require("./Player");
const Game_1 = require("./Game");
// players
let player1 = new Player_1.Player('Anthony');
let player2 = new Player_1.Player('Mickael');
let player3 = new Player_1.Player('Roland');
let player4 = new Player_1.Player('Cindy');
let player5 = new Player_1.Player('Cyriak');
let players = [player1, player2, player3, player4, player5];
// new game
let game1 = new Game_1.Game(3, 2);
// add the players to the game
game1.initialiser(players);
// launch game
game1.lancer();
