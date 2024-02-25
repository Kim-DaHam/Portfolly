import React, { forwardRef, memo, useMemo, useRef, useState } from 'react';
import "react-quill/dist/quill.snow.css";
import { UseFormGetValues, UseFormSetValue } from 'react-hook-form';
import ReactQuill from 'react-quill';

import * as S from '@/components/molecules/editor/QuillEditor.styled';

import { useImageHandler, usePopup, useVideoHandler } from '@/hooks';
import { eventStopPropagation } from '@/utils';

import { Button, Popper } from '@/components';

type Props = {
	htmlContent?: string;
	setValue: UseFormSetValue<any>;
	getValues: UseFormGetValues<any>;
}

function QuillEditor({htmlContent, setValue, getValues}: Props) {
	const [html, setHTML] = useState(htmlContent);

	const { isPopUp, popUp, popOut } = usePopup();

	const quillRef = useRef<ReactQuill>();
	const { imageUrlHandler, imageHandler } = useImageHandler({setValue, getValues});
	const { range, videoHandler } = useVideoHandler({ popUp });

  const modules = useMemo(
		() => ({
			toolbar: {
				container: [
					[{ 'header': [1, 2, 3, 4, 5, 6, false] }],
					["bold", "italic", "underline", "strike"],
					[{ color: [] }, { 'background': [] }],
					['link'],
					['image', 'video'],
					['clean']
				],
				handlers: {
          imageUrl: () => imageUrlHandler(quillRef.current?.getEditor()),
          image: () => imageHandler(quillRef.current?.getEditor()),
					video: () => videoHandler(quillRef.current?.getEditor()),
        },
			},
	}), []);

	const handleEditor = (value: string) => {
		setValue('content', value, { shouldDirty: true });
		setHTML(value);
	};

	const handleVideoEmbed = (event: React.MouseEvent) => {
		const form = event.currentTarget as HTMLLIElement;
		const input = form.children[0] as HTMLInputElement;
		const editor = quillRef.current?.getEditor() as any;

		setValue('videos', [...getValues('videos'), input.value]);
		editor.insertEmbed(range.index, "video", input.value);
		editor.setSelection(range.index + 1);
		popOut();
	};

  return (
    <S.EditorContainer>
      <ReactQuill
        ref={(element) => {
          if (element !== null) {
            quillRef.current = element;
          }
        }}
        value={html}
        onChange={handleEditor}
        modules={modules}
        theme="snow"
        style={{ height: '100%', marginBottom: '0' }}
        placeholder={'Write Something...'}
      />

			<Popper
				coordinate={{right: 300, bottom: 60}}
				popOut={popOut}
				$popperState={isPopUp}
			>
				<S.Form onClick={handleVideoEmbed}>
					<S.Input
						onClick={eventStopPropagation}
						placeholder='동영상 URL 입력'
					/>
					<Button color='black' type='submit'>
						Embed
					</Button>
				</S.Form>
			</Popper>
    </S.EditorContainer>
  );
}

export default memo(forwardRef(QuillEditor));