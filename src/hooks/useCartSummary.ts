
import { useCartStore } from "@/store";


export const useCartSummary = () => {
  useCartStore((state) => state.cart); // Para suscribirte

  return useCartStore.getState().getSummaryInformation(); // Resultado directo
};