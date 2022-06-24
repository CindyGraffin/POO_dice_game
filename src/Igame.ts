import { Player } from "./Player";

export interface Igame {
    initialiser(players: Player[]): void;
    lancer(): void;
    afficher_gagnant(): void
}