/* Functions that allow the application to modify based on screen size */

import { useEffect, useMemo, useState } from "react";

export function useMediaQueryMatches(query: string) {
    const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
    const [matches, setMatches] = useState(mediaQuery.matches);

    useEffect(() => {
        const onChange = (e: MediaQueryListEvent) => {
            setMatches(e.matches);
        };

        mediaQuery.addEventListener('change', onChange);

        return () => {
            mediaQuery.removeEventListener('change', onChange);
        };
    }, [mediaQuery]);

    return matches;
}

export function useIsScreenWidthAtLeast(min: number) {
    const matches = useMediaQueryMatches(`(${min}px <= width)`);
    return matches;
}

export function useIsScreenWidthAtMost(max: number) {
    const matches = useMediaQueryMatches(`(width <= ${max}px)`);
    return matches;
}

export function useIsScreenWidthInrange(min: number, max: number) {
    const matches = useMediaQueryMatches(`(${min}px <= width <= ${max}px)`);
    return matches;
}

export function useIsMobile(cutoff = 480) {
    const isMobile = useIsScreenWidthAtMost(cutoff);
    return isMobile;
}