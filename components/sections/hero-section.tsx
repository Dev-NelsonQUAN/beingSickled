import { Calendar, Globe, MessageSquare, Star } from 'lucide-react'

const STATS_DATA = [
  {
    icon: Calendar,
    title: 'Founded in',
    subtitle: '2022',
  },
  {
    icon: MessageSquare,
    title: 'Educational content',
    subtitle: 'viewed by millions',
  },
  {
    icon: Star,
    title: "Founder's story",
    subtitle: 'featured in BBC, Punch, Premium Times & more',
  },
  {
    icon: Globe,
    title: 'International',
    subtitle: 'educational collaborations',
  },
]

export function HeroSection() {
  return (
    <section id="home" className="relative w-full bg-[#fff0f2] overflow-hidden lg:h-[calc(100vh-80px)] flex flex-col justify-between">
      
      <div className="w-full px-[5%] pt-16 lg:pt-4 pb-0 lg:pb-0 grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-8 h-full relative">
        
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start z-20">
          <h1 className="text-4xl sm:text-5xl lg:text-[50px] xl:text-[62px] font-bold tracking-[0.5px] leading-[1.05] text-[#1b1b1d] mb-4 lg:mb-5 text-center lg:text-left">
            Awareness.<br />
            Support.<br />
            <span className="text-pink">Opportunities.</span>
          </h1>

          <div className="w-20 lg:w-24 h-1 bg-pink rounded-full mb-5 lg:mb-6" />

          <p className="text-[#3a393a] text-sm sm:text-base lg:text-[15px] xl:text-[16px] leading-[1.55] mb-6 lg:mb-7 font-medium text-center lg:text-left max-w-115">
            Being Sickled Health Foundation is improving awareness, education, advocacy, and practical support for people living with sickle cell disorder across Africa
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a 
              href="#involved" 
              className="bg-pink hover:bg-[#e00036] text-white font-bold text-sm lg:text-base px-7 lg:px-8 py-3.5 lg:py-4 rounded-md shadow-sm transition-all inline-flex items-center justify-center w-full sm:w-auto"
            >
              Get Involved
            </a>
            <a 
              href="#about" 
              className="border-2 border-pink text-pink hover:bg-pink/5 font-bold text-base px-7 lg:px-8 py-3.5 lg:py-4 rounded-md transition-all inline-flex items-center justify-center bg-white w-full sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 relative flex justify-center lg:justify-end items-end w-full h-full min-h-87.5 lg:min-h-0">
          <img 
            src="/joySanniOnBS.avif" 
            alt="Being Sickled Founder / Representative" 
            className="max-h-[55vh] lg:max-h-[78vh] w-auto object-contain object-bottom relative z-10"
          />
        </div>

      </div>

      <div className="absolute bottom-0 right-0 z-20 w-full lg:w-[58%] xl:w-[54%] bg-white/85 backdrop-blur-md border-t border-l border-gray-200/80 py-4 px-6 lg:pl-8 lg:pr-[5vw] shadow-sm rounded-tl-2xl">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4 items-start">
          {STATS_DATA.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.title} className="flex items-start gap-2.5">
                <Icon className="text-pink w-4 h-4 lg:w-5 lg:h-5 shrink-0 mt-0.5" />
                <div className="text-[10px] sm:text-[11px] lg:text-xs xl:text-[13px] text-[#1b1b1d] leading-tight">
                  <span className="font-bold block text-[#1b1b1d]">
                    {stat.title}
                  </span>
                  <span className="text-gray-700 font-medium">
                    {stat.subtitle}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </section>
  )
}

// import { Calendar, Globe, MessageSquare, Star } from 'lucide-react'

// const STATS_DATA = [
//   {
//     icon: Calendar,
//     title: 'Founded in',
//     subtitle: '2022',
//   },
//   {
//     icon: MessageSquare,
//     title: 'Educational content',
//     subtitle: 'viewed by millions',
//   },
//   {
//     icon: Star,
//     title: "Founder's story",
//     subtitle: 'featured in BBC, Punch, Premium Times & more',
//   },
//   {
//     icon: Globe,
//     title: 'International',
//     subtitle: 'educational collaborations',
//   },
// ]

