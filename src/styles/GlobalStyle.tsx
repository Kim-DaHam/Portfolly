import { createGlobalStyle } from "styled-components";

import BasierSquareTTFRegular from '@/assets/fonts/basiersquare-regular-webfont.ttf';
import NotoSansTTFBold from '@/assets/fonts/NotoSansKR-Bold.ttf';
import NotoSansTTFMedium from '@/assets/fonts/NotoSansKR-Medium.ttf';
import NotoSansTTFSemiBold from '@/assets/fonts/NotoSansKR-SemiBold.ttf';

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'BasierSquareTTFRegular';
		src: local('BasierSquareTTFRegular'), local('BasierSquareTTFRegular');
		font-style: normal;
		src: url(${BasierSquareTTFRegular}) format('truetype');
  }

	@font-face {
		font-family: 'NotoSansTTFMedium';
		src: local('NotoSansTTFMedium'), local('NotoSansTTFMedium');
		font-style: normal;
		src: url(${NotoSansTTFMedium}) format('truetype');
		unicode-range: U+AC00-D7A3;
  }

	@font-face {
		font-family: 'NotoSansTTFSemiBold';
		src: local('NotoSansTTFSemiBold'), local('NotoSansTTFSemiBold');
		font-style: normal;
		src: url(${NotoSansTTFSemiBold}) format('truetype');
		unicode-range: U+AC00-D7A3;
  }

	@font-face {
		font-family: 'NotoSansTTFBold';
		src: local('NotoSansTTFBold'), local('NotoSansTTFBold');
		font-style: normal;
		src: url(${NotoSansTTFBold}) format('truetype');
		unicode-range: U+AC00-D7A3;
  }

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