import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";

export type Player = "X" | "O";

export const [currentPlayer, setCurrentPlayer] = createSignal<Player>("X");

export const switchPlayer = () => {
	setCurrentPlayer(currentPlayer() === "X" ? "O" : "X");
};
