import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
		margin: 0;
		padding: 0;

		box-sizing: border-box;

		font-family: 'NotoSansTTFBold', 'BasierSquareTTFRegular', sans-serif;
	}

	body {
		width: 100%;
		height: 100%;

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

	input, textarea {
		border: none;
		resize: none;
		font-family: 'NotoSansTTFMedium';
		font-size: 0.9rem;

		&:focus {
			outline: none;
		}
	}
`;

export default GlobalStyle;