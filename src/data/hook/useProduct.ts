'use client';
import { useQuery } from '@tanstack/react-query';
import { productService } from '@/src/data/products';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: productService.getProducts,

    staleTime: 1000 * 60 * 5, // cache 5 นาที
    gcTime: 1000 * 60 * 10, // เก็บ cache 10 นาที

    retry: 2,

    refetchOnWindowFocus: false,
  });
};