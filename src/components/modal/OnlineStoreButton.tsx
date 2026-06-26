import { ONLINE_STORE_BASE_URL } from "@/constants/api";

interface OnlineStoreButtonProps {
  productCode: string;
  disabled?: boolean;
  className?: string;
}

export function OnlineStoreButton({
  productCode,
  disabled = false,
  className = "",
}: OnlineStoreButtonProps) {
  const baseClass =
    "inline-flex min-h-11 items-center justify-center border border-neutral-950 px-5 text-xs font-semibold uppercase tracking-[0.18em] transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950";

  if (disabled) {
    return (
      <button
        type="button"
        disabled
        aria-disabled="true"
        className={`${baseClass} cursor-not-allowed border-neutral-300 bg-neutral-100 text-neutral-400 ${className}`}
      >
        Out of Stock
      </button>
    );
  }

  return (
    <a
      href={`${ONLINE_STORE_BASE_URL}/${productCode}`}
      target="_blank"
      rel="noreferrer"
      className={`${baseClass} bg-neutral-950 text-white hover:bg-white hover:text-neutral-950 ${className}`}
    >
      Online Store
    </a>
  );
}
