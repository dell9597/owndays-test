
'use client';

import { useProducts } from '@/src/data/hook/useProduct';
import ProductCard from '../modal/ProductCard';
import { useRouter } from 'next/navigation';

export default function ProductGrid() {
  const router = useRouter();
  const { data, isLoading, isError } = useProducts();

  if (isLoading) {
    return (
      <div className="p-10 text-lg text-center bg-[#FF6723]">
        Loading products...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-10 text-red-500 text-center">
        Failed to load products
      </div>
    );
  }

  const products = data?.data ?? [];

  const handleClick = (id: number) => {
    router.push(`/product/${id}`);
  };

  return (
    <div id="products" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[17px] px-[17px] sm:px-6 md:px-[70px] pt-[80px] md:pt-[130px] bg-[#FF6723] min-h-screen text-black font-sans antialiased">
      {products.map((item) => (
        <ProductCard
          key={item.product.id}
          item={item}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}