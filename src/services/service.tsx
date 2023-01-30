import Product from "@/components/ShoppingCart/Product";
import http from "./http-common";
import IProducts from "./IProducts";

const get = () => {
  return http.get<IProducts>(`/products?page=1&rows=10&sortBy=id&orderBy=DESC`);
};

const Products = {
  get,
};

export default Products;
