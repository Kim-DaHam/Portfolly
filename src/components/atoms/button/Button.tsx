import styled from 'styled-components';

import { colors, sizes, shapes } from '@/styles/button';
import * as mixins from '@/styles/mixins';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  shape: 'round' | 'square';
  size?: 'full' | 'fit' | 'large' | 'medium' | 'small';
	color: 'white' | 'black' | 'gray' | 'transparent';
	active?: boolean;
};

export default function Button({ children, ...props }: Props) {
  return(
		<ButtonStyle type="button" {...props}>
			{children}
		</ButtonStyle>
	);
}

export const ButtonStyle = styled.button<Props>`
	height: 2.9rem;

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
  ${props => (props.size ? sizes[props.size] : sizes['fit'])};
	${props => (props.shape ? shapes[props.shape] : '')};
`;