import { FiMoreHorizontal as Icon} from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Group, Item } from "../popper/Popper.styled";

import * as S from "./SectionNavigator.styled";

import { Button } from "@/components/atoms";
import { Popper }  from "@/components/molecules";
import { usePopup } from "@/hooks";
import { section as sectionSlice } from "@/redux/sectionSlice";
import { Section } from "@/types";
import { stringToUrlParameter } from "@/utils";

const sections: Section[] = ['Android/iOS', 'Web', 'Illustration', 'Photo', 'Video'];

export default function SectionNavigator() {
	const currentSection = useSelector(sectionSlice);
	const { isPopUp, coordinate, popUp, popOut } = usePopup();

	const navigate = useNavigate();

	const handleSection = (event: React.MouseEvent)=> {
		const section = event.currentTarget.textContent as Section;
		popOut();
		navigate(`/main/${stringToUrlParameter(section)}`);
	};

	return(
		<S.Wrapper>
			<S.SectionTitle>{currentSection}</S.SectionTitle>

			<Button color='white' shape='round' onClick={popUp}>
				<Icon color='gray'/>
			</Button>

			{isPopUp &&
				<Popper coordinate={coordinate} popOut={popOut}>
					<Group size='fit'>
						{sections.map((section: Section, index: number)=>{
							return(
								<Item onClick={handleSection} key={index}>{section}</Item>
							)
						})}
					</Group>
				</Popper>
			}
		</S.Wrapper>
	)
}