import { ArrowRight, Heart } from "lucide-react";

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
];

export function Footer() {
  return (
    <footer id="contact" className="bg-[#1a1a1a] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.25fr_0.7fr_1fr_1fr] gap-10.5 lg:gap-14.5 px-[7%] lg:px-[4.8%] py-12.5 lg:py-17.5">
        <div>
          <div className="flex items-center gap-3.75 mb-4">
            <div className="relative w-12.5 h-12.5 rounded-full bg-pink shrink-0 overflow-hidden">
              <div className="absolute top-2.75 left-4.75 w-2.5 h-2.5 rounded-full bg-white" />
              <div className="absolute top-6.5 left-2.75 w-7 h-5 rounded-t-[20px] border-[6px] border-b-0 border-white" />
            </div>
            <div>
              <strong className="block text-[16px] font-black leading-none">
                BEING
                <br />
                SICKLED
              </strong>
              <small className="block text-[5px] font-bold tracking-widest mt-1 uppercase">
                HEALTH FOUNDATION
              </small>
            </div>
          </div>

          <p className="text-[#efefef] text-[14px] leading-[1.55] mb-6">
            We empower people living with sickle through awareness, education,
            advocacy, community support, and access to practical resources.
            Together, we challenge stigma and create opportunities to thrive
            beyond the diagnosis.
          </p>

          <div className="w-31.25 h-31.25 border-2 border-dashed border-white rounded-full grid place-content-center text-center mx-auto my-6 text-[19px] font-bold">
            NGO
            <br />
            <small className="text-[#00b75a] text-[10px] tracking-wider uppercase">
              REGISTERED
            </small>
          </div>

          <p className="text-center text-[#efefef] text-[13px] leading-tight">
            Being Sickled Health Foundation is a registered non-governmental
            organization in Nigeria
          </p>
        </div>

        <div>
          <h4 className="text-[13px] tracking-[0.08em] font-extrabold border-b-3 border-pink w-fit pb-2.5 mb-4.5 uppercase">
            QUICK LINKS
          </h4>
          <div className="flex flex-col gap-2">
            {QUICK_LINKS.map((item) => (
              <a
                key={item}
                href="#home"
                className="text-[#efefef] hover:text-pink text-[14px] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[13px] tracking-[0.08em] font-extrabold border-b-3 border-pink w-fit pb-2.5 mb-4.5 uppercase">
            STAY CONNECTED
          </h4>
          <p className="text-[#efefef] text-[14px] leading-[1.55] mb-4">
            Subscribe to our newsletter and stay updated on our latest
            resources, stories, and impact.
          </p>
          <input
            type="email"
            aria-label="Email address"
            placeholder="Enter your email address"
            className="w-full p-4.75 border border-[#777] bg-transparent text-white rounded-[10px] mb-3 focus:outline-none focus:border-pink text-sm"
          />
          <button className="w-full bg-pink hover:bg-[#e00036] text-white font-bold p-4 rounded-[5px] transition-colors text-sm">
            Subscribe
          </button>
        </div>

        <div>
          <h4 className="text-[13px] tracking-[0.08em] font-extrabold border-b-3 border-pink w-fit pb-2.5 mb-4.5 uppercase">
            FOLLOW US
          </h4>
          <p className="text-[#efefef] text-[14px] leading-[1.55]">
            Join the conversation. Follow us on our social media platforms.
          </p>

          <div className="flex gap-2.5 my-5.5">
            {["◎", "♪", "f", "𝕏", "▶", "in"].map((icon, idx) => (
              <span
                key={idx}
                className="w-10.75 h-10.75 rounded-full border border-pink text-pink grid place-items-center font-bold text-sm cursor-pointer hover:bg-pink hover:text-white transition-colors"
              >
                {icon}
              </span>
            ))}
          </div>

          <div className="bg-soft text-[#1b1b1d] p-5.5 rounded-[10px]">
            <div className="flex items-center gap-2 font-bold mb-2 text-sm">
              <Heart className="text-pink w-5 h-5 shrink-0" />
              <span>BE PART OF THE MOVEMENT</span>
            </div>
            <p className="text-[#1b1b1d] text-[13px] leading-relaxed mb-3">
              Your support helps us reach more people, create more resources,
              educational materials, animation videos, and build a stronger
              community.
            </p>
            <a
              href="#donate"
              className="text-pink font-bold inline-flex items-center gap-1 hover:underline text-sm"
            >
              Donate Today <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#383838] text-center p-5.5 text-[#aaa] text-[12px]">
        © 2026 Being Sickled Health Foundation. All rights reserved.
      </div>
    </footer>
  );
}
