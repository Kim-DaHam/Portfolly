import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
  align-items: center;
  gap: 8px;
`;

export const Content = styled.fieldset<{$readonly: boolean}>`
	position: relative;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
	border: 0;

	${(props) => {
		if(!props.$readonly) {
			return css`
				label:hover,
				label:hover ~ label {
					transition: 0.2s;
					color: orange;
				}
			`;
		}
	}}

`;

export const Input = styled.input`
	display: none;
`;

export const Label = styled.label<{$isHalf: boolean, $isFilled: boolean, $readonly: boolean}>`
	cursor: ${(props) => props.$readonly ? '' : 'pointer'};
  font-size: 1.5rem;
  color: ${(props) => props.$isFilled ? 'orange' : 'lightgray'};

	${(props) => {
		if(props.$isHalf)
			return css`
				position: absolute;
				width: 12px;
				overflow: hidden;

				&:nth-of-type(10) {
					transform: translate(-108px);
				}
				&:nth-of-type(8) {
					transform: translate(-84px);
				}
				&:nth-of-type(6) {
					transform: translate(-60px);
				}
				&:nth-of-type(4) {
					transform: translate(-36px);
				}
				&:nth-of-type(2) {
					transform: translate(-12px);
				}
			`
	}}
`;

export const StarRate = styled.div`
	width: 5rem;
	height: 100%;

	position: absolute;

	background-color: pink;
`;