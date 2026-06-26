import { ProductsResponse } from './types/product';

const PRODUCT_API =
  'https://api-one-alpha-60.vercel.app/meller/products.json';

export const productService = {
  async getProducts(): Promise<ProductsResponse> {
    const res = await fetch(PRODUCT_API);
    console.log("res getProducts",res)

    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }

    return res.json();
  },

  async getProductById(id: number): Promise<ProductsResponse['data'][0] | undefined> {
    const res = await this.getProducts();

    return res.data.find((item) => item.product.id === id);
  },
};