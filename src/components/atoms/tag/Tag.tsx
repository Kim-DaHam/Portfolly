import { HTMLAttributes } from "react";
import { FiX as DeleteIcon } from "react-icons/fi";

import * as S from "@/components/atoms/tag/Tag.styled";

type Props = HTMLAttributes<HTMLDivElement> & {
	readOnly: boolean;
	value: string;
};

export default function Tag({readOnly, value, ...props}: Props) {

	return (
		<S.Wrapper readOnly={readOnly} >
			{value}
			{ !readOnly &&
				<S.Icon onClick={props.onClick}>
					<DeleteIcon/>
				</S.Icon>
			}
		</S.Wrapper>
	)
}