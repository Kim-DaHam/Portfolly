import { HTMLAttributes, MouseEventHandler } from "react";
import { FiX as DeleteIcon } from "react-icons/fi";

import * as S from "@/components/atoms/tag/Tag.styled";

type Props = HTMLAttributes<HTMLDivElement> & {
	readOnly: boolean;
	value: string;
	handleTag?: MouseEventHandler<HTMLDivElement>;
};

export default function Tag({readOnly, value, handleTag}: Props) {

	return (
		<S.Wrapper readOnly={readOnly} >
			{value}
			{ !readOnly &&
				<S.Icon>
					<DeleteIcon onClick={handleTag} />
				</S.Icon>
			}
		</S.Wrapper>
	)
}