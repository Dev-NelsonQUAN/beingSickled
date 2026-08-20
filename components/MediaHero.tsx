import Link from 'next/link'

export function MediaHero() {
  return (
    <section className="relative w-full bg-[#FAF8F8] overflow-hidden py-0 lg:h-[calc(100vh-80px)] min-h-137.5 flex items-center">
      <div className="w-full h-full pl-[5%] lg:pl-[8%] pr-0 grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center items-center lg:items-start z-10 py-12 lg:py-0 pr-6 lg:pr-0">
          
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#E61F4D] font-extrabold text-xs sm:text-sm tracking-widest uppercase">
              MEDIA &amp; FEATURES
            </span>
            <span className="w-8 h-0.5 bg-[#E61F4D] inline-block" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#111111] leading-[1.08] mb-3 text-center lg:text-left">
            Telling stories that <br className="hidden sm:block" />
            change lives.
          </h1>

          <div className="w-14 h-0.75 bg-[#E61F4D] mb-6 rounded-full" />

          <p className="text-[#555555] text-sm sm:text-base leading-relaxed mb-8 max-w-120 text-center lg:text-left">
            We work with media partners, storytellers, and change makers to raise accurate awareness about sickle cell and amplify voices that are too often unheard
          </p>

          <Link
            href="/press-kit.pdf"
            target="_blank"
            className="border-2 border-[#E61F4D] text-[#E61F4D] hover:bg-[#E61F4D] hover:text-white font-bold px-6 py-3 rounded-md transition-colors text-sm sm:text-base inline-flex items-center justify-center"
          >
            Download Press Kit
          </Link>
        </div>

        <div className="lg:col-span-6 xl:col-span-7 relative min-h-87.5 lg:min-h-full h-full w-full">
          
          <div className="absolute inset-y-0 left-0 w-28 sm:w-40 bg-linear-to-r from-[#FAF8F8] via-[#FAF8F8]/80 to-transparent z-10 pointer-events-none" />

          <img
            src="/media-interview.avif" 
            alt="Being Sickled video production and media interview"
            className="w-full h-full object-cover object-right lg:object-center"
          />
        </div>

      </div>
    </section>
  )
}

// import Link from 'next/link'

// export function MediaHero() {
//   return (
//     <section className="relative w-full bg-[#FAF8F8] overflow-hidden py-0">
//       <div className="w-full pl-[5%] lg:pl-[8%] pr-0 grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
//         {/* LEFT COLUMN: TEXT CONTENT */}
//         <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center items-start z-10 py-12 lg:py-20 pr-6 lg:pr-0">
          
//           {/* Sub-label with line */}
//           <div className="flex items-center gap-3 mb-4">
//             <span className="text-[#E61F4D] font-extrabold text-xs sm:text-sm tracking-widest uppercase">
//               MEDIA &amp; FEATURES
//             </span>
//             <span className="w-8 h-[2px] bg-[#E61F4D] inline-block" />
//           </div>

//           {/* Main Headline */}
//           <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#111111] leading-[1.08] mb-3">
//             Telling stories that <br className="hidden sm:block" />
//             change lives.
//           </h1>

//           {/* Pink Underline Accent */}
//           <div className="w-14 h-[3px] bg-[#E61F4D] mb-6 rounded-full" />

//           {/* Subtext Paragraph */}
//           <p className="text-[#555555] text-sm sm:text-base leading-relaxed mb-8 max-w-[480px]">
//             We work with media partners, storytellers, and change makers to raise accurate awareness about sickle cell and amplify voices that are too often unheard
//           </p>

//           {/* Download Press Kit Outline Button */}
//           <Link
//             href="/press-kit.pdf"
//             target="_blank"
//             className="border-2 border-[#E61F4D] text-[#E61F4D] hover:bg-[#E61F4D] hover:text-white font-bold px-6 py-3 rounded-md transition-colors text-sm sm:text-base inline-flex items-center justify-center"
//           >
//             Download Press Kit
//           </Link>
//         </div>

//         <div className="lg:col-span-6 xl:col-span-7 relative min-h-[350px] lg:min-h-full w-full">
          
//           <div className="absolute inset-y-0 left-0 w-28 sm:w-40 bg-gradient-to-r from-[#FAF8F8] via-[#FAF8F8]/80 to-transparent z-10 pointer-events-none" />

//           <img
//             src="/media-interview.avif" 
//             alt="Being Sickled video production and media interview"
//             className="w-full h-full object-cover object-right lg:object-center"
//           />
//         </div>

//       </div>
//     </section>
//   )
// }


// // import Link from 'next/link'

// // export function MediaHero() {
// //   return (
// //     <section className="relative w-full bg-[#FAF8F8] overflow-hidden py-10 lg:py-16">
// //       <div className="w-full pl-[5%] lg:pl-[8%] pr-0 grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
        
