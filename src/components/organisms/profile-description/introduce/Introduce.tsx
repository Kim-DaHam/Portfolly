import { ContentBox, IntroduceLayout, TextBox } from "./Introduce.styled";

import Tag from "@/components/atoms/tag/Tag";
import { Label, Text } from "@/styles/Text.styled";

function Introduce() {
	return(
		<IntroduceLayout>
			<ContentBox gap='1rem'>
				<Label>소개</Label>
				<TextBox>
					blablablablablablalalablablalblablalba
				</TextBox>
			</ContentBox>

			<ContentBox gap='1rem'>
				<Label>지역</Label>
				<Text size='Medium'>대구</Text>
			</ContentBox>

			{ true && // 전문가면
				<>
				<ContentBox gap='1rem'>
					<Label>경력사항</Label>
					<ul>
						<li>네이버</li>
						<li>카카오</li>
					</ul>
				</ContentBox>

				<ContentBox gap='1rem'>
					<Label>총 경력</Label>
					<Text size='Medium'>10년</Text>
				</ContentBox>

				<ContentBox gap='1rem'>
					<Label>희망 급여</Label>
					<Text size='Medium'>3천억</Text>
				</ContentBox>

				<ContentBox gap='1rem'>
					<Label>전문분야 및 상세분야</Label>
					<Tag value='Web' readOnly/>
				</ContentBox>

				<ContentBox gap='1rem'>
					<Label>보유 기술</Label>
					<Tag value='React' readOnly/>
				</ContentBox>
				</>
			}
		</IntroduceLayout>
	)
}

export default Introduce;