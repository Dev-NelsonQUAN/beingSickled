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
      
      <div className="w-full px-[5%] pt-10 lg:pt-4 pb-28 lg:pb-24 grid grid-cols-1 lg:grid-cols-12 items-center gap-4 lg:gap-8 h-full">
        
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
              className="border-2 border-pink text-pink hover:bg-pink/5 font-bold text-base px-7 lg:px-8 py-3 lg:py-4 rounded-md transition-all inline-flex items-center justify-center bg-white w-full sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 relative flex justify-center lg:justify-end items-end w-full h-full min-h-87.5 lg:min-h-0">
          <img 
            src="/joySanniOnBS.avif" 
            alt="Being Sickled Founder / Representative" 
            className="max-h-[55vh] lg:max-h-[75vh] w-auto object-contain object-bottom relative z-10"
          />
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 w-full bg-white/80 backdrop-blur-md border-t border-gray-200/60 py-4 px-[5%] shadow-sm">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-8 items-center max-w-350 mx-auto">
          {STATS_DATA.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.title} className="flex items-start gap-3">
                <Icon className="text-pink w-5 h-5 shrink-0 mt-0.5" />
                <div className="text-[11px] sm:text-xs xl:text-[13px] text-[#1b1b1d] leading-tight">
                  <span className="font-bold block text-sm sm:text-xs xl:text-[14px]">
                    {stat.title}
                  </span>
                  <span className="text-gray-600 font-medium">
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