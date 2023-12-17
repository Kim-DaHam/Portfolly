import { useEffect } from "react";
import { createPortal } from "react-dom";

import { PopperContainer, PopperLayout} from "./Popper.styled";
import { Props } from "./Popper.type";
import { renderPopper } from "./Popper.utils";

import { eventStopPropagation } from "@/utils/event";
import { moveScrollY, stopScrollY } from "@/utils/style";


function Popper({ type, right, bottom, popOut}: Props) {

	useEffect(()=>{
		stopScrollY();
		return () => {
			moveScrollY();
		}
	},[]);

	return createPortal(
		<PopperLayout onClick={popOut}>
			<PopperContainer top={bottom} right={right} onClick={eventStopPropagation}>
				{renderPopper(type)}
			</PopperContainer>
		</PopperLayout>,
		document.getElementById('modal')!
	)
}

export default Popper;