import { currentPlayer } from "../store/player";

export function Turn() {
	return (
		<p style={{ "text-align": "center", "font-size": "large" }}>
			Turn of "<strong>{currentPlayer()}</strong>"
		</p>
	);
}
