import { memo, useMemo } from 'react';
import "react-quill/dist/quill.snow.css";
import ReactQuill from 'react-quill';

import * as S from '@/components/molecules/editor/QuillEditor.styled';

export default memo(function QuillEditor() {
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

  return (
    <S.EditorContainer>
      <ReactQuill
        // ref={}
        // value={}
        // onChange={}
        modules={modules}
        theme="snow"
        style={{ height: '100%', marginBottom: '0' }}
        placeholder={'Write Something...'}
      />
    </S.EditorContainer>
  );
})