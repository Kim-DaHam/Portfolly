import { createPortal } from "react-dom";

import * as S from "@/components/molecules/popper/Popper.styled";
import { useStopScrollY } from "@/hooks";
import { eventStopPropagation } from "@/utils";

export type Props = {
	coordinate: {right: number, bottom: number};
	popOut: ()=>void;
	children: JSX.Element;
};

export default function Popper({ children, coordinate, popOut}: Props) {
	useStopScrollY();

	return createPortal(
		<S.Wrapper onClick={popOut}>
			<S.PopperBox $top={coordinate.bottom} $right={coordinate.right} onClick={eventStopPropagation}>
				{children}
			</S.PopperBox>
		</S.Wrapper>,
		document.getElementById('modal')!
	)
}