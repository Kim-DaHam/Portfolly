import { ImageLayout } from "./Image.styled";

export type Shape = 'square' | 'foursquare' | 'circle';

type Props = {
	size: string;
	shape?: Shape;
	src: string;
	alt?: string;
};

export default function Image({size, src, alt, shape='square'}: Props) {
	return(
		<ImageLayout $size={size} $shape={shape}>
			<img src={src} alt={alt} />
		</ImageLayout>
	)
}