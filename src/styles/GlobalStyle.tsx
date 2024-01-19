import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	body {
		width: 100vw;
		height: 100vh;

		overflow-y: scroll;
		overflow-x: hidden;

		position: relative;
		z-index: 0;

		box-sizing: border-box;
	}

	body #modal {
		height: 9999px;

		position: absolute;
		top: 0;
		z-index: 999;
	}

	* {
		margin: 0;
		padding: 0;

		box-sizing: border-box;
	}

	a {
		text-decoration: none;
		color: black;
	}
`;

export default GlobalStyle;