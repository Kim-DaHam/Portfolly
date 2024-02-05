import { FiMoreHorizontal as Icon} from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { sections } from "@/assets/data/fields";
import * as S from "@/components/molecules/navigator/section-navigator/SectionNavigator.styled";
import { Group } from "@/components/molecules/popper/Popper.styled";
import { section as sectionSlice } from "@/redux/sectionSlice";

import type { Section } from "@/types";

import { usePopup } from "@/hooks";
import { toUrlParameter } from "@/utils";

import { Button, Popper, Text } from "@/components";

export default function SectionNavigator() {
	const currentSection = useSelector(sectionSlice);
	const { isPopUp, coordinate, popUp, popOut } = usePopup();

	return(
		<S.Wrapper>
			<Text size='bodyLarge'>{currentSection}</Text>

			<Button color='white' shape='round' onClick={popUp}>
				<Icon color='gray'/>
			</Button>

			{isPopUp &&
				<Popper coordinate={coordinate} popOut={popOut}>
					<Group size='10rem'>
						{sections.map((section: Section, index: number)=>{
							return(
								<Link to={`/main/${toUrlParameter(section)}`} onClick={popOut} key={index}>
									{section}
								</Link>
							)
						})}
					</Group>
				</Popper>
			}
		</S.Wrapper>
	)
}