import { ImageLayout } from "./Image.styled";

type Props = {
	size: string;
	src: string;
	alt?: string;
};

export default function Image({size, src, alt}: Props) {
	return(
		<ImageLayout size={size}>
			<img src={src} alt={alt} />
		</ImageLayout>
	)
}