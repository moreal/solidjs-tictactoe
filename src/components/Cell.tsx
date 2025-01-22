import { batch, createMemo, splitProps } from "solid-js";
import { board, makeMove } from "../store/board";
import { checkWinner } from "../store/game";
import { currentPlayer, switchPlayer } from "../store/player";

export function Cell(props: {
	index: number;
}) {
	const [local] = splitProps(props, ["index"]);

	function onClick() {
		batch(() => {
			makeMove(local.index, currentPlayer());
			checkWinner();
			switchPlayer();
		});
	}

	const innerText = createMemo(() =>
		board[local.index].status === "EMPTY" ? "" : board[local.index].status,
	);

	return (
		<div on:click={onClick} class="cell">
			{innerText()}
		</div>
	);
}
