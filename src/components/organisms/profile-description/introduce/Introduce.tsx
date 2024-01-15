import { Tag } from "@/components";
import * as S from "@/components/organisms/profile-description/introduce/Introduce.styled";
import { Label, Text } from "@/styles/Text.styled";

export default function Introduce() {
	return(
		<S.Wrapper>
			<S.Box>
				<Label>소개</Label>
				<S.TextBox>
					blablablablablablalalablablalblablalba
				</S.TextBox>
			</S.Box>

			<S.Box>
				<Label>지역</Label>
				<Text size='Medium'>대구</Text>
			</S.Box>

			{ true && // 전문가면
				<>
				<S.Box>
					<Label>경력사항</Label>
					<ul>
						<li>네이버</li>
						<li>카카오</li>
					</ul>
				</S.Box>

				<S.Box>
					<Label>총 경력</Label>
					<Text size='Medium'>10년</Text>
				</S.Box>

				<S.Box>
					<Label>희망 급여</Label>
					<Text size='Medium'>3천억</Text>
				</S.Box>

				<S.Box>
					<Label>전문분야 및 상세분야</Label>
					<Tag value='Web' readOnly/>
				</S.Box>

				<S.Box>
					<Label>보유 기술</Label>
					<Tag value='React' readOnly/>
				</S.Box>
				</>
			}
		</S.Wrapper>
	)
}