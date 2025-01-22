import { createSignal } from "solid-js";
import { board } from "./board";
import type { Player } from "./player";

type Winner = Player | "DRAW" | "UNKNOWN";
export const [winner, setWinner] = createSignal<Winner>("UNKNOWN", {
	equals: false,
});

export const isFinished = () => winner() !== "UNKNOWN";
export const checkWinner = () => {
	const winningCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (const combination of winningCombinations) {
		const [a, b, c] = combination;
		if (
			board[a].status !== "EMPTY" &&
			board[a].status === board[b].status &&
			board[a].status === board[c].status
		) {
			console.log("set winner");
			setWinner(board[a].status);
			return;
		}
	}

	if (board.every((cell) => cell.status !== "EMPTY")) {
		console.log("set winner");
		setWinner("DRAW");
	}
};
