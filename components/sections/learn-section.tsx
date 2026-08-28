"use client";

import { useState } from "react";
import { ArrowRight, Play, X } from "lucide-react";

export function LearnSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const TELEGRAM_CHANNEL_URL =
    "https://drive.google.com/drive/folders/1-9t2MZ2lGU_CqLTV__CjeeWvKE0CzVEy";

  const VIDEO_ID = "Nnwl0WbDamo";
  const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`;
  const YOUTUBE_THUMBNAIL_URL = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

  return (
    <section
      id="media"
      className="relative w-full bg-[#fff0f2] overflow-hidden py-15 lg:py-22.5 px-[6%] lg:px-[5.5%]"
    >
      <img
        src="/sickleCircle.avif"
        alt=""
        aria-hidden="true"
        className="absolute top-[42%] -left-6 w-16 sm:w-20 pointer-events-none z-10 blur-[1px] animate-bounce animation-duration-[6s]"
      />
      <img
        src="/sickleCircle.avif"
        alt=""
        aria-hidden="true"
        className="absolute bottom-[28%] left-[2%] w-8 sm:w-11 pointer-events-none z-10 animate-pulse animation-duration-[4s]"
      />
      <img
        src="/sickleC.avif"
        alt=""
        aria-hidden="true"
        className="absolute top-8 left-[52%] w-10 sm:w-12 rotate-[-25deg] pointer-events-none z-10 animate-bounce animation-duration-[7s]"
      />
      <img
        src="/sickleC.avif"
        alt=""
        aria-hidden="true"
        className="absolute top-6 right-[12%] w-14 sm:w-20 rotate-45 pointer-events-none z-10 blur-[3px]"
      />
      <img
        src="/sickleCircle.avif"
        alt=""
        aria-hidden="true"
        className="absolute top-[48%] right-[3%] w-12 sm:w-16 pointer-events-none z-10 animate-pulse animation-duration-[5s]"
      />
      <img
        src="/sickleC.avif"
        alt=""
        aria-hidden="true"
        className="absolute bottom-6 right-[16%] w-12 sm:w-16 rotate-160 pointer-events-none z-10 animate-bounce animation-duration-[8s]"
      />

      <div className="max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[6%] items-center relative z-20">
        <div className="relative w-full aspect-16/10 sm:h-100 lg:h-105 border-10 sm:border-14 border-[#1b1b1d] rounded-[14px] overflow-hidden bg-black shadow-xl">
          {!isPlaying ? (
            <div
              className="relative w-full h-full group cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              <img
                src={YOUTUBE_THUMBNAIL_URL}
                alt="Educational animation thumbnail"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              <button
                type="button"
                aria-label="Play educational animation"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-17 h-17 sm:w-20 sm:h-20 border-2 border-white rounded-full bg-black/40 text-white grid place-items-center group-hover:scale-110 group-hover:bg-pink transition-all shadow-lg cursor-pointer"
              >
                <Play className="fill-current w-7 h-7 sm:w-9 sm:h-9 ml-1" />
              </button>
            </div>
          ) : (
            <div className="relative w-full h-full bg-black">
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-3 right-3 z-30 bg-black/80 hover:bg-pink text-white p-2 rounded-full transition-colors shadow-md cursor-pointer"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>

              <iframe
                src={YOUTUBE_EMBED_URL}
                title="Educational Animation"
                className="w-full h-full border-0 cursor-pointer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] leading-[1.12] tracking-[-1.5px] font-extrabold text-[#1b1b1d] mb-6 text-center lg:text-left">
            Learning about
            <br />
            sickle cell <span className="text-pink">should be simple</span>
          </h2>

          <p className="text-base sm:text-[17px] leading-[1.6] text-[#3a393a] max-w-125 mb-8 font-medium text-center lg:text-left">
            Our educational animations break complex health topics into clear,
            engaging lessons for everyone including patients, caregivers,
            schools, and healthcare professionals
          </p>

          <a
            href={TELEGRAM_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-pink hover:bg-[#e00036] text-white font-bold px-3 md:px-6 lg:px-10 py-4 lg:py-4.5 rounded-md text-base sm:text-[17px] transition-colors shadow-sm"
          >
            Browse Animations <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}


// "use client";

// import { useState } from "react";
// import { ArrowRight, Play, X } from "lucide-react";

// export function LearnSection() {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const TELEGRAM_CHANNEL_URL = "https://drive.google.com/drive/folders/1-9t2MZ2lGU_CqLTV__CjeeWvKE0CzVEy";

//   const YOUTUBE_EMBED_URL =
//     "https://youtube.com/shorts/Nnwl0WbDamo?si=sQOz0_yUYmWKHeuT?autoplay=1&rel=0";

//   return (
//     <section
//       id="media"
//       className="relative w-full bg-[#fff0f2] overflow-hidden py-15 lg:py-22.5 px-[6%] lg:px-[5.5%]"
//     >
//       <img
//         src="/sickleCircle.avif"
//         alt=""
//         aria-hidden="true"
//         className="absolute top-[42%] -left-6 w-16 sm:w-20 pointer-events-none z-10 blur-[1px] animate-bounce animation-duration-[6s]"
//       />
//       <img
//         src="/sickleCircle.avif"
//         alt=""
//         aria-hidden="true"
//         className="absolute bottom-[28%] left-[2%] w-8 sm:w-11 pointer-events-none z-10 animate-pulse animation-duration-[4s]"
//       />
//       <img
//         src="/sickleC.avif"
//         alt=""
//         aria-hidden="true"
//         className="absolute top-8 left-[52%] w-10 sm:w-12 rotate-[-25deg] pointer-events-none z-10 animate-bounce animation-duration-[7s]"
//       />
//       <img
//         src="/sickleC.avif"
//         alt=""
//         aria-hidden="true"
//         className="absolute top-6 right-[12%] w-14 sm:w-20 rotate-45 pointer-events-none z-10 blur-[3px]"
//       />
//       <img
//         src="/sickleCircle.avif"
//         alt=""
//         aria-hidden="true"
//         className="absolute top-[48%] right-[3%] w-12 sm:w-16 pointer-events-none z-10 animate-pulse animation-duration-[5s]"
//       />
//       <img
//         src="/sickleC.avif"
//         alt=""
//         aria-hidden="true"
//         className="absolute bottom-6 right-[16%] w-12 sm:w-16 rotate-160 pointer-events-none z-10 animate-bounce animation-duration-[8s]"
//       />

//       <div className="max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[6%] items-center relative z-20">
//         <div className="relative w-full aspect-16/10 sm:h-100 lg:h-105 border-10 sm:border-14 border-[#1b1b1d] rounded-[14px] overflow-hidden bg-black shadow-xl">
//           {!isPlaying ? (
//             <div
//               className="relative w-full h-full group cursor-pointer"
//               onClick={() => setIsPlaying(true)}
//             >
//               <img
//                 src="/education-thumbnail.png"
//                 alt="Educational animation thumbnail"
//                 className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
//               />
//               <button
//                 type="button"
//                 aria-label="Play educational animation"
//                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-17 h-17 sm:w-20 sm:h-20 border-2 border-white rounded-full bg-black/40 text-white grid place-items-center group-hover:scale-110 group-hover:bg-pink transition-all shadow-lg cursor-pointer"
//               >
//                 <Play className="fill-current w-7 h-7 sm:w-9 sm:h-9 ml-1" />
//               </button>
//             </div>
//           ) : (
//             <div className="relative w-full h-full bg-black">
//               <button
//                 onClick={() => setIsPlaying(false)}
//                 className="absolute top-3 right-3 z-30 bg-black/80 hover:bg-pink text-white p-2 rounded-full transition-colors shadow-md cursor-pointer"
//                 aria-label="Close video"
//               >
//                 <X className="w-5 h-5" />
//               </button>

//               <iframe
//                 src={YOUTUBE_EMBED_URL}
//                 title="Educational Animation"
//                 className="w-full h-full border-0 cursor-pointer"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//             </div>
//           )}
//         </div>

//         <div className="flex flex-col items-center lg:items-start">
//           <h2 className="text-3xl sm:text-4xl lg:text-[46px] leading-[1.12] tracking-[-1.5px] font-extrabold text-[#1b1b1d] mb-6 text-center lg:text-left">
//             Learning about
//             <br />
//             sickle cell <span className="text-pink">should be simple</span>
//           </h2>

//           <p className="text-base sm:text-[17px] leading-[1.6] text-[#3a393a] max-w-125 mb-8 font-medium text-center lg:text-left">
//             Our educational animations break complex health topics into clear,
//             engaging lessons for everyone including patients, caregivers,
//             schools, and healthcare professionals
//           </p>

//           <a
//             href={TELEGRAM_CHANNEL_URL}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center justify-center gap-2.5 bg-pink hover:bg-[#e00036] text-white font-bold px-3 md:px-6 lg:px-10 py-4 lg:py-4.5 rounded-md text-base sm:text-[17px] transition-colors shadow-sm"
//           >
//             Browse Animations <ArrowRight className="w-5 h-5" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// // import { ArrowRight, Play, Sparkles } from 'lucide-react'

// // export function LearnSection() {
// //   return (
// //     <section id="media" className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[8%] px-[6%] lg:px-[5.5%] py-[48px] lg:py-[75px] bg-soft items-center">
// //         <img src="/sickleC.avif" alt="Sickle Image"/>

// //       {/* Video Card Frame */}
// //       <div className="h-[280px] sm:h-[390px] relative overflow-hidden border-[10px] sm:border-[14px] border-[#1b1b1d] rounded-[10px]">
// //         <img
// //           src="/education-thumbnail.png"
// //           alt="Educational animation thumbnail"
// //           className="w-full h-full object-cover object-[30%_73%] saturate-[1.2]"
// //         />
// //         <button
// //           aria-label="Play educational animation"
// //           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65px] h-[65px] sm:w-[76px] sm:h-[76px] border-2 border-white rounded-full bg-black/20 text-white grid place-items-center hover:scale-105 transition-transform"
// //         >
// //           <Play className="fill-current w-6 h-6 sm:w-8 sm:h-8 ml-1" />
// //         </button>
// //       </div>

// //       {/* Copy Column */}
// //       <div className="flex flex-col items-start">
// //         <Sparkles className="text-pink w-7 h-7 rotate-[15deg] mb-6" />
// //         <p className="text-pink text-xs sm:text-sm font-extrabold tracking-[0.12em] mb-3 uppercase">
// //           LEARNING MADE ACCESSIBLE
// //         </p>

// //                 <img src="/sickleC.avif" alt="Sickle Image"/>

// //         <h2 className="text-3xl sm:text-4xl lg:text-[42px] leading-[1.12] tracking-[-1.5px] font-black text-[#1b1b1d] mb-[23px]">
// //           Learning about sickle cell <em className="text-pink not-italic">should be simple</em>
// //         </h2>

// //         <p className="text-base sm:text-[17px] leading-[1.55] text-gray-700 mb-8">
// //           Our educational animations break complex health topics into clear, engaging lessons for everyone including patients, caregivers, schools, and healthcare professionals
// //         </p>
// //                 <img src="/sickleCircle.avif" alt="Sickle Image"/>

// //         <a
// //           href="#media"
// //           className="inline-flex items-center justify-center gap-[10px] bg-pink hover:bg-[#e00036] text-white font-bold px-[30px] sm:px-[48px] py-[15px] sm:py-[18px] rounded-[5px] text-[15px] sm:text-[17px] transition-colors"
// //         >
// //           Browse Animations <ArrowRight className="w-5 h-5" />
// //         </a>
// //       </div>

// //     </section>
// //   )
// // }
