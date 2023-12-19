/* 2023-07-06 React Quill Editor - 김다함 */
import { memo, useMemo } from 'react';
import "react-quill/dist/quill.snow.css";
import ReactQuill from 'react-quill';

import { EditorContainer } from '@/components/organisms/editor/Editor.styled';

const QuillEditor = memo(() => {
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
    <EditorContainer>
      <ReactQuill
        // ref={}
        // value={}
        // onChange={}
        modules={modules}
        theme="snow"
        style={{ height: '100%', marginBottom: '0' }}
        placeholder={'Write Something...'}
      />
    </EditorContainer>
  )
})

export default QuillEditor;