// export function HeroSection() {
//   return (
//     <section id="home" className="relative w-full bg-[#fff0f2] overflow-hidden lg:h-[calc(100vh-80px)] flex flex-col justify-between">
      
//       <div className="w-full px-[5%] pt-6 lg:pt-4 pb-28 lg:pb-24 grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-8 h-full">
        
//         {/* LEFT COLUMN */}
//         <div className="lg:col-span-5 flex flex-col items-center lg:items-start z-20">
//           <h1 className="text-4xl sm:text-5xl lg:text-[50px] xl:text-[62px] font-bold tracking-[0.5px] leading-[1.05] text-[#1b1b1d] mb-4 lg:mb-5 text-center lg:text-left">
//             Awareness.<br />
//             Support.<br />
//             <span className="text-pink">Opportunities.</span>
//           </h1>

//           <div className="w-20 lg:w-24 h-1 bg-pink rounded-full mb-5 lg:mb-6" />

//           <p className="text-[#3a393a] text-sm sm:text-base lg:text-[15px] xl:text-[16px] leading-[1.55] mb-6 lg:mb-7 font-medium text-center lg:text-left max-w-[460px]">
//             Being Sickled Health Foundation is improving awareness, education, advocacy, and practical support for people living with sickle cell disorder across Africa
//           </p>

//           <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-4 w-full sm:w-auto">
//             <a 
//               href="#involved" 
//               className="bg-pink hover:bg-[#e00036] text-white font-bold text-sm lg:text-base px-7 lg:px-8 py-3.5 lg:py-4 rounded-md shadow-sm transition-all inline-flex items-center justify-center w-full sm:w-auto"
//             >
//               Get Involved
//             </a>
//             <a 
//               href="#about" 
//               className="border-2 border-pink text-pink hover:bg-pink/5 font-bold text-base px-7 lg:px-8 py-3.5 lg:py-4 rounded-md transition-all inline-flex items-center justify-center bg-white w-full sm:w-auto"
//             >
//               Learn More
//             </a>
//           </div>
//         </div>

//         {/* RIGHT COLUMN */}
//         <div className="lg:col-span-7 relative flex justify-center lg:justify-end items-end w-full h-full min-h-87.5 lg:min-h-0">
//           <img 
//             src="/joySanniOnBS.avif" 
//             alt="Being Sickled Founder / Representative" 
//             className="max-h-[55vh] lg:max-h-[75vh] w-auto object-contain object-bottom relative z-10"
//           />
//         </div>

//       </div>

//       {/* OVERLAY STATS BANNER */}
//       <div className="absolute bottom-0 left-0 right-0 z-20 w-full bg-white/80 backdrop-blur-md border-t border-gray-200/60 py-4 px-[5%] shadow-sm">
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-8 items-center max-w-[1400px] mx-auto">
//           {STATS_DATA.map((stat) => {
//             const Icon = stat.icon
//             return (
//               <div key={stat.title} className="flex items-start gap-3">
//                 <Icon className="text-pink w-5 h-5 shrink-0 mt-0.5" />
//                 <div className="text-[11px] sm:text-xs xl:text-[13px] text-[#1b1b1d] leading-tight">
//                   <span className="font-bold block text-sm sm:text-xs xl:text-[14px]">
//                     {stat.title}
//                   </span>
//                   <span className="text-gray-600 font-medium">
//                     {stat.subtitle}
//                   </span>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>

//     </section>
//   )
// }

// import { Calendar, Globe, MessageSquare, Star } from 'lucide-react'

// export function HeroSection() {
//   return (
//     <section id="home" className="relative w-full bg-[#fff0f2] overflow-hidden lg:h-[calc(100vh-80px)] flex flex-col justify-between">
      
//       <div className="w-full px-[5%] pt-6 lg:pt-4 pb-0 lg:pb-0 grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-8 h-full">
        
