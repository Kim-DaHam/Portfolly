import { css, styled } from 'styled-components';

import { buttonColor, buttonSize } from '@/styles/token';
import { Color, Size } from '@/types/style';

const Button = styled.button<{color: Color, size: Size}>`
	width: ${(props)=>buttonSize[props.size].width};
	height: 2.8rem;

	padding: 0 1em 0 1em;
	line-height: 1.5em;

	font-size: 1em;
	font-weight: 500;

	letter-spacing: -.008em;
	border: 0;

	display: flex;
	justify-content: center;
	align-items: center;

	cursor: pointer;

	${(props)=>{
		const color = props.color;

		return css`
			color: ${buttonColor[color].fontColor};
			background-color: ${buttonColor[color].backgroundColor};

			&:hover{
				background-color: ${buttonColor[color].hoverBackgroundColor};
			}
		`
	}}
`

export const SquareButton = styled(Button)`
	border-radius: 1em;
`;

export const RoundButton = styled(Button)`
	border-radius: 9999px;
`;