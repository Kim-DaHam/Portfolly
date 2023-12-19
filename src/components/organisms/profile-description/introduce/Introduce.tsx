import { ContentBox, FlexColumnBox, IntroduceLayout, Span } from "./Introduce.styled";

import Tag from "@/components/atoms/tag/Tag";
import { Label } from "@/pages/portfolio-detail/PortfolioDetail.styeld";

function Introduce() {
	return(
		<IntroduceLayout>
			<FlexColumnBox>
				<Label>소개</Label>
				<ContentBox>
					blablablablablablalalablablalblablalba
				</ContentBox>
			</FlexColumnBox>

			<FlexColumnBox>
				<Label>지역</Label>
				<Span>대구</Span>
			</FlexColumnBox>

			{ true && // 전문가면
				<>
				<FlexColumnBox>
					<Label>경력사항</Label>
					<ul>
						<li>네이버</li>
						<li>카카오</li>
					</ul>
				</FlexColumnBox>

				<FlexColumnBox>
					<Label>총 경력</Label>
					<Span>10년</Span>
				</FlexColumnBox>

				<FlexColumnBox>
					<Label>희망 급여</Label>
					<Span>3천억</Span>
				</FlexColumnBox>

				<FlexColumnBox>
					<Label>전문분야 및 상세분야</Label>
					<Tag value='Web' readOnly/>
				</FlexColumnBox>

				<FlexColumnBox>
					<Label>보유 기술</Label>
					<Tag value='React' readOnly/>
				</FlexColumnBox>
				</>
			}
		</IntroduceLayout>
	)
}

export default Introduce;