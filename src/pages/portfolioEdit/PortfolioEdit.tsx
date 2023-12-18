import { Label } from "../portfolio-detail/PortfolioDetail.styeld";

import { EditHeader, EditorSection, FlexContainer, FormBox, FormSection, Logo, PortfolioEditLayout, SubmitButton, SummaryInputArea, TagBox, TitleInput } from "./PortfolioEdit.styled";

import Selector from "@/components/atoms/selector/Selector";

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

						<Label>Category</Label>
						<Selector type='Category'/>

						<Label>Tags</Label>
						<TagBox>
							tagBox
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