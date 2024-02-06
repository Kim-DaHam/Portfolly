import { FiRotateCw as RetryIcon } from "react-icons/fi";

import * as S from "@/components/error/Error.styled";

import { Text } from "@/components";

type Props = {
	type: 'page' | 'component',
	reset: (...args: any[]) => void;
	message: {
		title: string,
		content: string,
	};
}

export default function Error({ type, reset, message }: Props) {
	return(
		<S.Wrapper type={type}>
		{ type === 'page' ?
			<>
				<Text size='title'>
					{message.title}
				</Text>
				<Text size='bodyLarge' color='lightgray'>
					{message.content}
				</Text>
				<RetryIcon
					size={30}
					onClick={reset}
				/>
			</>
			:
			<>
				<Text size='bodyLarge'>
					{message.title}
				</Text>
				<Text size='bodyMedium' color='lightgray'>
					{message.content}
				</Text>
				<RetryIcon
					size={30}
					onClick={reset}
				/>
			</>
		}
		</S.Wrapper>
	)
}