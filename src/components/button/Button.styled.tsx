import { css, styled } from 'styled-components';

import { buttonColor } from '@/styles/token';
import { Color } from '@/types/style';

const Button = styled.button<{color: Color}>`
	padding: 0 1em 0 1em;
	line-height: 1.5em;

	font-size: 1em;
	font-weight: 500;

	letter-spacing: -.008em;
	border: 0;

	display: flex;
	align-items: center;

	cursor: pointer;

	${(props)=>{
		return css`
			color: ${buttonColor[props.color].fontColor};
			background-color: ${buttonColor[props.color].backgroundColor};

			&:hover{
				background-color: ${buttonColor[props.color].hoverBackgroundColor};
			}
		`
	}}
`

export const SquareButton = styled(Button)`
	border-radius: 1em;
`;

export const RoundButton = styled(SquareButton)`
	border-radius: 9999px;
`;