// //         <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start z-10 py-6 pr-6 lg:pr-0">
          
// //           <div className="flex items-center gap-3 mb-4">
// //             <span className="text-[#E61F4D] font-extrabold text-xs sm:text-sm tracking-widest uppercase">
// //               MEDIA &amp; FEATURES
// //             </span>
// //             <span className="w-8 h-[2px] bg-[#E61F4D] inline-block" />
// //           </div>

// //           {/* Main Headline */}
// //           <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-[#111111] leading-[1.08] mb-3">
// //             Telling stories that <br className="hidden sm:block" />
// //             change lives.
// //           </h1>

// //           {/* Pink Underline Accent */}
// //           <div className="w-14 h-[3px] bg-[#E61F4D] mb-6 rounded-full" />

// //           {/* Subtext Paragraph */}
// //           <p className="text-[#555555] text-sm sm:text-base leading-relaxed mb-8 max-w-[480px]">
// //             We work with media partners, storytellers, and change makers to raise accurate awareness about sickle cell and amplify voices that are too often unheard
// //           </p>

// //           {/* Download Press Kit Outline Button */}
// //           <Link
// //             href="/press-kit.pdf"
// //             target="_blank"
// //             className="border-2 border-[#E61F4D] text-[#E61F4D] hover:bg-[#E61F4D] hover:text-white font-bold px-6 py-3 rounded-md transition-colors text-sm sm:text-base inline-flex items-center justify-center"
// //           >
// //             Download Press Kit
// //           </Link>
// //         </div>

// //         {/* RIGHT COLUMN: FULL RIGHT-BLEED IMAGE */}
// //         <div className="lg:col-span-6 xl:col-span-7 relative w-full h-[380px] sm:h-[480px] lg:h-[540px]">
          
// //           {/* Soft Left-to-Right Fade matching #FAF8F8 background */}
// //           <div className="absolute inset-y-0 left-0 w-28 sm:w-40 bg-gradient-to-r from-[#FAF8F8] via-[#FAF8F8]/80 to-transparent z-10 pointer-events-none" />

// //           <img
// //             src="/media-interview.avif" 
// //             alt="Being Sickled video production and media interview"
// //             className="w-full h-full object-cover object-right lg:object-center"
// //           />
// //         </div>

// //       </div>
// //     </section>
// //   )
// // }

// // // import Link from 'next/link'

// // // export function MediaHero() {
// // //   return (
// // //     <section className="relative w-full bg-white py-12 lg:py-20 overflow-hidden">
// // //       <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-8 px-[5%]">
        
// // //         {/* Left Content Column */}
// // //         <div className="lg:col-span-6 flex flex-col items-start z-10 pr-0 lg:pr-6">
          
// // //           {/* Sub-label with line */}
// // //           <div className="flex items-center gap-3 mb-4">
// // //             <span className="text-pink font-extrabold text-xs sm:text-sm tracking-wider uppercase">
// // //               MEDIA &amp; FEATURES
// // //             </span>
// // //             <span className="w-8 h-[2px] bg-pink inline-block" />
// // //           </div>

// // //           {/* Headline */}
// // //           <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-[#111111] leading-[1.1] mb-3">
// // //             Telling stories that <br className="hidden sm:block" />
// // //             change lives.
// // //           </h1>

// // //           {/* Accent Underline */}
// // //           <div className="w-14 h-[3px] bg-pink mb-6 rounded-full" />

// // //           {/* Body Paragraph */}
// // //           <p className="text-[#4a4a4a] text-sm sm:text-base leading-relaxed mb-8 max-w-[500px]">
// // //             We work with media partners, storytellers, and change makers to raise accurate awareness about sickle cell and amplify voices that are too often unheard
// // //           </p>

// // //           {/* Download Press Kit Button */}
// // //           <Link
// // //             href="/press-kit.pdf"
// // //             target="_blank"
// // //             className="border-2 border-pink text-pink hover:bg-pink hover:text-white font-bold px-6 py-3 rounded-md transition-colors text-sm sm:text-base inline-flex items-center justify-center"
// // //           >
// // //             Download Press Kit
// // //           </Link>
// // //         </div>

// // //         <div className="lg:col-span-6 relative w-full h-[360px] sm:h-[450px] lg:h-[500px] mt-6 lg:mt-0">
          
// // //           <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />

// // //           <img
// // //             src="/media-interview.avif" 
// // //             alt="Being Sickled video shoot and media interview"
// // //             className="w-full h-full object-cover object-center rounded-2xl lg:rounded-none"
// // //           />
// // //         </div>

// // //       </div>
// // //     </section>
// // //   )
// // // }