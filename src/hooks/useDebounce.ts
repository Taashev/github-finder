import { useEffect, useRef } from 'react';

export function useDebounce<T>(
	call: () => void,
	deps: T[] = [],
	delay: number = 1000,
): void {
	const timeoutIdRef = useRef<number | null>(null);

	useEffect(() => {
		timeoutIdRef.current = setTimeout(call, delay);

		return () => {
			if (timeoutIdRef.current) {
				clearTimeout(timeoutIdRef.current);
			}
		};
	}, [call, delay, ...deps]);
}
