"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {
  ProductItem,
  ProductSku,
  ProductColor,
} from "@/src/data/types/product";
import { getImageUrl } from "@/src/utils/image";

interface Props {
  item: ProductItem | null;
  activeSkuId: number | undefined;
  onSkuSelect: (skuId: number) => void;
  onClose: () => void;
}

function getColorName(color: ProductColor, lang = "en"): string {
  return (
    color.localizations.find((l) => l.language_code === lang)?.name ??
    color.name
  );
}

function getSkuColorLabel(sku: ProductSku, lang = "en"): string {
  return sku.colors.map((c) => getColorName(c, lang)).join(" / ") || sku.code;
}

export function ProductDrawer({
  item,
  activeSkuId,
  onSkuSelect,
  onClose,
}: Props) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const isOpen = item !== null;

  const [visible, setVisible] = useState(false);

  // Trigger slide-in หลัง component mount (1 rAF เพื่อให้ browser วาด initial state ก่อน)
  useEffect(() => {
    if (!isOpen) return;
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, [isOpen]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus
  useEffect(() => {
    if (isOpen) drawerRef.current?.focus();
  }, [isOpen]);

  // Slide-out ก่อน onClose จริง — รอ transition จบก่อน unmount
  const handleClose = () => {
    setVisible(false);
    // ตรงกับ duration สูงสุด (700ms desktop) + buffer เล็กน้อย
    setTimeout(onClose, 720);
  };

  if (!item) return null;

  const { product, skus, selling_setting, localization, product_type } = item;

  const activeSku = skus.find((sku) => sku.id === activeSkuId) ?? skus[0];
  const images = activeSku?.images ?? [];
  const price = selling_setting?.price ?? 0;
  const productCode = activeSku
    ? `${product.code} ${activeSku.code}`
    : product.code;

  const storeUrl = `https://www.owndays.com/jp/en/products/${product.code}`;
  const inStock = (selling_setting?.in_stock ?? 0) > 0;

  return (
    <>
      {/* ── Backdrop ── */}
      <div
        aria-hidden="true"
        onClick={handleClose}
        className="fixed inset-0 z-40 bg-[black/40]"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 500ms ease-in-out",
          backdropFilter: visible ? "blur(6px)" : "blur(0px)",
          WebkitBackdropFilter: visible ? "blur(6px)" : "blur(0px)", // Safari
        }}
      />

      {/* ── Drawer ── */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label={product.model_name}
        tabIndex={-1}
        className="fixed right-0 top-0 z-50 flex h-full px-[16px] py-[16px] md:px-0 md:py-0 w-full max-w-[616px] flex-col bg-transparent outline-none focus-visible:outline-none"
        style={{
          // slide in จากขวา
          transform: visible ? "translateX(0)" : "translateX(100%)",
          transition:
            "transform var(--drawer-duration, 700ms) cubic-bezier(0.32, 0.72, 0, 1)",
        }}
      >
        {/* inject duration ตาม breakpoint */}
        <style>{`
          @media (max-width: 767px) {
            :root { --drawer-duration: 500ms; }
          }
          @media (min-width: 768px) {
            :root { --drawer-duration: 700ms; }
          }
        `}</style>

        {/* ── Header ── */}
        <div className="flex items-center justify-between bg-[#F0F0F0] px-6 pt-7 pb-5 rounded-tl-[20px] rounded-tr-[20px] md:rounded-tr-[0px]">
          <h2 className="text-[36px] font-black uppercase leading-none text-[#FF6723]">
            {product.model_name}
          </h2>

          <button
            type="button"
            onClick={handleClose}
            aria-label="Close drawer"
            className="flex size-9 items-center justify-center text-[#FF6723] transition hover:opacity-70 cursor-pointer"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="2" y1="2" x2="18" y2="18" />
              <line x1="18" y1="2" x2="2" y2="18" />
            </svg>
          </button>
        </div>

        {/* ── Swiper Carousel ── */}
        <div className="bg-[#F0F0F0] min-h-[300px] md:min-h-[399px] mt-[-1px]">
          <Swiper
            key={activeSku?.id}
            slidesPerView={2}
            centeredSlides={true}
            spaceBetween={12}
          >
            {images.length > 0 ? (
              images.map((img) => (
                <SwiperSlide key={img.path}>
                  <div className="relative aspect-square w-full">
                    <Image
                      src={getImageUrl(img.path) ?? ""}
                      alt={product.model_name}
                      fill
                      sizes="420px"
                      className="object-contain p-6"
                    />
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <div className="flex aspect-square w-full items-center justify-center text-sm text-white">
                  Image unavailable
                </div>
              </SwiperSlide>
            )}
          </Swiper>

          {/* Color buttons */}
          {skus.length > 1 && (
            <div className="flex flex-wrap justify-center gap-2 px-6 pb-4">
              {skus.map((sku) => {
                const isActive = sku.id === activeSku?.id;
                const label = getSkuColorLabel(sku);
                return (
                  <button
                    key={sku.id}
                    type="button"
                    onClick={() => onSkuSelect(sku.id)}
                    aria-pressed={isActive}
                    className={`border px-[10px] pt-[7px] pb-[6px] text-[8px] sm:text-[11px] md:text-[12px] rounded-[60px] font-medium uppercase tracking-widest transition cursor-pointer
                      ${
                        isActive
                          ? "border-[#000000] bg-[#000000] text-white"
                          : "border-[#000000] bg-white text-[#000000] hover:border-[#000000] hover:text-[#000000]"
                      }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* ── Info section ── */}
        <div className="flex flex-1 flex-col justify-center overflow-y-auto bg-[#000000] px-4 sm:px-6 md:px-10 lg:px-20 py-7 text-white rounded-bl-[20px] rounded-br-[20px] md:rounded-br-[0px]">
          <dl className="mb-6 space-y-3">
            <div className="flex gap-8">
              <dt className="w-14 shrink-0 text-[px] font-medium uppercase tracking-widest text-white">
                P/No.
              </dt>
              <dd className="text-[14px] font-normal uppercase text-white">
                {productCode}
              </dd>
            </div>
            <div className="flex gap-8">
              <dt className="w-14 shrink-0 text-[14px] font-medium uppercase tracking-widest text-white">
                TYPE
              </dt>
              <dd className="text-[14px] font-normal uppercase text-white">
                {product_type?.name ?? "—"}
              </dd>
            </div>
            <div className="flex gap-8">
              <dt className="w-14 shrink-0 text-[14px] font-medium uppercase tracking-widest text-white">
                PRICE
              </dt>
              <dd className="text-[14px] font-medium text-white">
                ¥{price.toLocaleString()}{" "}
                <span className="font-normal text-white">税込</span>
              </dd>
            </div>
          </dl>

          {localization?.description && (
            <p className="mb-8 text-sm leading-relaxed text-neutral-300">
              {localization.description}
            </p>
          )}

          {/* CTA */}
          <div>
            {inStock ? (
              <a
                href={storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-[60px] bg-[#FF6723] px-6 py-4 text-[16px] font-semibold uppercase tracking-widest text-white transition hover:bg-[#923B14] hover:text-white active:scale-[0.98]"
              >
                ONLINE STORE
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="flex w-full cursor-not-allowed items-center justify-center rounded-[60px] bg-[#D9D9D9] px-6 py-4 text-[16px] font-semibold uppercase tracking-widest text-white"
              >
                OUT OF STOCK
              </button>
            )}
            <p className="text-center text-[12px] font-medium text-white pt-[20px]">
              OWNDAYSオンラインストアに移動します
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
