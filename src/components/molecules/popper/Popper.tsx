import { createPortal } from "react-dom";

import { PopperContainer, PopperLayout} from "./Popper.styled";
import { Props } from "./Popper.types";

import useStopScrollY from "@/hooks/useStopScrollY";
import { eventStopPropagation } from "@/utils/event";

export default function Popper({ children, coordinate, popOut}: Props) {
	useStopScrollY();

	return createPortal(
		<PopperLayout onClick={popOut}>
			<PopperContainer $top={coordinate.bottom} $right={coordinate.right} onClick={eventStopPropagation}>
				{children}
			</PopperContainer>
		</PopperLayout>,
		document.getElementById('modal')!
	)
}