import styled from 'styled-components';

import { colors, sizes, shapes } from '@/styles/button';
import * as mixins from '@/styles/mixins';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shape: 'round' | 'square';
  size: 'full' | 'fit' | 'large' | 'medium' | 'small';
	color: 'white' | 'black' | 'gray' | 'transparent';
	active?: boolean;
}

export default function Button({ children, ...props }: Props) {
  <ButtonStyle type="button" {...props}>
    {children}
  </ButtonStyle>
}

const ButtonStyle = styled.button<Props>`
  ${mixins.flexCenter}
	gap: 1rem;

	padding: 0 1em 0 1em;
	line-height: 1.5em;

	font-size: 1em;
	font-weight: 500;

	letter-spacing: -.008em;
	border: 0;

	cursor: pointer;

	${props => (props.active ? colors['black'] : colors[props.color])}
  ${props => (props.size ? sizes[props.size] : '')};
	${props => (props.type ? shapes[props.shape] : '')};
`;