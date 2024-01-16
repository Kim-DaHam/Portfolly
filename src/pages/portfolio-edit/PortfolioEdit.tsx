import { useState } from "react";

import * as S from "./PortfolioEdit.styled";

import { Text, Button, Selector, Tag, QuillEditor } from "@/components";
import { Section } from "@/types";

function PortfolioEdit(){
	const [section] = useState<Section>('Android/iOS');

	return(
		<S.PortfolioEditLayout>
			<S.FlexContainer>
				<S.EditorSection>
					<S.EditHeader>
						<S.Logo>Logo</S.Logo>
					</S.EditHeader>

					<QuillEditor/>
				</S.EditorSection>

				<S.FormSection>
					<S.FormBox>
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
					</S.FormBox>
					<Button color='black' size='medium' shape='square'>Submit</Button>
				</S.FormSection>
			</S.FlexContainer>
		</S.PortfolioEditLayout>
	)
}

export default PortfolioEdit;