import { useCallback, useState } from "react";

type Props = {
	popUp: (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | MouseEvent) => void;
};

export default function useVideoHandler({ popUp }: Props) {
	const [range, setRange] = useState<any>();

  const videoHandler = useCallback((editor: any) => {
		const range = editor?.getSelection();
    const input = document.createElement('input');

    input.setAttribute('type', 'button');
		input.onclick = (event: MouseEvent) => {
			popUp(event);
		};
    input.click();
		setRange(range);
  }, []);

  return { range, videoHandler }
}