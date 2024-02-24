import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { UseFormGetValues, UseFormSetValue } from 'react-hook-form';

import { useImageQuery } from '@/utils';

type Props = {
	setValue: UseFormSetValue<any>;
	getValues: UseFormGetValues<any>;
};

export default function useImageHandler({setValue, getValues}: Props) {
	const imageMutation = useImageQuery();

  const imageUrlHandler = (editor: any) => {
    const range = editor.getSelection();
    const url = prompt('');

    if (!url) return;
		editor.insertEmbed(range.index, 'image', url);
		editor.setSelection(range.index + 1);
  };

  const imageHandler = useCallback((editor: any) => {
    const input = document.createElement('input');

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.setAttribute('name', 'file');
    input.setAttribute("multiple", "");
    input.click();

    input.onchange = async (event: any) => {
      const files: FileList = event?.target?.files;
      const formData = new FormData();

      for (let i = 0; i < files.length; i++) {
				formData.append("file", files[i]);
      }

			await imageMutation.mutate(formData, {
				onSuccess: (response) => {
					const imageUrl = response.data as string[];
					imageUrl.map((url: string) => {
						const range = editor.getSelection();
						const images = getValues('images');

						setValue('images', [...images, url]);
						editor.insertEmbed(range.index, "image", url);
						editor.setSelection(range.index + 1);
					})
				}
			});
    };
  }, []);

  return { imageUrlHandler, imageHandler }
}