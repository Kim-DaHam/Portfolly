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
		overflow-y: overlay;

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

	::-webkit-scrollbar {
    width: 14px;
    height: 14px;
}

::-webkit-scrollbar-thumb {
    outline: none;
    border-radius: 10px;
    border: 4px solid transparent;
    box-shadow: inset 6px 6px 0 rgba(34, 34, 34, 0.15);
}

::-webkit-scrollbar-thumb:hover {
    border: 4px solid transparent;
    box-shadow: inset 6px 6px 0 rgba(34, 34, 34, 0.3);
}

::-webkit-scrollbar-track {
    box-shadow: none;
    background-color: transparent;
}
`;

export default GlobalStyle;