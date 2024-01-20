import { Text, Tag } from "@/components";
import * as S from "@/components/organisms/profile-description/introduce/Introduce.styled";

type Props = {
	user: any;
};

export default function Introduce({user}: Props) {
	return(
		<S.Wrapper>
			<S.Box>
				<Text type='label'>소개</Text>
				<S.TextBox>
					{user.profile.introduce}
				</S.TextBox>
			</S.Box>

			<S.Box>
				<Text type='label'>지역</Text>
				<Text type='common'>{user.profile.location}</Text>
			</S.Box>

			{ user?.authority === 'expert' &&
				<>
				<S.Box>
					<Text type='label'>경력사항</Text>
					<ul>
						{ user.profile.careers?.map((career: string, index: number) => {
							return <li key={index}>{career}</li>
						})}
					</ul>
				</S.Box>

				<S.Box>
					<Text type='label'>총 경력</Text>
					<Text type='common'>{user.profile.careerLength}</Text>
				</S.Box>

				<S.Box>
					<Text type='label'>전문분야 및 상세분야</Text>
					{ user.profile.fields?.map((field: string, index: number) => {
						return <Tag key={index} value={field} readOnly/>
					})}
				</S.Box>

				<S.Box>
					<Text type='label'>보유 기술</Text>
					{ user.profile.stacks?.map((stack: string, index: number) => {
						return <Tag key={index} value={stack} readOnly/>
					})}
				</S.Box>
				</>
			}
		</S.Wrapper>
	)
}