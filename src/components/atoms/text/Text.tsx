import styled from "styled-components";

import * as mixins from '@/styles/mixins';
import { colors, sizes } from "@/styles/text";
import { FontColor, FontSize } from "@/types";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
	size: FontSize;
	cursor?: boolean;
	color?: FontColor;
}

export default function Text({children, ...props}: Props) {
	return (
		<TextStyles {...props}>
			{children}
		</TextStyles>
	);
}

const TextStyles = styled.span<Props>`
	${mixins.flexCenter}
	justify-content: start;
	${props => props.size ? sizes[props.size] : ''}
	${props => props.color ? colors[props.color] : colors['black']}
	cursor: ${props => props.cursor ? 'pointer' : ''};
	word-break: keep-all;
`;