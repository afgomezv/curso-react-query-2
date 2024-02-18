import { useQueryClient } from "@tanstack/react-query";
import { productActions } from "..";

export const usePrefetchProduct = () => {
  const queryClient = useQueryClient();

  const preFetchProduct = (id: number) => {
    queryClient.prefetchQuery({
      queryKey: ["product", id],
      queryFn: () => productActions.getProductById(id), // The key to store the data in the Query Client's cache
    });
  };

  return preFetchProduct;
};
