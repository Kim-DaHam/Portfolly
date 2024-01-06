import { FiX as DeleteIcon } from "react-icons/fi";

import { IconBox, TagLayout } from "./Tag.styled";

type Props = {
	readOnly: boolean;
	value: string;
}

export default function Tag({readOnly, value}: Props) {

	return (
		<TagLayout readOnly={readOnly} >
			{value}
			{ !readOnly &&
				<IconBox>
					<DeleteIcon/>
				</IconBox>
			}
		</TagLayout>
	)
}