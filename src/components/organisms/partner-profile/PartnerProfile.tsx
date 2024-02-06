import { useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";

import * as S from "@/components/organisms/partner-profile/PartnerProfile.styled";
import { userState } from "@/redux/loginSlice";

import { useModal } from "@/hooks";
import { toLocalDateString } from "@/utils";

import { Text, Button, Profile, CommissionModal } from "@/components";

type Props = {
	message: any;
};

export default function PartnerProfile({ message }: Props) {
	const queryClient = useQueryClient();

	const { authority } = useSelector(userState);
	const { isModalOpen, handleModal} = useModal();

	const messageQuery = queryClient.getQueryData(['message', `${message.partner.id}`]) as any;

	const initialCommission = {
		id: undefined,
		portfolioId: message.portfolioId,
		clientId: message.clientId,
		portfolio: message.portfolio,
		createdAt: toLocalDateString(new Date(Date.now())),
		expert: message.portfolio.expert,
	};

	console.log(message)

	return(
		<S.Wrapper>
			<Profile type='message-room' user={message.partner} />

			<S.ActivityBox>
				<S.Box>
					<Text size='label'>만족도</Text>
					<Text size='label'>{message.partner.score}</Text>
				</S.Box>
				<S.Box>
					<Text size='label'>연락 가능 시간</Text>
					<Text size='label'>{message.partner.contactTime}</Text>
				</S.Box>
			</S.ActivityBox>

			<Text size='label'>전문가 서비스</Text>
			<Profile type='portfolio' portfolio={message.portfolio} />

			{ !message.commission && authority === 'expert' &&
				<>
					<Button color='black' size='full' onClick={handleModal}>
						의뢰 폼 작성
					</Button>

					<CommissionModal
					editMode
					commission={initialCommission}
					handleModal={handleModal}
					$modalState={isModalOpen}
					/>
				</>
			}

			{ message.commission &&
				<Button color='gray' size='full' onClick={handleModal}>
					의뢰 폼 확인
				</Button>
			}

			{ messageQuery && message.commission &&
				<CommissionModal
					commission={messageQuery.commission}
					handleModal={handleModal}
					$modalState={isModalOpen}
				/>
			}
		</S.Wrapper>
	)
}