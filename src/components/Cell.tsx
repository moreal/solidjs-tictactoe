import { batch, createMemo, splitProps } from "solid-js";
import { currentPlayer, switchPlayer } from "../store/player";
import { board, makeMove } from "../store/board";
import { checkWinner } from "../store/game";

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
