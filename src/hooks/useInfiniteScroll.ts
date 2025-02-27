import { useEffect, useRef } from 'react';

type UseInfiniteScrollProps<T> = {
	enable?: boolean;
	deps?: T;
	rootMargin?: string;
	root?: Element | Document | null;
};

export function useInfiniteScroll<T>(
	onIntersect: (entry?: IntersectionObserverEntry) => void,
	props: UseInfiniteScrollProps<T>,
) {
	const { enable = true, deps = [], rootMargin, root } = props;

	const observerRef = useRef<HTMLDivElement | null>(null);

	function intersectionObserverCallback(entries: IntersectionObserverEntry[]) {
		const entry = entries[0];

		if (entry.isIntersecting && enable) {
			onIntersect();
		}
	}

	useEffect(() => {
		const observer = new IntersectionObserver(intersectionObserverCallback, {
			root,
			rootMargin,
		});

		if (observerRef.current) {
			observer.observe(observerRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, [enable, rootMargin, ...deps]);

	return observerRef;
}
