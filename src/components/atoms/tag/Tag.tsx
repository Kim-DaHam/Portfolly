import { FiX as DeleteIcon } from "react-icons/fi";

import * as S from "./Tag.styled";

type Props = {
	readOnly: boolean;
	value: string;
}

export default function Tag({readOnly, value}: Props) {

	return (
		<S.TagLayout readOnly={readOnly} >
			{value}
			{ !readOnly &&
				<S.IconBox>
					<DeleteIcon/>
				</S.IconBox>
			}
		</S.TagLayout>
	)
}