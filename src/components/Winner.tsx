import { winner } from "../store/game";

export function Winner() {
	return (
		<p style={{ "text-align": "center", "font-size": "large" }}>
			Winner is "<strong>{winner()}</strong>"
		</p>
	);
}
