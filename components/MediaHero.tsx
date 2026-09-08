import Link from "next/link";

export function MediaHero() {
  return (
    <section className="relative w-full bg-[#FAF8F8] overflow-hidden py-0 lg:h-[calc(100vh-80px)] min-h-137.5 flex items-center">
      <div className="w-full h-full pl-[5%] lg:pl-[8%] pr-0 grid grid-cols-1 lg:grid-cols-12 items-stretch">
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center items-center lg:items-start z-10 py-12 lg:py-0 pr-6 lg:pr-0">
          <div className="flex items-center gap-3 mb-1.5 md:mb-4">
            <span className="text-[#E61F4D] font-extrabold text-xs sm:text-sm tracking-widest uppercase">
              MEDIA &amp; FEATURES
            </span>
            <span className="w-8 h-0.5 bg-[#E61F4D] inline-block" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#111111] leading-[1.08] mb-1.5 md:mb-3 text-center lg:text-left">
            Telling stories that <br className="hidden sm:block" />
            change lives.
          </h1>

          <div className="w-14 h-0.75 bg-[#E61F4D] mb-6 rounded-full" />

          <p className="text-[#555555] text-sm sm:text-base leading-relaxed mb-4 md:mb-8 max-w-120 text-center lg:text-left">
            We work with media partners, storytellers, and change makers to
            raise accurate awareness about sickle cell and amplify voices that
            are too often unheard
          </p>

          <Link
            href="/https://drive.google.com/drive/folders/1W0ZMu4vXQW0-K9dsU_BJrABZGgFytOHYf"
            target="_blank"
            className="border-2 border-[#E61F4D] text-[#E61F4D] hover:bg-[#E61F4D] hover:text-white font-bold px-6 py-3 rounded-md transition-colors text-sm sm:text-base inline-flex items-center justify-center"
          >
            Download Press Kit
          </Link>
        </div>

        <div className="lg:col-span-6 xl:col-span-7 relative min-h-87.5 lg:min-h-full h-full w-full">
        <div className="absolute inset-y-0 left-0 w-28 sm:w-40 
          via-[#FAF8F8]/20
        bg-linear-to-r from-[#FAF8F8] lg:via-[#FAF8F8]/80 to-transparent z-10 pointer-events-none"
          />

          <img
            src="/media-interview.avif"
            alt="Being Sickled video production and media interview"
            className="w-full h-full object-contain lg:object-cover object-left lg:object-center"
          />
        </div>
      </div>
    </section>
  );
}
