import { ImageLayout } from "./Image.styled";

type Props = {
	size: string;
	src: string;
	alt?: string;
};

function Image({size, src, alt}: Props) {
	return(
		<ImageLayout size={size}>
			<img src={src} alt={alt} />
		</ImageLayout>
	)
}

export default Image;