import { FiX as DeleteIcon } from "react-icons/fi";

import * as S from "@/components/atoms/tag/Tag.styled";

type Props = {
	readOnly: boolean;
	value: string;
}

export default function Tag({readOnly, value}: Props) {

	return (
		<S.Wrapper readOnly={readOnly} >
			{value}
			{ !readOnly &&
				<S.Icon>
					<DeleteIcon/>
				</S.Icon>
			}
		</S.Wrapper>
	)
}