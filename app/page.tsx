import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { ServicesSection } from '@/components/sections/services-section'
import { LearnSection } from '@/components/sections/learn-section'
import { ShopSection } from '@/components/sections/shop-section'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <LearnSection />
      <ShopSection />
    </main>
  )
}