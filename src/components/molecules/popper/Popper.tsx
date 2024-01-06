import { createPortal } from "react-dom";

import { PopperContainer, PopperLayout} from "./Popper.styled";
import { Props } from "./Popper.type";

import useStopScrollY from "@/hooks/useStopScrollY";
import { eventStopPropagation } from "@/utils/event";

function Popper({ children, coordinate, popOut}: Props) {
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

export default Popper;