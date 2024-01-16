import { memo, useMemo, useRef, useState } from 'react';
import "react-quill/dist/quill.snow.css";
import { UseFormSetValue } from 'react-hook-form';
import ReactQuill from 'react-quill';

import * as S from '@/components/molecules/editor/QuillEditor.styled';

type Props = {
	htmlContent?: string;
	setValue: UseFormSetValue<any>;
}

export default memo(function QuillEditor({htmlContent, setValue}: Props) {
	const [html, setHTML] = useState(htmlContent);
	const quillRef = useRef<ReactQuill>();

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
          imageUrl: () => {},
          image: () => {},
        },
      },
    }), []);

		const handleEditor = (value: string) => {
			setValue('content', value);
			setHTML(value);
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
    </S.EditorContainer>
  );
})