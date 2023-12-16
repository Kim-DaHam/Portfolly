import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	body {
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;
		overflow-x: hidden;

		position: relative;
		z-index: 0;
	}

	body #modal {
		position: absolute;
		z-index: 999;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
`;

export default GlobalStyle;