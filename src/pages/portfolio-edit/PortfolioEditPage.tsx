import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Logo from '@/assets/images/logo-white.png';
import { Text, Image, Button, Selector, Tag, QuillEditor } from "@/components";
import { useTagInput, usePreventGoBack, usePreventRefresh, usePortfolioForm } from "@/hooks";
import * as v from '@/pages/portfolio-edit/PortfolioEditPage.constants';
import * as S from "@/pages/portfolio-edit/PortfolioEditPage.styled";

export default function PortfolioEditPage(){
	const location = useLocation();

	const { preventGoBack } = usePreventGoBack();
	usePreventRefresh();

	const portfolio = location.state;

	const { register, handleSubmit, getValues, setValue } = usePortfolioForm({portfolio});
	const { tags, setTags, handleTagInput, handleTag } = useTagInput({getValues, setValue});

	useEffect(() => {
		if(portfolio) {
			setTags(portfolio.tags);
		}
	}, []);

	return(
		<S.Wrapper>
			<S.Content>
				<S.EditorSection>
					<S.Header>
						<S.Logo onClick={() => preventGoBack(`/main/android-ios`)}>
							<Image src={Logo} size='2.3rem'/>
						</S.Logo>
					</S.Header>

					<QuillEditor
						htmlContent={portfolio && portfolio.content}
						setValue={setValue}
						getValues={getValues}
						{...register('content', {
							validate: v.validateContent(getValues),
						})}
					/>
				</S.EditorSection>

				<S.FormSection>
					<S.Form onSubmit={handleSubmit}>
						<S.TitleInput
							{...register('title', {
								required: '제목을 입력하세요.',
								validate: v.validateTitle,
							})}
							placeholder='제목'
						/>

						<Text type='label'>포트폴리오 종류</Text>
						<Selector
							type='section'
							placeholder={portfolio? portfolio.section : 'Android/iOS'}
							setValue={setValue}
							{...register('section')}
						/>

						<Text type='label'>카테고리</Text>
						<Selector
							type='category'
							section={getValues('section')}
							placeholder={portfolio ? portfolio.category : '카테고리'}
							setValue={setValue}
							{...register('category', {
								validate: v.validateCategory,
							})}
						/>

						<Text type='label'>태그</Text>
						<S.TagBox {...register('tags', {
							validate: v.validateTags,
						})}>
							<S.TagInput contentEditable onKeyUp={handleTagInput}/>
							{tags.map((tag: string, index: number) => {
								return <Tag readOnly={false} value={tag} key={index} handleTag={handleTag}/>
							})}
						</S.TagBox>

						<Text type='label'>소개글</Text>
						<S.InputArea
							{...register('summary', {
								required: '소개글을 입력해주세요.',
								validate: v.validateSummary,
							})}
							placeholder='포트폴리오를 소개하세요'
						/>

						<Button color='black' size='medium' shape='square' type='submit'>작성하기</Button>
					</S.Form>
				</S.FormSection>
			</S.Content>
		</S.Wrapper>
	)
}