import { useState } from "react";

import { EditHeader, EditorSection, FlexContainer, FormBox, FormSection, Logo, PortfolioEditLayout, SummaryInputArea, TagBox, TagInput, TitleInput } from "./PortfolioEdit.styled";

import { SquareButton } from "@/components/atoms/button/Button.styled";
import Selector from "@/components/atoms/selector/Selector";
import Tag from "@/components/atoms/tag/Tag";
import Editor from "@/components/molecules/editor/QuillEditor";
import { Label } from "@/styles/Text.styled";
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
					<SquareButton color='Black' size='Medium'>Submit</SquareButton>
				</FormSection>
			</FlexContainer>
		</PortfolioEditLayout>
	)
}

export default PortfolioEdit;