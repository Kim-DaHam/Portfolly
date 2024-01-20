import { Text, Tag } from "@/components";
import * as S from "@/components/organisms/profile-description/introduce/Introduce.styled";

type Props = {
	user: any;
};

export default function Introduce({user}: Props) {
	console.log(user)
	return(
		<S.Wrapper>
			<S.Box>
				<Text type='label'>소개</Text>

				<S.TextBox>
					{user.introduce}
				</S.TextBox>
			</S.Box>

			<S.Box>
				<Text type='label'>지역</Text>
				<Text type='common'>{user.location}</Text>
			</S.Box>

			{ user.authority === 'expert' &&
				<>
				<S.Box>
					<Text type='label'>경력사항</Text>
					<ul>
						{ user.careers.map((career: string, index: number) => {
							return <li key={index}>{career}</li>
						})}
					</ul>
				</S.Box>

				<S.Box>
					<Text type='label'>총 경력</Text>
					<Text type='common'>{user.careerLength}</Text>
				</S.Box>

				<S.Box>
					<Text type='label'>전문분야 및 상세분야</Text>
					<S.TagBox>
						{ user.fields.map((field: string, index: number) => {
							return <Tag key={index} value={field} readOnly/>
						})}
					</S.TagBox>
				</S.Box>

				<S.Box>
					<Text type='label'>보유 기술</Text>
					<S.TagBox>
						{ user.stacks.map((stack: string, index: number) => {
							return <Tag key={index} value={stack} readOnly/>
						})}
					</S.TagBox>
				</S.Box>
				</>
			}
		</S.Wrapper>
	)
}