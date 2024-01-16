import { Text, Tag } from "@/components";
import * as S from "@/components/organisms/profile-description/introduce/Introduce.styled";

export default function Introduce() {
	return(
		<S.Wrapper>
			<S.Box>
				<Text type='label'>소개</Text>
				<S.TextBox>
					blablablablablablalalablablalblablalba
				</S.TextBox>
			</S.Box>

			<S.Box>
				<Text type='label'>지역</Text>
				<Text type='common'>대구</Text>
			</S.Box>

			{ true && // 전문가면
				<>
				<S.Box>
					<Text type='label'>경력사항</Text>
					<ul>
						<li>네이버</li>
						<li>카카오</li>
					</ul>
				</S.Box>

				<S.Box>
					<Text type='label'>총 경력</Text>
					<Text type='common'>10년</Text>
				</S.Box>

				<S.Box>
					<Text type='label'>희망 급여</Text>
					<Text type='common'>3천억</Text>
				</S.Box>

				<S.Box>
					<Text type='label'>전문분야 및 상세분야</Text>
					<Tag value='Web' readOnly/>
				</S.Box>

				<S.Box>
					<Text type='label'>보유 기술</Text>
					<Tag value='React' readOnly/>
				</S.Box>
				</>
			}
		</S.Wrapper>
	)
}