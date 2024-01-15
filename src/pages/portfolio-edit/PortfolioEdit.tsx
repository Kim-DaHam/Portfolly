import { useState } from "react";

import * as S from "./PortfolioEdit.styled";

import { SquareButton } from "@/components/atoms/button/Button.styled";
import Selector from "@/components/atoms/selector/Selector";
import Tag from "@/components/atoms/tag/Tag";
import Editor from "@/components/molecules/editor/QuillEditor";
import { Label } from "@/styles/Text.styled";
import { Section } from "@/types/portfolio";

function PortfolioEdit(){
	const [section] = useState<Section>('Android/iOS');

	return(
		<S.PortfolioEditLayout>
			<S.FlexContainer>
				<S.EditorSection>
					<S.EditHeader>
						<S.Logo>Logo</S.Logo>
					</S.EditHeader>

					<Editor/>
				</S.EditorSection>

				<S.FormSection>
					<S.FormBox>
						<S.TitleInput/>

						<Label>Section</Label>
						<Selector type='Section' placeholder='종류'/>

						<Label>Category</Label>
						<Selector type={section} placeholder='카테고리'/>

						<Label>Tags</Label>
						<S.TagBox>
							<S.TagInput contentEditable/>
							<Tag readOnly={false} value={'Tag'}/>
						</S.TagBox>

						<Label>Summary</Label>
						<S.SummaryInputArea/>
					</S.FormBox>
					<SquareButton color='Black' size='Medium'>Submit</SquareButton>
				</S.FormSection>
			</S.FlexContainer>
		</S.PortfolioEditLayout>
	)
}

export default PortfolioEdit;