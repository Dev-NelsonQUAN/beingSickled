// app/media/page.tsx
import { FeaturedIn } from '@/components/FeaturedIn'
import { MediaHero } from '@/components/MediaHero'
import { PressKit } from '@/components/PressKit'
import { SpeakingAppearances } from '@/components/SpeakingAppearances'

export default function MediaPage() {
  return (
    <main>
      <MediaHero />
      <FeaturedIn />
      <SpeakingAppearances />
      <PressKit />
    </main>
  )
}