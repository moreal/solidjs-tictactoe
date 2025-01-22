import { Index, Show } from "solid-js";
import { board } from "../store/board";
import { isFinished } from "../store/game";
import { Cell } from "./Cell";

export function Board() {
	return (
		<Show when={!isFinished()}>
			<div class="board">
				<Index each={board}>{(_, index) => <Cell index={index} />}</Index>
			</div>
		</Show>
	);
}
