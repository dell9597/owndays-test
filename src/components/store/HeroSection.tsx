import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative -mt-22 min-h-[677px] md:min-h-[633px] overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/hero.jpg"
        alt="Model wearing OWNDAYS x MELLER sunglasses"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay Image */}
      <Image
        src="/overlay.png"
        alt=""
        fill
        aria-hidden="true"
        sizes="100vw"
        className="object-cover z-[1] opacity-[30%]"
      />

      {/* Content */}
      <div className="absolute inset-0 z-10">
        <h1
          className="
            absolute
            left-1/2
            top-[50%]
            -translate-x-1/2
            -translate-y-1/2

            font-display
            font-black
            uppercase

            text-[70px]
            md:text-[110px]
            leading-[32px]
            md:leading-[62px]
            tracking-[-0.06em]
            md:tracking-normal

            text-[#FF6723]
            bg-black

            whitespace-nowrap

            pt-[15px]
            pb-0
            md:pt-[16px]
            lg:mt-[-56px]
          "
        >
          Products
        </h1>
      </div>
    </section>
  );
}