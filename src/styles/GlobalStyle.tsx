import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
		margin: 0;
		padding: 0;

		box-sizing: border-box;

		font-family: 'NotoSansTTFBold', 'BasierSquareTTFRegular', sans-serif;
	}

	body {
		width: 100vw;
		height: 100vh;

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

	a {
		text-decoration: none;
		color: black;
	}
`;

export default GlobalStyle;