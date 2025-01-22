import type { Component } from "solid-js";

import { Board } from "./components/Board";
import { GameStatus } from "./components/GameStatus";
import { Header } from "./components/Header";

const App: Component = () => {
	return (
		<div class="game-container">
			<Header />
			<main>
				<GameStatus />
				<Board />
			</main>
		</div>
	);
};

export default App;
