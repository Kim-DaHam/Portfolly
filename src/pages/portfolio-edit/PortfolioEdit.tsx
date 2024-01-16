import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Logo from '@/assets/images/logo-white.png';
import { Text, Image, Button, Selector, Tag, QuillEditor } from "@/components";
import * as S from "@/pages/portfolio-edit/PortfolioEdit.styled";

function PortfolioEdit(){

	const navigate = useNavigate();
	const location = useLocation();
	const portfolio = location.state;
	console.log(portfolio)

	return(
		<S.Wrapper>
			<S.Content>
				<S.EditorSection>
					<S.Header>
						<S.Logo onClick={()=>navigate('/main/android-ios')}>
							<Image src={Logo} size='2.3rem'/>
						</S.Logo>
					</S.Header>

					<QuillEditor htmlContent={portfolio? portfolio.content : ''}/>
				</S.EditorSection>

				<S.FormSection>
					<S.Form>
						<S.TitleInput value={portfolio ? portfolio.title : ''} placeholder='제목'/>

						<Text type='label'>종류</Text>
						<Selector type='section' placeholder={portfolio? portfolio.section : '종류'}/>

						<Text type='label'>카테고리</Text>
						<Selector
							type={portfolio? portfolio.section : 'Android/iOS'}
							placeholder={portfolio ? portfolio.category : '카테고리'}/>

						<Text type='label'>태그</Text>
						<S.TagBox>
							<S.TagInput contentEditable/>
							{portfolio && portfolio.tags.map((tag: string, index: number) => {
								return <Tag readOnly={false} value={tag} key={index}/>
							})}
						</S.TagBox>

						<Text type='label'>소개글</Text>
						<S.InputArea value={portfolio ? portfolio.summary : ''} placeholder='포트폴리오를 소개하세요'/>
					</S.Form>

					<Button color='black' size='medium' shape='square'>Submit</Button>
				</S.FormSection>
			</S.Content>
		</S.Wrapper>
	)
}

export default PortfolioEdit;