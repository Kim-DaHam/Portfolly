import { useEffect, useState } from "react";
import { UseFormGetValues, UseFormSetValue } from "react-hook-form";
import { FiPaperclip as ClipIcon , FiX as XIcon } from "react-icons/fi";

import * as S from '@/components/organisms/file-modal/FileModal.styled';

import type { SetState } from "@/types";

import { Image, Text } from '@/components';

type Props = {
	handleFileModal: SetState<boolean>;
	setValue: UseFormSetValue<any>;
	getValues: UseFormGetValues<any>;
};

export default function FileModal({ handleFileModal, setValue, getValues }: Props) {
	const [files, setFiles] = useState<File[]>(getValues('files'));
	const [isAllImageType] = useState<boolean>(files.every((file: File) => file.type.includes('image')));

	const handleFile = (fileItem: File) => {
		const updatedFiles = files.filter((file: File) => {
			const isDeletedFile = file.name === fileItem.name && file.type === fileItem.type;
			return !isDeletedFile;
		});

		setFiles(updatedFiles);
		setValue('files', updatedFiles);
	};

	const closeFileModal = () => {
		setFiles([]);
		setValue('files', []);
		handleFileModal(prev=>!prev);
	};

	useEffect(() => {
		if(files.length === 0) {
			handleFileModal(prev=>!prev);
		}
	}, [files]);

	return (
		<S.Wrapper>
			<XIcon size={16} color='gray' onClick={closeFileModal} />

			<S.Box $flex={isAllImageType ? 'row' : 'column'}>
				{files.map((file: File, index: number) => {
					if(isAllImageType) {
						return (
							<S.ImageBox key={index}>
								<Image src='' alt='첨부 이미지' size='3.5rem' />
								<XIcon size={16} color='gray' onClick={()=>handleFile(file)} />
							</S.ImageBox>
						)
					}

					return (
						<S.FileItem>
							<ClipIcon size={16} color='gray' />
							<Text size='label'>{file.name}</Text>
							<XIcon size={16} color='gray' onClick={()=>handleFile(file)} />
						</S.FileItem>
					)
			})}
			</S.Box>
		</S.Wrapper>
	)
}