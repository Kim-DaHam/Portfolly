import { HTMLAttributes } from "react";
import styled from "styled-components";

import * as mixins from '@/styles/mixins';
import { colors, types } from "@/styles/text";

type Props = HTMLAttributes<HTMLSpanElement> & {
	type: 'title' | 'titleSmall' | 'common' | 'midSmall' | 'label';
	color?: 'black' | 'gray' | 'lightgray';
	value: string;
}

export default function Text({...props}: Props) {
	return (
		<TextStyles {...props}>
			{props.value}
		</TextStyles>
	);
}

const TextStyles = styled.span<Props>`
	${mixins.alignCenter}
	${props => props.type ? types[props.type] : ''}
	${props => props.color ? colors[props.color] : colors['black']}
`;