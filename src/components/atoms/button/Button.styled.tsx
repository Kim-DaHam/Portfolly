import { css, styled } from 'styled-components';

import { buttonColor, buttonSize } from '@/styles/token';
import { ButtonColor, ButtonSize } from '@/types/style';

const Button = styled.button<{color: ButtonColor, size?: ButtonSize, active?:boolean}>`
	width: ${(props)=> props.size? buttonSize[props.size].width : 'fit-content'};
	height: 2.9rem;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;

	padding: 0 1em 0 1em;
	line-height: 1.5em;

	font-size: 1em;
	font-weight: 500;

	letter-spacing: -.008em;
	border: 0;

	cursor: pointer;

	${(props)=>{
		const colorType = props.active ? 'Black' : props.color;

		return css`
			color: ${buttonColor[colorType].fontColor};
			background-color: ${buttonColor[colorType].backgroundColor};
			border: ${buttonColor[colorType].border};

			&:hover{
				background-color: ${buttonColor[colorType].hoverBackgroundColor};
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