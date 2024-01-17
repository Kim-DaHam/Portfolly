import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

import Logo from '@/assets/images/logo-white.png';
import { Text, Image, Button, Selector, Tag, QuillEditor } from "@/components";
import { useTagInput } from "@/hooks";
import * as S from "@/pages/portfolio-edit/PortfolioEditPage.styled";
import { Section } from "@/types";
import { usePortfolioPostQuery } from "@/utils";

export type FormValues = {
	title: string;
	content: string;
	section: Section;
	category: string;
	tags: string[];
	summary: string;
}

export default function PortfolioEditPage(){
	const navigate = useNavigate();
	const location = useLocation();
	const portfolio = location.state;

	const portfolioMutation = usePortfolioPostQuery(portfolio ? portfolio.id : null);

	const { register, reset, handleSubmit, getValues, setValue, formState: {dirtyFields} } = useForm<FormValues>({
		mode: 'onSubmit',
		defaultValues: {
			title: '',
			content: '',
			section: 'Android/iOS',
			category: '',
			tags: [],
			summary: '',
		}
	});
	const { tags, setTags, handleTagInput, handleTag } = useTagInput({getValues, setValue});

	const onSubmit = (form: FormValues) => {
		if(portfolio) {
			const copyForm: {[key: string]: any} = {...form};
			const changedKeys = Object.keys(dirtyFields);
			const changedValues: {[key: string]: any} = {};

			changedKeys.map((key) => {
				changedValues[key] = copyForm[key];
			});
			changedValues.section = form.section;

			return portfolioMutation.mutate(changedValues);
		}
		return portfolioMutation.mutate(form);
	};

	useEffect(() => {
		if(portfolio) {
			reset({
				title: portfolio.title,
				content: portfolio.content,
				section: portfolio.section,
				category: portfolio.category,
				tags: portfolio.tags,
				summary: portfolio.summary,
			});
			setTags(portfolio.tags);
		}
	}, []);

	return(
		<S.Wrapper>
			<S.Content>
				<S.EditorSection>
					<S.Header>
						<S.Logo onClick={()=>navigate('/main/android-ios')}>
							<Image src={Logo} size='2.3rem'/>
						</S.Logo>
					</S.Header>

					<QuillEditor htmlContent={portfolio && portfolio.content} setValue={setValue} {...register('content')}/>
				</S.EditorSection>

				<S.FormSection>
					<S.Form onSubmit={handleSubmit(onSubmit)}>
						<S.TitleInput
							{...register('title', {
								required: '제목을 입력해주세요.',
								validate: (value) => value.length < 5 ? '5글자 이상 입력해주세요.' : true,
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
								required: '카테고리를 선택해주세요.',
								validate: (value) => value === '카테고리' ? '카테고리를 선택해주세요.' : true,
							})}
						/>

						<Text type='label'>태그</Text>
						<S.TagBox {...register('tags', {
							validate: () => tags.length > 10? '태그는 최대 10개까지 등록 가능합니다.' : true,
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
								validate: (value) => value.length < 20 || value.length > 1000 ? '20글자 이상 1000 글자 미만 입력해주세요.' : true,
							})}
							placeholder='포트폴리오를 소개하세요'
						/>

						<Button color='black' size='medium' shape='square' type='submit'>Submit</Button>
					</S.Form>
				</S.FormSection>
			</S.Content>
		</S.Wrapper>
	)
}