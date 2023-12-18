import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	body {
		width: 100%;
		height: 100%;

		position: relative;
		z-index: 0;

		overflow-x: hidden;
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
`;

export default GlobalStyle;