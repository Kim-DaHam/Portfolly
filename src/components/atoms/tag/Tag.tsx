import { FiX as DeleteIcon } from "react-icons/fi";

import { IconBox, TagLayout } from "./Tag.styled";

type Props = {
	readOnly: boolean;
	value: string;
}

function Tag({readOnly, value}: Props) {

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

export default Tag;