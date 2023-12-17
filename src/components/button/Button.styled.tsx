import { css, styled } from 'styled-components';

import { buttonColor } from '@/styles/token';
import { Color } from '@/types/style';

type ButtonType = 'Icon' | 'Text';

const buttonStyle = css`
	font-size: 1em;
	line-height: 1.5em;
	letter-spacing: -.008em;
	font-weight: 500;
	padding: 0 1em 0 1em;
	cursor: pointer;
	border: 0;
`;

export const SquareButton = styled.button<{color: Color, type: ButtonType}>`
	${buttonStyle}
	padding-top: ${(props)=>props.type === 'Icon' ? '0.4rem' : ''};
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

export const RoundButton = styled.button<{color: Color, type:ButtonType}>`
	${buttonStyle}
	border-radius: 9999px;
	font-size: ${(props)=>props.type === 'Text' ? '1rem' : ''};

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