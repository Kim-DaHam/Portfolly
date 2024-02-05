import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import * as S from "@/components/molecules/popper/Popper.styled";

import { eventStopPropagation } from "@/utils";

export type Props = {
	$popperState: boolean;
	coordinate: {right: number, bottom: number};
	popOut: ()=>void;
	children: JSX.Element;
};

export default function Popper({ children, coordinate, $popperState, popOut}: Props) {
	const [isPopUp, setIsPopUp] = useState($popperState);

	useEffect(() => {
    if($popperState) {
      setIsPopUp(true);
			return;
    }

		const popperTimer = setTimeout(() => {
			setIsPopUp(false);
		}, 200);
    return () => {
			clearTimeout(popperTimer);
    };
  }, [$popperState]);

	if(!isPopUp) return null;

	return createPortal(
		<S.Wrapper
			onClick={popOut}
			$popperState={$popperState}
		>
			<S.PopperBox
				$top={coordinate.bottom}
				$right={coordinate.right}
				onClick={eventStopPropagation}
			>
				{children}
			</S.PopperBox>
		</S.Wrapper>,
		document.getElementById('modal')!
	)
}