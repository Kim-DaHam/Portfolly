import { FiRotateCw as RetryIcon } from "react-icons/fi";

import * as S from "@/components/error/Error.styled";

import { Text } from "@/components";

type Props = {
	reset: (...args: any[]) => void;
	message: {
		title: string,
		content: string,
	};
}

export default function Error({ reset, message }: Props) {
	return(
		<S.Wrapper>
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
		</S.Wrapper>
	)
}