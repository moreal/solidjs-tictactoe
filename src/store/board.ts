import { createStore } from "solid-js/store";
import type { Player } from "./player";

type CellStatus = Player | "EMPTY";
type CellState = { status: CellStatus };
type Board = CellState[];

const INITIAL_DATA: Board = Array(9)
	.fill(0)
	.map((_) => {
		return { status: "EMPTY" };
	});

export const [board, setBoard] = createStore<Board>(INITIAL_DATA);

export const makeMove = (index: number, player: Player) => {
	console.log("board", board, "index", index, "player", player);
	if (board[index].status !== "EMPTY") return;
	setBoard(index, "status", player);
};