//         <div className="lg:col-span-5 flex flex-col items-center lg:items-start z-20">
//           <h1 className="text-4xl sm:text-5xl lg:text-[50px] xl:text-[62px] font-bold tracking-[0.5px] leading-[1.05] text-[#1b1b1d] mb-4 lg:mb-5 text-center lg:text-left">
//             Awareness.<br />
//             Support.<br />
//             <span className="text-pink">Opportunities.</span>
//           </h1>

//           <div className="w-20 lg:w-24 h-1 bg-pink rounded-full mb-5 lg:mb-6" />

//           <p className="text-[#3a393a] text-sm sm:text-base lg:text-[15px] xl:text-[16px] leading-[1.55] mb-6 lg:mb-7 font-medium text-center lg:text-left max-w-[460px]">
//             Being Sickled Health Foundation is improving awareness, education, advocacy, and practical support for people living with sickle cell disorder across Africa
//           </p>

//           <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-4 w-full sm:w-auto">
//             <a 
//               href="#involved" 
//               className="bg-pink hover:bg-[#e00036] text-white font-bold text-sm lg:text-base px-7 lg:px-8 py-3.5 lg:py-4 rounded-md shadow-sm transition-all inline-flex items-center justify-center w-full sm:w-auto"
//             >
//               Get Involved
//             </a>
//             <a 
//               href="#about" 
//               className="border-2 border-pink text-pink hover:bg-pink/5 font-bold text-sm lg:text-base px-7 lg:px-8 py-3.5 lg:py-4 rounded-md transition-all inline-flex items-center justify-center bg-white w-full sm:w-auto"
//             >
//               Learn More
//             </a>
//           </div>
//         </div>

//         <div className="lg:col-span-7 relative flex justify-center lg:justify-end items-end w-full h-full min-h-87.5 lg:min-h-0">
//           <img 
//             src="/joySanniOnBS.avif" 
//             alt="Being Sickled Founder / Representative" 
//             className="max-h-[60vh] lg:max-h-[82vh] w-auto object-contain object-bottom relative z-10"
//           />
//         </div>

//       </div>

//       <div className="absolute bottom-0 right-0 lg:right-0 z-20 w-full lg:w-[50%] bg-white/75 backdrop-blur-md border-t border-l border-line py-3.5 lg:py-4 px-6 lg:pl-8 lg:pr-[1vw] shadow-sm rounded-tl-xl">
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4 items-start">
          
//           <div className="flex items-start gap-2">
//             <Calendar className="text-pink w-4 h-4 lg:w-5 lg:h-5 shrink-0" />
//             <span className="text-[11px] lg:text-xs xl:text-[13px] text-[#1b1b1d] leading-tight">
//               <b className="font-bold block">Founded in</b> 2022
//             </span>
//           </div>

//           <div className="flex items-start gap-2">
//             <MessageSquare className="text-pink w-4 h-4 lg:w-5 lg:h-5 shrink-0" />
//             <span className="text-[10px] lg:text-[12px] xl:text-[13px] text-[#1b1b1d] leading-tight">
//               <b className="font-bold block">Educational content</b> viewed by millions
//             </span>
//           </div>

//           <div className="flex items-start gap-2">
//             <Star className="text-pink w-4 h-4 lg:w-5 lg:h-5 shrink-0" />
//             <span className="text-[10px] lg:text-[12px] xl:text-[13px] text-[#1b1b1d] leading-tight">
//               <b className="font-bold block">Founder&apos;s story</b> featured in BBC, Punch, Premium Times &amp; more
//             </span>
//           </div>

//           <div className="flex items-start gap-2">
//             <Globe className="text-pink w-4 h-4 lg:w-5 lg:h-5 shrink-0" />
//             <span className="text-[11px] lg:text-xs xl:text-[13px] text-[#1b1b1d] leading-tight">
//               <b className="font-bold block">International</b> educational collaborations
//             </span>
//           </div>

//         </div>
//       </div>

//     </section>
//   )
// }



// import { Calendar, Globe, MessageSquare, Star } from 'lucide-react'

