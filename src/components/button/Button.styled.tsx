import { css, styled } from 'styled-components';

import { buttonColor } from '@/styles/token';
import { Color } from '@/types/style';

const buttonStyle = css`
	font-size: 1em;
	line-height: 1.5em;
	letter-spacing: -.008em;
	font-weight: 500;
	padding: 0 1em 0 1em;
	cursor: pointer;
	border: 0;
	display: flex;
	align-items: center;
`;

export const SquareButton = styled.button<{color: Color}>`
	${buttonStyle}
	border-radius: 1em;

	${(props)=>{
		return css`
			background-color: ${buttonColor[props.color].backgroundColor};
			color: ${buttonColor[props.color].fontColor};
			&:hover{
				background-color: ${buttonColor[props.color].hoverBackgroundColor};
			}
		`
	}}
`;

export const RoundButton = styled.button<{color: Color}>`
	${buttonStyle}
	border-radius: 9999px;

	${(props)=>{
		return css`
			background-color: ${buttonColor[props.color].backgroundColor};
			color: ${buttonColor[props.color].fontColor};
			&:hover{
				background-color: ${buttonColor[props.color].hoverBackgroundColor};
			}
		`
	}}
`;