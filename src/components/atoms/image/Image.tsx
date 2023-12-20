import { ImageLayout } from "./Image.styled";

type Props = {
	src: string;
	alt: string;
};

function Image({src, alt}: Props) {
	return(
		<ImageLayout>
			<img src={src} alt={alt} />
		</ImageLayout>
	)
}

export default Image;