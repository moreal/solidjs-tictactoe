/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import "@fontsource/noto-serif-kr/latin-200.css";
import "@fontsource/noto-serif-kr/latin-700.css";
import App from "./App";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
	throw new Error(
		"Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
	);
}

// biome-ignore lint/style/noNonNullAssertion: <explanation>
render(() => <App />, root!);
