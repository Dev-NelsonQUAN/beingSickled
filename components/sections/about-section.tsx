import { BookOpen, Heart, MessageCircleHeart, Users } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 lg:grid-cols-[49%_51%] bg-[#FCF5F5] min-h-131.25 relative"
    >
      <div className="px-[6%] py-12 md:py-14 lg:pl-[6%] lg:pr-[6%] flex flex-col justify-center z-10">
        <div className="mb-0 flex flex-col items-center lg:items-start">
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-[-1.5px] text-[#1b1b1d] m-0">
            Why we Exist
          </h2>
          <span className="block w-21.25 h-1 bg-pink mt-4.25 mb-5.75 rounded-full" />
        </div>

        <p className="text-base leading-relaxed font-medium text-[#1b1b1d] mb-4 lg:w-150 text-center lg:text-left">
          Growing up with sickle cell meant navigating pain, stigma,
          misinformation, and barriers that extended far beyond healthcare.
          After publicly sharing founder Joy Sanni&apos;s journey in 2021,
          thousands of people reached out with similar experiences.
        </p>

        <p className="text-base leading-relaxed text-[#1b1b1d] font-bold mb-6 text-center lg:text-left">
          Those conversations revealed a gap that stretched far beyond
          awareness.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2 my-7">
          <div className="px-2 text-center border-r-2 sm:border-r border-dashed border-pink/60 flex flex-col items-center gap-1 text-xs sm:text-[12px]">
            <BookOpen className="text-pink w-7 h-7 sm:w-8.25 sm:h-8.25 mb-0" />

            <div>
              <p className="font-medium">People needed</p>
              <span className="font-bold">practical guidance</span>
            </div>
          </div>

          <div className="px-2 text-center border-r-0 sm:border-r border-dashed border-pink/60 flex flex-col items-center gap-1 text-xs sm:text-[12px]">
            <Users className="text-pink w-5 h-5 sm:w-8.25 sm:h-8.25 mb-0" />

            <div>
              <p className="font-medium">Parents needed</p>
              <span className="font-bold">trusted educational resources.</span>
            </div>
          </div>

          <div className="px-2 text-center border-r-2 sm:border-r border-dashed border-pink/60 flex flex-col items-center gap-1 text-xs sm:text-[12px]">
            <Heart className="text-pink w-7 h-7 sm:w-8.25 sm:h-8.25 mb-0" />

            <div>
              <p className="font-medium">Young people wanted </p>
              <span className="font-bold">to feel understood.</span>
            </div>
          </div>

          <div className="px-2 text-center flex flex-col items-center gap-1 text-xs sm:text-[12px]">
            <MessageCircleHeart className="text-pink w-7 h-7 sm:w-8.25 sm:h-8.25 mb-0" />

            <div>
              <p className="font-medium">Families needed</p>
              <span className="font-bold">hope.</span>
            </div>
          </div>
        </div>

        <p className="text-base leading-relaxed text-[#1b1b1d] text-center lg:text-left">
          <b className="font-bold">Being Sickled</b> was created to meet those
          needs through education, advocacy, community, and access to reliable
          resources.
        </p>
      </div>

      <div className="min-h-75 lg:min-h-131.25 overflow-hidden relative">
        <div className="hidden lg:block absolute top-0 bottom-0 left-0 w-32 xl:w-48 bg-linear-to-r from-[#FCF5F5] via-[#FCF5F5]/80 to-transparent z-10 pointer-events-none" />

        <div className="block lg:hidden absolute top-0 left-0 right-0 h-16 bg-linear-to-b from-[#FCF5F5] to-transparent z-10 pointer-events-none" />

        <img
          src="/beWarriors.avif"
          alt="The Being Sickled community wearing warrior shirts"
          className="w-full h-full object-cover object-[52%_45%]"
        />
      </div>
    </section>
  );
}

// import { BookOpen, Heart, MessageCircleHeart, Users } from 'lucide-react'

// export function AboutSection() {
//   return (
//     <section id="about" className="grid grid-cols-1 lg:grid-cols-[49%_51%] bg-soft min-h-[525px]">

//       {/* Left Copy Column */}
//       <div className="px-[6%] py-12 md:py-14 lg:pl-[4%] lg:pr-[8%] flex flex-col justify-center">
//         <div className="mb-6">
//           <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-black tracking-[-1.5px] text-[#1b1b1d] m-0">
//             Why we Exist
//           </h2>
//           <span className="block w-21.25 h-1 bg-pink mt-4.25 mb-5.75 rounded-full" />
//         </div>

//         <p className="text-base leading-relaxed text-[#1b1b1d] mb-4">
//           Growing up with sickle cell meant navigating pain, stigma, misinformation, and barriers that extended far beyond healthcare. After publicly sharing founder Joy Sanni&apos;s journey in 2021, thousands of people reached out with similar experiences.
//         </p>

//         <p className="text-base leading-relaxed text-[#1b1b1d] font-bold mb-6">
//           Those conversations revealed a gap that stretched far beyond awareness.
//         </p>

//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2 my-7">
//           <div className="px-2 text-center border-r-2 sm:border-r border-dashed border-pink/60 flex flex-col items-center gap-1 text-xs sm:text-[13px]">
//             <BookOpen className="text-pink w-7 h-7 sm:w-8.25 sm:h-8.25 mb-1" />
//             <b className="font-bold">People needed</b>
//             <span className="font-bold">practical guidance</span>
//           </div>

//           <div className="px-2 text-center border-r-0 sm:border-r border-dashed border-pink/60 flex flex-col items-center gap-1 text-xs sm:text-[13px]">
//             <Users className="text-pink w-7 h-7 sm:w-8.25 sm:h-8.25 mb-1" />
//             <b className="font-bold">Parents needed</b>
//             <span className="font-bold">trusted resources.</span>
//           </div>

//           <div className="px-2 text-center border-r-2 sm:border-r border-dashed border-pink/60 flex flex-col items-center gap-1 text-xs sm:text-[13px]">
//             <Heart className="text-pink w-7 h-7 sm:w-8.25 sm:h-8.25 mb-1" />
//             <b className="font-bold">Young people wanted</b>
//             <span className="font-bold">to feel understood.</span>
//           </div>

//           <div className="px-2 text-center flex flex-col items-center gap-1 text-xs sm:text-[13px]">
//             <MessageCircleHeart className="text-pink w-7 h-7 sm:w-8.25 sm:h-8.25 mb-1" />
//             <b className="font-bold">Families needed</b>
//             <span className="font-bold">hope.</span>
//           </div>
//         </div>

//         <p className="text-base leading-relaxed text-[#1b1b1d]">
//           Being Sickled was created to meet those needs through education, advocacy, community, and access to reliable resources.
//         </p>
//       </div>

//       <div className="min-h-75 lg:min-h-131.25 overflow-hidden relative">
//         <img
//           src="/beWarriors.avif"
//           alt="The Being Sickled community wearing warrior shirts"
//           className="w-full h-full object-cover object-[52%_45%] mix-blend-multiply"
//         />
//       </div>

//     </section>
//   )
// }
