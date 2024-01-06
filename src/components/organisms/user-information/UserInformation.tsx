import { UserInformationLayout } from "./UserInformation.styled";

import { FlexColumnBox, FlexBox } from "@/styles/Container.styled";
import { Label, Text } from "@/styles/Text.styled";

export default function UserInformation() {
	return(
		<UserInformationLayout>
			<Label>활동 정보</Label>
			<FlexColumnBox gap='0.5rem'>
				<FlexBox justify='space-between'>
					<Text size='Medium'>총 작업 수</Text>
					<Text size='Medium'>0개</Text>
				</FlexBox>

				<FlexBox justify='space-between'>
					<Text size='Medium'>만족도</Text>
					<Text size='Medium'>0%</Text>
				</FlexBox>

				<FlexBox justify='space-between'>
					<Text size='Medium'>연락 가능 시간</Text>
					<Text size='Medium'>언제나 가능</Text>
				</FlexBox>
			</FlexColumnBox>
		</UserInformationLayout>
	)
}