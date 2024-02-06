import { FiRotateCw as RetryIcon } from "react-icons/fi";

import * as S from "@/pages/error/Error.styled";

import { Button, Text } from "@/components";

type Props = {
	reset: (...args: any[]) => void;
	message: {
		title: string,
		content: string,
	};
}

function Error({ reset, message }: Props) {
	return(
		<S.Wrapper>
			<Text size='headingMedium'>
				{message.title}
			</Text>
			<Text size='bodyLarge' color='lightgray'>
				{message.content}
			</Text>
			<RetryIcon
				size={30}
				color='lightgray'
				onClick={reset}
			/>
		</S.Wrapper>
	)
}

export default Error;