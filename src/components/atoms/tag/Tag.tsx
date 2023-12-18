import { FiX as DeleteIcon } from "react-icons/fi";

import { IconBox, TagContainer } from "./Tag.styled";

type Props = {
	readOnly: boolean;
	value: string;
}

function Tag({readOnly, value}: Props) {

	return (
		<TagContainer readOnly={readOnly} >
			{value}
			{ !readOnly &&
				<IconBox>
					<DeleteIcon/>
				</IconBox>
			}
		</TagContainer>
	)
}

export default Tag;