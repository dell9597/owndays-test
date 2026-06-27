"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";

import { ProductItem } from "@/src/data/types/product";
import { getImageUrl } from "@/src/utils/image";
import { ColorSwatches } from "@/src/components/modal/ColorSwatches";
import { ProductDrawer } from "@/src/components/modal/ProductDrawer";

type Props = {
  item: ProductItem;
  onClick: (id: number) => void;
};

export default function ProductCard({ item }: Props) {
  const { product, skus, selling_setting } = item;

  const [activeSkuId, setActiveSkuId] = useState<number | undefined>(
    skus?.[0]?.id,
  );

  const [drawerSkuId, setDrawerSkuId] = useState<number | undefined>(
    skus?.[0]?.id,
  );

  const [drawerOpen, setDrawerOpen] = useState(false);

  // const handleOpenDrawer = () => {
  //   setDrawerSkuId(activeSkuId);
  //   setDrawerOpen(true);
  // };

  const activeSku = useMemo(() => {
    return skus.find((sku) => sku.id === activeSkuId) ?? skus[0];
  }, [activeSkuId, skus]);

  const image = getImageUrl(activeSku?.images?.[0]?.path);
  const price = selling_setting?.price ?? 0;

  return (
    <>
      <article className="group flex h-full flex-col border-2 border-neutral-950 bg-white">
        {/* IMAGE — opens drawer */}
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          className="relative m-4 mb-0 aspect-[4/3] overflow-hidden bg-[#F7F7F7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
          aria-label={`Open ${product.model_name} details`}
        >
          {image ? (
            <Image
              src={image}
              alt={product.model_name ?? "product"}
              fill
              sizes="(min-width: 1024px) 31vw, (min-width: 768px) 46vw, 92vw"
              className="object-cover transition duration-500 group-hover:scale-105 cursor-pointer"
            />
          ) : (
            <span className="flex size-full items-center justify-center text-sm text-neutral-500">
              Image unavailable
            </span>
          )}
        </button>

        {/* INFO */}
        <div className="flex flex-1 flex-col gap-2 bg-white px-[17px] pb-0 pt-[18px]">
          <div className="grid grid-cols-[1fr_auto] gap-3 pb-[38px]">
            {/* TITLE */}
            <div className="min-w-0">
              <h3 onClick={() => setDrawerOpen(true)} 
                  className="font-display font-black uppercase leading-[0.88] tracking-[-0.06em] text-[42px] min-[430px]:text-[50px] md:text-[34px] lg:text-[52px] cursor-pointer"
              >
                {product.model_name}
              </h3>
              <p className="mt-2 text-[16px] font-normal uppercase">
                {activeSku
                  ? `${product.code} ${activeSku.code}`
                  : product.code}
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex min-w-0 flex-col justify-between items-end gap-2">
              <ColorSwatches
                skus={skus}
                activeSkuId={activeSkuId}
                onSelect={setActiveSkuId}
              />
              <div className="flex items-baseline gap-1">
                <span className="text-xl sm:text-2xl font-medium text-black">
                  ¥{price.toLocaleString()}
                </span>
                <span className="text-sm sm:text-base font-medium text-black">
                  +tax
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* DRAWER */}
      {drawerOpen && (
        <ProductDrawer
          item={item}
          activeSkuId={drawerSkuId}
          onSkuSelect={setDrawerSkuId}
          onClose={() => setDrawerOpen(false)}
        />
      )}
    </>
  );
}