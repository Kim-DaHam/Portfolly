import { FiPaperclip as ClipIcon } from "react-icons/fi";

import * as S from '@/components/molecules/message/MultiMediaMessage.styled';

import type { File } from '@/types';

import { Image, Text } from '@/components';

type Props = {
	files: File[] | null;
};

export default function MultiMediaMessage({ files }: Props) {
	const isAllImageType = files?.every((file: File) => file.type.includes('image'));
	const fileType = isAllImageType ? 'image' : 'text';

	return (
		<S.Wrapper $fileType={fileType}>
			{ files?.map((file: File, index: number) => {
				if(isAllImageType) {
					return (
						<Image
							key={index}
							src={file.url}
							alt={file.name}
							size={files.length > 1 ? '100%' : '18.5rem'}
							shape={files.length > 1 ? 'foursquare' : 'square'}
							onClick={()=>window.open(file.url)}
						/>
					);
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