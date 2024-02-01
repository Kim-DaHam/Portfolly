import { FiPaperclip as ClipIcon , FiX as XIcon } from "react-icons/fi";


import { Image, Text } from '@/components';
import * as S from '@/components/organisms/file-modal/FileModal.styled';

type Props = {
	files: File[];
};

export default function FileModal({ files }: Props) {
	const isAllImageType = files.every((file: File) => file.type.includes('image'));
	console.log(files);

	return (
		<S.Wrapper>
			<XIcon size={16} color='gray' />

			{ isAllImageType ?
				<S.FlexBox>
					{files.map((file: File, index: number) => {
						return (
							<S.ImageBox>
								<Image src='' alt='첨부 이미지' size='3.5rem' key={index} />
								<XIcon size={16} color='gray' />
							</S.ImageBox>
						)
					})}
				</S.FlexBox>
				:
				files.map((file: File, index: number) => {
					return (
					<S.Box>
						<S.FileItem>
							<S.FlexBox key={index}>
								<ClipIcon size={16} color='gray' />
								<Text type='label'>{file.name}</Text>
							</S.FlexBox>

							<XIcon size={16} color='gray' />
						</S.FileItem>
					</S.Box>
					)
				})
			}
		</S.Wrapper>
	)
}