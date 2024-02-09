import * as S from "@/components/organisms/profile-description/introduce/Introduce.styled";

import type { Authority, UserProfile } from "@/types";

import { Text, Tag } from "@/components";

type Props = {
	user: UserProfile & {
		authority: Authority,
	};
};

export default function Introduce({user}: Props) {
	return(
		<S.Wrapper>
			<S.Box>
				<Text size='bodyMedium'>소개</Text>
				<S.TextBox>
					{user.introduce}
				</S.TextBox>
			</S.Box>

			<S.Box>
				<Text size='bodyMedium'>지역</Text>
				<Text size='bodyMedium'>{user.location}</Text>
			</S.Box>

			{ user.authority === 'expert' &&
				<>
				<S.Box>
					<Text size='bodyMedium'>경력사항</Text>
					<ul>
						{ user.careers?.map((career: string, index: number) => {
							return <li key={index}>{career}</li>
						})}
					</ul>
				</S.Box>

				<S.Box>
					<Text size='bodyMedium'>총 경력</Text>
					<Text size='bodyMedium'>{user.careerLength}</Text>
				</S.Box>

				<S.Box>
					<Text size='bodyMedium'>전문분야 및 상세분야</Text>
					<S.TagBox>
						{ user.fields?.map((field: string, index: number) => {
							return <Tag key={index} value={field} readOnly/>
						})}
					</S.TagBox>
				</S.Box>

				<S.Box>
					<Text size='bodyMedium'>보유 기술</Text>
					<S.TagBox>
						{ user.stacks?.map((stack: string, index: number) => {
							return <Tag key={index} value={stack} readOnly/>
						})}
					</S.TagBox>
				</S.Box>
				</>
			}
		</S.Wrapper>
	)
}