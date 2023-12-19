import { useState } from "react";

import { Label } from "../portfolio-detail/PortfolioDetail.styeld";

import { EditHeader, EditorSection, FlexContainer, FormBox, FormSection, Logo, PortfolioEditLayout, SubmitButton, SummaryInputArea, TagBox, TagInput, TitleInput } from "./PortfolioEdit.styled";

import Selector from "@/components/atoms/selector/Selector";
import Tag from "@/components/atoms/tag/Tag";
import Editor from "@/components/organisms/editor/Editor";
import { Section } from "@/types/portfolio";

function PortfolioEdit(){
	const [section] = useState<Section>('Android/iOS');

	return(
		<PortfolioEditLayout>
			<FlexContainer>
				<EditorSection>
					<EditHeader>
						<Logo>Logo</Logo>
					</EditHeader>

					<Editor/>
				</EditorSection>

				<FormSection>
					<FormBox>
						<TitleInput/>

						<Label>Section</Label>
						<Selector type='Section' placeholder='종류'/>

						<Label>Category</Label>
						<Selector type={section} placeholder='카테고리'/>

						<Label>Tags</Label>
						<TagBox>
							<TagInput contentEditable/>
							<Tag readOnly={false} value={'Tag'}/>
						</TagBox>

						<Label>Summary</Label>
						<SummaryInputArea/>
					</FormBox>
					<SubmitButton color='Black'>Submit</SubmitButton>
				</FormSection>
			</FlexContainer>
		</PortfolioEditLayout>
	)
}

export default PortfolioEdit;