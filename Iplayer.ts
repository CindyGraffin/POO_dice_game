import { Cup } from "./Cup";

export interface Iplayer {
    get_nom(): string;
    get_score(): number;
    jouer(cup: Cup): void;
    afficher_score(): void;
}