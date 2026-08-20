import Link from 'next/link'
import { Image as ImageIcon, Folder, FileBarChart, Download } from 'lucide-react'

interface PressKitCard {
  id: string
  icon: React.ElementType
  title: string
  description: string
  items: string[]
  downloadUrl: string
}

const pressKitData: PressKitCard[] = [
  {
    id: 'logo',
    icon: ImageIcon,
    title: 'Logo',
    description: 'Our logo in various formats for media use.',
    items: ['PNG', 'JPG', 'SVG'],
    downloadUrl: '/press-kit/logo-assets.zip',
  },
  {
    id: 'media-assets',
    icon: Folder,
    title: 'Photos & Videos',
    description: 'High-resolution photos of our work, events, and founder',
    items: ['Events', 'Programs', 'Founder', 'Community'],
    downloadUrl: '/press-kit/media-assets.zip',
  },
  {
    id: 'impact-report',
    icon: FileBarChart,
    title: 'Impact Report',
    description:
      "A concise overview of Being Sickled's growth, reach, programs, partnerships, and social impact.",
    items: [
      'Programs & Initiatives',
      'Media Reach',
      'Partnerships',
      'Key Milestones',
      'Community Impact',
    ],
    downloadUrl: '/press-kit/impact-report.pdf',
  },
]

export function PressKit() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#111111] tracking-wider uppercase">
            PRESS KIT
          </h2>
          <div className="w-10 h-0.75 bg-[#E61F4D] mt-2 rounded-full" />
        </div>

        {/* 3-Column Card Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {pressKitData.map((card) => {
            const IconComponent = card.icon
            return (
              <div
                key={card.id}
                className="bg-[#FAF8F8] rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center justify-between transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center w-full">
                  
                  <div className="w-14 h-14 rounded-full bg-[#FCE8EC] flex items-center justify-center text-[#111111] mb-6">
                    <IconComponent className="w-6 h-6 stroke-2" />
                  </div>

                  <h3 className="text-xl font-bold text-[#111111] mb-4">
                    {card.title}
                  </h3>

                  <p className="text-sm text-[#555555] leading-relaxed mb-6 max-w-75">
                    {card.description}
                  </p>

                  <ul className="text-sm text-[#444444] space-y-1.5 font-semibold text-left self-center mb-8 inline-block">
                    {card.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#111111] inline-block" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={card.downloadUrl}
                  download
                  className="w-full border-2 border-[#E61F4D] text-[#E61F4D] hover:bg-[#E61F4D] hover:text-white font-bold py-3 px-4 rounded-xl transition-colors duration-200 text-sm inline-flex items-center justify-center gap-2 mt-auto bg-white"
                >
                  <Download className="w-4 h-4 stroke-[2.5]" />
                  <span>Download</span>
                </Link>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}