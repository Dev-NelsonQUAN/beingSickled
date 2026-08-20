import Image from 'next/image'
import Link from 'next/link'

interface MediaFeature {
  id: string
  title: string
  subtitle: string
  linkText: string
  href: string
  logoSrc: string
  bgColor?: string
}

const mediaFeatures: MediaFeature[] = [
  {
    id: 'bbc-igbo',
    title: 'BBC News (IGBO)',
    subtitle: 'Feature story and interview',
    linkText: 'View Article',
    href: '#',
    logoSrc: '/BBC_Igbo.avif',
  },
  {
    id: 'bbc-pidgin',
    title: 'BBC News (PIDGIN)',
    subtitle: 'Feature story and interview',
    linkText: 'Watch Here',
    href: '#',
    logoSrc: '/BBC_Pidgin.avif',
  },
  {
    id: 'punch',
    title: 'Punch Newspapers',
    subtitle: 'Feature story and interview',
    linkText: 'View Article',
    href: '#',
    logoSrc: '/Punch_Newspapers.avif',
  },
  {
    id: 'premium-times',
    title: 'Premium Times',
    subtitle: 'Feature story and interview',
    linkText: 'View Article',
    href: '#',
    logoSrc: '/Premium_Times.avif',
  },
  {
    id: 'bonews',
    title: 'BoNews',
    subtitle: 'Feature story',
    linkText: 'View Article',
    href: '#',
    logoSrc: '/BO_News.avif',
  },
  {
    id: 'edutorial',
    title: 'Edutorial',
    subtitle: 'Feature story',
    linkText: 'View Article',
    href: '#',
    logoSrc: '/Edutorial.avif',
  },
  {
    id: 'scholarship-region',
    title: 'Scholarship Region',
    subtitle: 'Feature story',
    linkText: 'View Article',
    href: '#',
    logoSrc: '/Scholarship_Region.avif',
  },
  {
    id: 'strong-ones',
    title: 'The Strong Ones Amongst Us',
    subtitle: 'Featured participant in an award-winning documentary',
    linkText: 'Watch Here',
    href: '#',
    logoSrc: '/TSOAU.avif',
  },
]

export function FeaturedIn() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#111111] tracking-wider uppercase">
            FEATURED IN
          </h2>
          <div className="w-10 h-0.75 bg-[#E61F4D] mt-2 rounded-full" />
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaFeatures.map((item) => (
            <div
              key={item.id}
              className="flex items-center rounded-xl border border-gray-200/80 bg-white p-3 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 bg-[#FFF9F5] rounded-lg overflow-hidden flex items-center justify-center">
                <Image
                  src={item.logoSrc}
                  alt={`${item.title} logo`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="ml-4 flex flex-col justify-center flex-1 min-w-0 pr-1">
                <h3 className="text-sm font-bold text-[#111111] leading-tight truncate">
                  {item.title}
                </h3>
                
                <p className="text-xs text-gray-500 mt-1 leading-snug line-clamp-2">
                  {item.subtitle}
                </p>

                <Link
                  href={item.href}
                  className="text-xs font-semibold text-[#2563EB] hover:underline mt-2 inline-block"
                >
                  {item.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}