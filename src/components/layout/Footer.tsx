export function Footer() {
  return (
    <footer className="border-t-[2px] border-[#FF6723] font-semibold bg-black text-[#FF6723] uppercase tracking-[0.16em]">
      <div className="flex flex-col md:grid md:grid-cols-[1.2fr_0.8fr] md:min-h-[350px] border-b border-[#FF6723]">
        
        {/* ฝั่งซ้าย / เมนูหลักบน Mobile */}
        <nav
          aria-label="Footer navigation"
          className="flex flex-col md:justify-between md:px-[70px] md:py-[70px] text-sm md:border-r-[2px] md:border-[#FF6723]"
        >
        <div className="flex flex-col text-[18px] md:gap-[20px]">
          {/* ABOUT */}
          <a 
            href="#about" 
            className="group flex items-center justify-between px-[30px] py-[20px] border-b-[2px] border-[#FF6723] md:border-b-0 md:p-0 md:w-fit transition"
          >
            <span className="transition hover:text-white font-display font-semibold">About</span>
            <span className="text-[20px] md:hidden transition hover:text-white">&gt;</span>
          </a>

          {/* PRODUCTS */}
          <a 
            href="#products" 
            className="group flex items-center justify-between px-[30px] py-[20px] border-b-[2px] border-[#FF6723] md:border-b-0 md:p-0 md:w-fit transition"
          >
            <span className="transition hover:text-white font-display font-semibold">Products</span>
            <span className="text-[20px] md:hidden transition hover:text-white">&gt;</span>
          </a>

          {/* STORES */}
          <a 
            href="#stores" 
            className="group flex items-center justify-between px-[30px] py-[20px] border-b-[2px] border-[#FF6723] md:border-b-0 md:p-0 md:w-fit transition"
          >
            <span className="transition hover:text-white font-display font-semibold">Stores</span>
            <span className="text-[20px] md:hidden transition hover:text-white">&gt;</span>
          </a>
        </div>
          
          <a
            href="https://www.instagram.com/owndays_jp/"
            target="_blank"
            rel="noreferrer"
            className="hidden md:block mt-12 w-fit transition hover:text-white"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-6"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </nav>

        {/* ฝั่งขวา: Online Store (บน Mobile จะแสดงผลแบบเว้นซ้ายขวาตามรูป) */}
        <div className="flex flex-col justify-center px-[30px] py-[45px] md:p-12 border-b-[2px] border-[#FF6723] md:border-b-0">
          <a
            href="https://www.owndays.com"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-row items-center justify-between md:flex-col md:justify-center md:gap-4 text-[#FF6723]"
          >
            {/* Shopping Cart + Text */}
            <span className="flex items-center gap-3 text-[16px] md:text-[21px] font-display font-medium transition group-hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-5 md:size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              Online Store
            </span>
            
            {/* Website Link + External Icon */}
            <span className="flex items-center gap-2 text-[11px] md:text-[14px] font-display font-medium tracking-[0.08em] transition group-hover:text-white">
              owndays.com

              <svg
                viewBox="0 0 32 32"
                className="w-6 h-6 shrink-0"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M4 4L4 24H11V22H6V6H18V7H20V4ZM12 8V28H28V8ZM14 10H26V26H14Z"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>

      <div className="flex flex-col px-0 py-0 md:px-[70px] md:py-[30px] text-[13px] font-bold tracking-[0.1em] md:flex-row md:items-center md:justify-between">
        
        <div className="flex flex-col gap-[20px] lg:gap-[40px] md:flex-row md:flex-wrap pt-[30px] px-[30px] md:pt-[0px] md:px-[0px]">
          <a href="#contact" className="transition hover:text-white">Contact Us</a>
          <a href="#privacy" className="transition hover:text-white">Privacy Policy</a>
          <a href="#terms" className="transition hover:text-white">Terms of Use</a>
          <a href="#legal" className="transition hover:text-white">特定商取引法表示</a>
        </div>

        <a
          href="https://www.instagram.com/owndays_jp/"
          target="_blank"
          rel="noreferrer"
          className="block md:hidden w-fit text-[#FF6723] transition hover:text-white py-[34px] px-[30px] md:py-[0px] md:px-[0px]"
          aria-label="Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-6"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>

        <div className="w-full h-[2px] bg-[#FF6723] md:hidden" />
        
        <p className="text-[#FF6723] text-[11px] md:text-[12px] font-normal py-[30px] px-[30px] md:py-[0px] md:px-[0px] tracking-normal md:tracking-[0.1em]">
          Copyright (C) OWNDAYS CO., LTD. All rights reserved.
        </p>
      </div>
    </footer>
  );
}