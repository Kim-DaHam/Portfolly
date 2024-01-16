import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from '@/assets/images/logo.png';
import { Text, Image, Button, Selector, Tag, QuillEditor } from "@/components";
import * as S from "@/pages/portfolio-edit/PortfolioEdit.styled";
import { Section } from "@/types";

function PortfolioEdit(){
	const [section] = useState<Section>('Android/iOS');

	const navigate = useNavigate();

	return(
		<S.Wrapper>
			<S.Content>
				<S.EditorSection>
					<S.Header>
						<S.Logo onClick={()=>navigate('/main/android-ios')}>
							<Image src={Logo} size='2.3rem'/>
						</S.Logo>
					</S.Header>

					<QuillEditor/>
				</S.EditorSection>

				<S.FormSection>
					<S.Form>
						<S.TitleInput/>

						<Text type='label'>Section</Text>
						<Selector type='Section' placeholder='종류'/>

						<Text type='label'>Category</Text>
						<Selector type={section} placeholder='카테고리'/>

						<Text type='label'>Tags</Text>
						<S.TagBox>
							<S.TagInput contentEditable/>
							<Tag readOnly={false} value={'Tag'}/>
						</S.TagBox>

						<Text type='label'>Summary</Text>
						<S.SummaryInputArea/>
					</S.Form>

					<Button color='black' size='medium' shape='square'>Submit</Button>
				</S.FormSection>
			</S.Content>
		</S.Wrapper>
	)
}

export default PortfolioEdit;