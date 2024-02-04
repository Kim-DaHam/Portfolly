import styled from "styled-components";

import * as mixins from '@/styles/mixins';
import { colors, sizes } from "@/styles/text";
import { FontColor, FontSize } from "@/types";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
	size: FontSize;
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
	${mixins.alignCenter}
	${props => props.size ? sizes[props.size] : ''}
	${props => props.color ? colors[props.color] : colors['black']}
	word-break: keep-all;
`;