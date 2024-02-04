import { HTMLAttributes } from "react";

import * as S from "./Image.styled";

export type Props = HTMLAttributes<HTMLImageElement> & {
	size: string;
	shape?: 'square' | 'foursquare' | 'circle';
	src: string;
	alt?: string;
};

export default function Image({shape='square', ...props}: Props) {
	return(
		<S.ImageLayout shape={shape} {...props}>
			<img
				src={props.src}
				alt={props.alt}
				sizes="(max-width: 600px) 480px,
							800px"
			/>
		</S.ImageLayout>
	)
}