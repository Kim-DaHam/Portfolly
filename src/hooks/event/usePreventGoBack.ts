import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function usePreventGoBack() {
	const navigate = useNavigate();

  const preventGoBack = (url?: string) => {
    const isGoBack = confirm('사이트에서 나가시겠습니까? 작성된 내용은 저장되지 않습니다.');

		if(isGoBack && url){
			navigate(url);
			return;
		}
		navigate(-2);
  };

  useEffect(() => {
		history.pushState(null, "", location.href);
    window.addEventListener("popstate", ()=>preventGoBack);

    return () => {
      window.removeEventListener("popstate", ()=>preventGoBack);
    };
  }, []);

	return { preventGoBack };
}