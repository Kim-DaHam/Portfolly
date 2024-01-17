import { KeyboardEventHandler, MouseEventHandler, useState } from "react";
import { UseFormGetValues, UseFormSetValue } from "react-hook-form";

type Props = {
	getValues: UseFormGetValues<any>;
	setValue: UseFormSetValue<any>;
}

export default function useTagInput({getValues, setValue}: Props) {
	const [tags, setTags] = useState<string[]>([]);

	const handleTagInput: KeyboardEventHandler<HTMLDivElement> = (event) => {
		const input = event.target as HTMLDivElement;
		const keyword = input.textContent;

		if (event.keyCode == 13 && keyword) {
			const tags = getValues('tags');
			tags.push(input.textContent!);
			setValue('tags', tags, { shouldDirty: true });
			setTags(tags);
			input.textContent = null;
    }
	};

	const handleTag = (event: React.MouseEvent) => {
		const icon = event.target as HTMLElement;
		console.log(icon.parentElement?.parentElement)
		const tagName = icon.parentElement?.parentElement?.textContent as string;
		const tags = getValues('tags');
		console.log(tags);
		console.log(tagName)

		tags.splice(tags.indexOf(tagName), 1);
		setValue('tags', tags, { shouldDirty: true });
		setTags(tags);
	};

	return { tags, setTags, handleTagInput, handleTag };
}