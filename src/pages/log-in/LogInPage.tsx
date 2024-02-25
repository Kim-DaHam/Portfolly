import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Logo from '@/assets/images/logo.png';
import * as S from '@/pages/log-in/LogInPage.styled';
import { login } from '@/redux/loginSlice';

import { Button, Image, Text } from '@/components';

export default function LogIn(){
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const loginByTrial = (authority: 'expert' | 'client') => {
		dispatch(login(authority));
		navigate('/main/android-ios');
	};

	return(
		<S.Wrapper>
			<Image
				src={Logo}
				size='2.5rem'
				onClick={() => navigate(`/main/android-ios`)}
			/>
			<Text size='headingMedium'>Welcome</Text>

			<S.ButtonGroup>
				<S.Box>
					<Text size='label'>서비스를 의뢰하고 싶다면</Text>
					<Button size='full' color='transparent' onClick={() => loginByTrial('client')}>
						의뢰인으로 가입
					</Button>
				</S.Box>

				<S.Box>
					<Text size='label'>전문성을 판매하고 싶다면</Text>
					<Button size='full' color='transparent' onClick={() => loginByTrial('expert')}>
						전문가로 가입
					</Button>
				</S.Box>
			</S.ButtonGroup>
		</S.Wrapper>
	)
}