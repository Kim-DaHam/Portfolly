import { useEffect } from "react";
import { createPortal } from "react-dom";

import { PopperContainer, PopperLayout} from "./Popper.styled";
import { Props } from "./Popper.type";

import { eventStopPropagation } from "@/utils/event";
import { moveScrollY, stopScrollY } from "@/utils/style";

function Popper({ children, coordinate, popOut}: Props) {

	useEffect(()=>{
		stopScrollY();
		return () => {
			moveScrollY();
		}
	}, []);

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