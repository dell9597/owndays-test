import Image from "next/image";
import type { ProductSku } from "@/src/data/types/product";
import { getImageUrl } from "@/src/utils/image";

interface ColorSwatchesProps {
  skus?: ProductSku[];
  activeSkuId?: number;
  onSelect?: (skuId: number) => void;
}

export function ColorSwatches({
  skus = [],
  activeSkuId,
  onSelect,
}: ColorSwatchesProps) {
  if (!skus.length) return null;

  return (
<div className="flex flex-wrap justify-end gap-1.5" aria-label="Available colors">
  {skus.map((sku) => {
    const isActive = activeSkuId === sku.id;
    const color = sku.colors?.[0];
    const label = color?.name ?? sku.code;
    const colorImageUrl = getImageUrl(color?.path);

    return (
      <button
        key={sku.id}
        type="button"
        aria-label={`Select ${label}`}
        aria-pressed={isActive}
        onClick={(e) => {
          e.stopPropagation();
          onSelect?.(sku.id);
        }}
        className={`relative w-[28px] h-[28px] md:w-[28px] md:h-[28px] lg:w-[38px] lg:h-[38px] overflow-hidden rounded-full border transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 cursor-pointer ${
          isActive
            ? "border-white ring-2 ring-[#FF6723] ring-offset-2"
            : "border-neutral-300 hover:border-[#FF6723]"
        }`}
      >
        {color?.path ? (
          <Image
            src={colorImageUrl}
            alt=""
            fill
            sizes="24px"
            className="object-cover"
          />
        ) : (
          <span
            className="block size-full"
            style={{ backgroundColor: color?.hex_code ?? "#d8d4ce" }}
          />
        )}
      </button>
    );
  })}
</div>
  );
}