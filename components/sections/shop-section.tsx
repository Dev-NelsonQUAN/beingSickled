import { ArrowRight, ShoppingBag } from "lucide-react";

export function ShopSection() {
  return (
    <section id="shop" className="relative w-full bg-white overflow-hidden">
      {/*       
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-repeat bg-[length:120px]"
        style={{ backgroundImage: 'url("/shopping-bag-icon.svg")' }}
      /> */}

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-end gap-6 pl-[5%] pr-0 relative z-10">
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start py-12 lg:py-20 pr-6">
          <div className="inline-flex items-center gap-2 text-pink text-xs sm:text-sm font-extrabold tracking-[0.12em] uppercase mb-4">
            <span>SHOPUSEFULLY</span>
            <span className="w-6 h-0.5 bg-pink/40" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-[-1.5px] leading-[1.08] text-[#1b1b1d] mb-6 text-center lg:text-left">
            Carefully curated <br />
            <span className="text-pink">essentials</span> for life <br />
            with <span className="text-pink">sickle cell</span>
          </h2>

          <p className="text-[#3a393a] text-base sm:text-[17px] leading-[1.6] mb-8 font-medium max-w-120 text-center lg:text-left">
            Instead of searching endlessly online, our partner store,
            ShopUsefully brings together products and tools that many people
            living with sickle cell or other chronic illnesses find genuinely
            useful.
          </p>

          <a
            href="https://shopusefully.com/product-category/chronic-illness-essentials/?v=85d1a9c488d7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 md:gap-3 bg-pink hover:bg-[#e00036] text-white font-bold text-[14px] md:text-base px-8 py-4 rounded-md shadow-sm transition-all"
          >
            <ShoppingBag className="w-3.5 md:w-5 h-3.5 md:h-5" />
            <span>Explore Shopusefully</span>
            <ArrowRight className="w-3.5 md:w-5 h-3.5 md:h-5" />
          </a>
        </div>

        <div className="lg:col-span-7 flex justify-end items-end w-full pl-0">
          <img
            src="/shopUsefully.avif"
            alt="ShopUsefully app preview and essential sickle cell products"
            className="w-full max-w-none lg:w-[108%] xl:w-[115%] h-auto block align-bottom -mb-px"
          />
        </div>
      </div>
    </section>
  );
}