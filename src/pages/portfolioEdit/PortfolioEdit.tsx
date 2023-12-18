import { Label } from "../portfolio-detail/PortfolioDetail.styeld";

import { EditHeader, EditorSection, FlexContainer, FormBox, FormSection, Logo, PortfolioEditLayout, SubmitButton, SummaryInputArea, TagBox, TagInput, TitleInput } from "./PortfolioEdit.styled";

import Selector from "@/components/atoms/selector/Selector";
import Tag from "@/components/atoms/tag/Tag";

function PortfolioEdit(){
	return(
		<PortfolioEditLayout>
			<EditHeader>
				<Logo>Logo</Logo>
			</EditHeader>

			<FlexContainer>
				<EditorSection>
					EditorSection
				</EditorSection>

				<FormSection>
					<FormBox>
						<TitleInput/>

						<Label>Section</Label>
						<Selector type='Section'/>

						<Label>Category</Label>
						<Selector type='Category'/>

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