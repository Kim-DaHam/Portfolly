import { useEffect, useRef, useState } from "react";

export default function useIntersectionObserver(onIntersect: ()=>void) {
	const [observationTarget, setObservationTarget] = useState<HTMLElement | null>(null);

	const observer = useRef(
    new IntersectionObserver(([entry]) => {
			if (!entry.isIntersecting) return;
			onIntersect();
		},
		{ threshold: 1 }
	));

	useEffect(()=>{
		const currentTarget = observationTarget;
    const currentObserver = observer.current;

    if(currentTarget) {
      currentObserver.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        currentObserver.unobserve(currentTarget);
      }
    };
	}, [observationTarget]);

	return setObservationTarget;
}