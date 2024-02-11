import { FiPaperclip as ClipIcon } from "react-icons/fi";

import * as S from '@/components/molecules/message/MultiMediaMessage.styled';

import type { File } from '@/types';

import { Image, Text } from '@/components';

type Props = {
	files: File[];
};

export default function MultiMediaMessage({ files }: Props) {
	const isAllImageType = files?.every((file: File) => file.type.includes('image'));
	const fileType = isAllImageType ? 'image' : 'file';

	return (
		<S.Wrapper $fileType={fileType}>
			{ files?.map((file: File, index: number) => {
				if(isAllImageType && files.length > 1) {
					return (
						<Image
							key={index}
							src={file.url}
							alt={file.name}
							size='100%'
							shape='foursquare'
						/>
					);
				}
				if(isAllImageType && files.length === 1) {
					return (
						<Image
							key={index}
							src={file.url}
							alt={file.name}
							size='18.5rem'
						/>
					)
				}
				return (
					<S.FileItem key={index}>
						<ClipIcon size={16} color='gray' />
						<Text size='label'>
							{file.name}
						</Text>
					</S.FileItem>
				);
			})}
		</S.Wrapper>
	)
}