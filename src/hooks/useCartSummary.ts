
import { useCartStore } from "@/store";
import { useMemo } from "react";

export const useCartSummary = () => {
    const cart = useCartStore((state) => state.cart);

    const summary = useMemo(() => {
        return useCartStore.getState().getSummaryInformation();
    }, [cart]);

    return summary;
};