// export function HeroSection() {
//   return (
//     <section id="home" className="relative w-full bg-[#fff0f2] overflow-hidden">
      
//       <div className="w-full px-[5%] md:pt-10 lg:pt-3 pb-12 lg:pb-0 grid grid-cols-1 lg:grid-cols-12 items-center gap-8 min-h-[calc(100vh-96px)]">
        
//         {/* LEFT COLUMN */}
//         <div className="lg:col-span-5 flex flex-col items-center lg:items-start z-20 pt-0">
//           <h1 className="text-4xl sm:text-5xl lg:text-[65px] font-bold tracking-[1px] leading-[1.02] text-[#1b1b1d] mb-6 text-center lg:text-left">
//             Awareness.<br />
//             Support.<br />
//             <span className="text-pink">Opportunities.</span>
//           </h1>

//           <div className="w-28 h-1 bg-pink rounded-full mb-8" />

//           <p className="text-[#3a393a] text-base sm:text-[16px] leading-[1.6] mb-8 font-medium text-center lg:text-left">
//             Being Sickled Health Foundation is improving awareness, education, advocacy, and practical support for people living with sickle cell disorder across Africa
//           </p>

//           <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 w-full sm:w-auto">
//             <a 
//               href="#involved" 
//               className="bg-pink hover:bg-[#e00036] text-white font-bold text-base px-9 py-4 rounded-md shadow-sm transition-all inline-flex items-center justify-center w-full sm:w-auto"
//             >
//               Get Involved
//             </a>
//             <a 
//               href="#about" 
//               className="border-2 border-pink text-pink hover:bg-pink/5 font-bold text-base px-9 py-4 rounded-md transition-all inline-flex items-center justify-center bg-white w-full sm:w-auto"
//             >
//               Learn More
//             </a>
//           </div>
//         </div>

//         {/* RIGHT COLUMN */}
//         <div className="lg:col-span-7 relative flex justify-center lg:justify-end items-end w-full mt-6 lg:mt-0">
          
//           <img 
//             src="/joySanniOnBS.avif" 
//             alt="Being Sickled Founder / Representative" 
//             className="w-full sm:w-4/5 lg:w-full h-auto object-contain object-bottom relative z-10"
//           />

//           {/* OVERLAY STATS BANNER */}
//           <div className="absolute bottom-0 right-[-5vw] z-20 w-[calc(100%+5vw)] bg-white/95 backdrop-blur-md border-t border-l border-line py-5 px-6 sm:px-8 lg:pl-10 lg:pr-[5vw] shadow-sm rounded-tl-xl">
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-start">
              
//               <div className="flex items-start gap-2.5">
//                 <Calendar className="text-pink w-5 h-5 shrink-0 mt-0.5" />
//                 <span className="text-xs sm:text-[13px] text-[#1b1b1d] leading-tight">
//                   <b className="font-bold block">Founded in</b> 2022
//                 </span>
//               </div>

//               <div className="flex items-start gap-2.5">
//                 <MessageSquare className="text-pink w-5 h-5 shrink-0 mt-0.5" />
//                 <span className="text-xs sm:text-[13px] text-[#1b1b1d] leading-tight">
//                   <b className="font-bold block">Educational content</b> viewed by millions
//                 </span>
//               </div>

//               <div className="flex items-start gap-2.5">
//                 <Star className="text-pink w-5 h-5 shrink-0 mt-0.5" />
//                 <span className="text-xs sm:text-[13px] text-[#1b1b1d] leading-tight">
//                   <b className="font-bold block">Founder&apos;s story</b> featured in BBC, Punch, Premium Times &amp; more
//                 </span>
//               </div>

//               <div className="flex items-start gap-2.5">
//                 <Globe className="text-pink w-5 h-5 shrink-0 mt-0.5" />
//                 <span className="text-xs sm:text-[13px] text-[#1b1b1d] leading-tight">
//                   <b className="font-bold block">International</b> educational collaborations
//                 </span>
//               </div>

//             </div>
//           </div>

//         </div>

//       </div>

//     </section>
//   )
// }
