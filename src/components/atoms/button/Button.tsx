import * as S from '@/components/atoms/button/Button.styled';

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  shape: 'round' | 'square';
  size?: 'full' | 'fit' | 'large' | 'medium' | 'small';
	color: 'white' | 'black' | 'gray' | 'transparent';
	$active?: boolean;
};

export default function Button({ children, ...props }: Props) {
  return(
		<S.ButtonStyle type="button" {...props}>
			{children}
		</S.ButtonStyle>
	);
}