import { Match, Switch } from "solid-js";
import { isFinished } from "../store/game";
import { Turn } from "./Turn";
import { Winner } from "./Winner";

export function GameStatus() {
	return (
		<Switch>
			<Match when={isFinished()}>
				<Winner />
			</Match>
			<Match when={!isFinished()}>
				<Turn />
			</Match>
		</Switch>
	);
}
