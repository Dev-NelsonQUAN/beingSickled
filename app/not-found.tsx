'use client'

import Link from 'next/link'
import { ArrowLeft, Sparkles, Compass } from 'lucide-react'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="relative h-[calc(100dvh-80px)] w-full flex flex-col items-center justify-center px-4 overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-50">
      
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-10 -left-10 w-60 h-60 sm:w-72 sm:h-72 bg-rose-200/50 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute -bottom-10 -right-10 w-64 h-64 sm:w-80 sm:h-80 bg-rose-100/60 rounded-full blur-3xl pointer-events-none"
      />

      {/* Floating Animated Icon */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-6, 6, -6] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="relative z-10 mb-4 sm:mb-6 shrink-0"
      >
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-tr from-[#E61F4D]/10 to-rose-50 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-md border border-[#E61F4D]/20 backdrop-blur-sm">
          <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-[#E61F4D]" />
          
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1.5 -right-1.5 bg-white p-1 sm:p-1.5 rounded-full shadow-md text-[#E61F4D] border border-rose-100"
          >
            <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="relative z-10 max-w-lg mx-auto flex flex-col items-center text-center"
      >
        <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#E61F4D] mb-2 sm:mb-3 bg-rose-100/80 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-rose-200/50">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#E61F4D] animate-ping" />
          Page Under Construction
        </span>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] leading-tight mb-2 sm:mb-3 px-2">
          Something exciting is in the works!
        </h1>

        <p className="text-[#555555] text-xs sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-sm sm:max-w-md px-2">
          We are actively building this section of the Being Sickled platform to empower and support our community. Check back soon!
        </p>

        {/* Home Button */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#E61F4D] hover:bg-[#c91840] text-white font-bold px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-rose-500/25 text-xs sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            Back to Home Page
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

// 'use client'

// import Link from 'next/link'
// import { ArrowLeft, Sparkles, Compass } from 'lucide-react'
// import { motion } from 'framer-motion'

// export default function NotFound() {
//   return (
//     <div className="relative h-[90vh] w-full flex flex-col items-center justify-center px-4 py-12 text-center overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-50">
      
//       <motion.div 
//         animate={{
//           scale: [1, 1.2, 1],
//           opacity: [0.2, 0.35, 0.2],
//         }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//         className="absolute -top-10 -left-10 w-72 h-72 bg-rose-200/50 rounded-full blur-3xl pointer-events-none"
//       />
//       <motion.div 
//         animate={{
//           scale: [1, 1.25, 1],
//           opacity: [0.15, 0.3, 0.15],
//         }}
//         transition={{
//           duration: 7,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 1
//         }}
//         className="absolute -bottom-10 -right-10 w-80 h-80 bg-rose-100/60 rounded-full blur-3xl pointer-events-none"
//       />

//       {/* Floating Floating Icon Container */}
//       <motion.div
//         initial={{ y: 0 }}
//         animate={{ y: [-8, 8, -8] }}
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//           ease: 'easeInOut'
//         }}
//         className="relative z-10 mb-6"
//       >
//         <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-tr from-[#E61F4D]/10 to-rose-50 rounded-3xl flex items-center justify-center shadow-lg border border-[#E61F4D]/20 backdrop-blur-sm">
//           <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-[#E61F4D]" />
          
//           {/* Subtle Rotating Compass Badge */}
//           <motion.div 
//             animate={{ rotate: 360 }}
//             transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
//             className="absolute -top-2 -right-2 bg-white p-1.5 rounded-full shadow-md text-[#E61F4D] border border-rose-100"
//           >
//             <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Animated Text Content */}
//       <motion.div 
//         initial={{ opacity: 0, y: 15 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.1 }}
//         className="relative z-10 max-w-lg mx-auto flex flex-col items-center"
//       >
//         <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#E61F4D] mb-3 bg-rose-100/80 px-3.5 py-1.5 rounded-full border border-rose-200/50">
//           <span className="w-2 h-2 rounded-full bg-[#E61F4D] animate-ping" />
//           Page Under Construction
//         </span>

//         <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] leading-tight mb-3">
//           Something exciting is in the works!
//         </h1>

//         <p className="text-[#555555] text-sm sm:text-base leading-relaxed mb-8 max-w-md">
//           We are actively building this section of the Being Sickled platform to empower and support our community. Check back soon!
//         </p>

//         {/* Action Button */}
//         <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
//           <Link
//             href="/"
//             className="inline-flex items-center gap-2 bg-[#E61F4D] hover:bg-[#c91840] text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-rose-500/25 text-sm sm:text-base"
//           >
//             <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
//             Back to Home Page
//           </Link>
//         </motion.div>
//       </motion.div>
//     </div>
//   )
// }

// // 'use client'

// // import Link from 'next/link'
// // import { ArrowLeft, Sparkles } from 'lucide-react'

// // export default function NotFound() {
// //   return (
// //     <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
// //       <div className="relative mb-6">
// //         <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center animate-pulse">
// //           <Sparkles className="w-10 h-10 text-[#FF004B]" />
// //         </div>
// //       </div>

// //       <span className="text-xs font-semibold uppercase tracking-widest text-[#FF004B] mb-2 bg-rose-50 px-3 py-1 rounded-full">
// //         Under Construction
// //       </span>

// //       <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
// //         Something Exciting is Coming Soon
// //       </h1>

// //       <p className="text-gray-600 max-w-md mb-8 text-sm sm:text-base">
// //         We are actively crafting this section of the Being Sickled platform to serve you better. Check back shortly!
// //       </p>

// //       <Link
// //         href="/"
// //         className="inline-flex items-center gap-2 bg-[#FF004B] hover:bg-[#e00042] text-white font-medium px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
// //       >
// //         <ArrowLeft className="w-4 h-4" />
// //         Back to Home
// //       </Link>
// //     </div>
// //   )
// // }