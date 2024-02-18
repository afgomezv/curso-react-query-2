import { type Product, productsApi } from "..";
import { sleep } from "../helpers/sleep";

interface GetProductsOptions {
  filterKey?: string;
}

export const getProducts = async ({
  filterKey,
}: GetProductsOptions): Promise<Product[]> => {
  sleep(2);

  const filterUrl = filterKey ? `category=${filterKey}` : "";

  const { data } = await productsApi.get<Product[]>(`/products?${filterUrl}`);
  return data;
};

export const getProductById = async (id: number): Promise<Product> => {
  sleep(2);

  const { data } = await productsApi.get<Product>(`/products/${id}`);
  console.log(data);
  return data;
};
