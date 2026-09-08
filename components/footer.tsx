import Image from "next/image"
import { ArrowRight, Heart } from "lucide-react"

const QUICK_LINKS = [
  "Home",
  "About",
  "Sickle Cell Animations",
  "Media & Features",
  "Get Involved",
  "Donate",
  "Contact Us",
  "ShopUsefully",
  "Impact Report",
]

const SOCIAL_LINKS = [
  { name: "Instagram", icon: "/mdi_instagram.png", href: "#" },
  { name: "TikTok", icon: "/mdi_tiktok.png", href: "#" },
  { name: "Facebook", icon: "/mdi_facebook.png", href: "#" },
  { name: "X", icon: "/mdi_x.png", href: "#" },
  { name: "YouTube", icon: "/mdi_youtube.png", href: "#" },
  { name: "LinkedIn", icon: "/mdi_linkedin.png", href: "#" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-[#1a1a1a] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.25fr_0.7fr_1fr_1fr] gap-8 lg:gap-12 px-6 sm:px-[7%] lg:px-[4.8%] py-12 lg:py-16">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-40 h-10 shrink-0">
              <Image
                src="/FooterLogo.png"
                alt="Being Sickled Health Foundation Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </div>

          <p className="text-[#efefef] text-sm leading-relaxed mb-6 border-b border-gray-400 pb-1 md:pb-4">
            We empower people living with sickle through awareness, education,
            advocacy, community support, and access to practical resources.
            Together, we challenge stigma and create opportunities to thrive
            beyond the diagnosis.
          </p>

          <div className="w-28 h-28 border-2 border-dashed border-white rounded-full flex flex-col items-center justify-center text-center mx-auto my-6 p-2">
            <div className="relative w-6 h-6 mb-1">
              <Image
                src="/NGOIcon.png"
                alt="NGO Icon"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm font-bold leading-tight">NGO</span>
            <small className="text-[#00b75a] text-[9px] font-bold tracking-wider uppercase leading-none mt-0.5">
              REGISTERED
            </small>
          </div>

          <p className="text-center text-[#efefef] text-xs leading-normal">
            Being Sickled Health Foundation is a registered non-governmental
            organization in Nigeria
          </p>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.08em] font-extrabold border-b-2 border-[#E61F4D] w-fit pb-2 mb-4 uppercase">
            QUICK LINKS
          </h4>
          <div className="flex flex-col gap-2">
            {QUICK_LINKS.map((item) => (
              <a
                key={item}
                href="#home"
                className="text-[#efefef] hover:text-[#E61F4D] text-sm transition-colors w-fit"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.08em] font-extrabold border-b-2 border-[#E61F4D] w-fit pb-2 mb-4 uppercase">
            STAY CONNECTED
          </h4>
          <p className="text-[#efefef] text-sm leading-relaxed mb-4">
            Subscribe to our newsletter and stay updated on our latest
            resources, stories, and impact.
          </p>
          <input
            type="email"
            aria-label="Email address"
            placeholder="Enter your email address"
            className="w-full p-3.5 border border-[#777] bg-transparent text-white rounded-md mb-3 focus:outline-none focus:border-[#E61F4D] text-sm"
          />
          <button className="w-full bg-[#E61F4D] hover:bg-[#E61F4D] text-white font-bold p-3.5 rounded-md transition-colors text-sm cursor-pointer">
            Subscribe
          </button>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.08em] font-extrabold border-b-2 border-[#E61F4D] w-fit pb-2 mb-4 uppercase">
            FOLLOW US
          </h4>
          <p className="text-[#efefef] text-sm leading-relaxed">
            Join the conversation. Follow us on our social media platforms.
          </p>

          <div className="flex flex-wrap gap-2.5 my-5">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="w-10 h-10 rounded-full border border-[#E61F4D] grid place-items-center cursor-pointer hover:bg-white transition-colors group shrink-0"
              >
                <div className="relative w-5 h-5">
                  <Image
                    src={social.icon}
                    alt={social.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            ))}
          </div>

          <div className="bg-[#f0f0f0] text-[#1b1b1d] p-5 rounded-lg">
            <div className="flex items-center gap-2 font-bold mb-2 text-sm">
              <Heart className="text-[#E61F4D] w-5 h-5 shrink-0 fill-[#E61F4D]" />
              <span>BE PART OF THE MOVEMENT</span>
            </div>
            <p className="text-[#1b1b1d] text-xs leading-relaxed mb-3">
              Your support helps us reach more people, create more resources,
              educational materials, animation videos, and build a stronger
              community.
            </p>
            <a
              href="#donate"
              className="text-[#E61F4D] font-bold inline-flex items-center gap-1 hover:underline text-sm"
            >
              Donate Today <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#383838] text-center p-5 text-gray-400 text-xs">
        © {currentYear} Being Sickled Health Foundation. All rights reserved.
      </div>
    </footer>
  )
}