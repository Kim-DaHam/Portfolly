import { useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";

import * as S from "@/components/organisms/partner-profile/PartnerProfile.styled";
import { userState } from "@/redux/loginSlice";

import type { Authority, Commission, MessageRoom } from "@/types";

import { useModal } from "@/hooks";
import { toLocalDateString } from "@/utils";

import { Text, Button, Profile, CommissionModal } from "@/components";

type Props = {
	messageRoom: MessageRoom;
};

export default function PartnerProfile({ messageRoom }: Props) {
	const { authority } = useSelector(userState);
	const { isModalOpen, handleModal} = useModal();

	const initialCommission: Commission = {
		createdAt: toLocalDateString(Date.now()),
		endedAt: null,
		review: null,
		portfolio: messageRoom.portfolio,
		client: messageRoom.client!,
		expert: messageRoom.expert,
	};

	return(
		<S.Wrapper>
			<Profile type='message-room' user={messageRoom.partner} />

			<S.ActivityBox>
				<S.Box>
					<Text size='label'>만족도</Text>
					<Text size='label'>{messageRoom.partner?.profile.score}</Text>
				</S.Box>
				<S.Box>
					<Text size='label'>연락 가능 시간</Text>
					<Text size='label'>{messageRoom.partner?.profile.contactTime}</Text>
				</S.Box>
			</S.ActivityBox>

			<Text size='label'>전문가 서비스</Text>
			<Profile type='portfolio' portfolio={messageRoom.portfolio} />

			{ !messageRoom.commission && authority === 'expert' &&
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

			{ messageRoom.commission &&
				<Button color='gray' size='full' onClick={handleModal}>
					의뢰 폼 확인
				</Button>
			}

			{ messageRoom.commission &&
				<CommissionModal
					commission={{
						...messageRoom.commission,
						client: messageRoom.client!,
						expert: messageRoom.expert,
						portfolio: messageRoom.portfolio,
					}}
					handleModal={handleModal}
					$modalState={isModalOpen}
				/>
			}
		</S.Wrapper>
	)
}