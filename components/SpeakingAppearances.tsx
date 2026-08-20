import Link from "next/link";
import {
  GraduationCap,
  Presentation,
  School,
  Hospital,
  HeartHandshake,
  Mic,
  Mail,
  CheckCircle2,
} from "lucide-react";

interface AppearanceCategory {
  title: string;
  icon: React.ElementType;
}

const appearanceCategories: AppearanceCategory[] = [
  { title: "Universities", icon: GraduationCap },
  { title: "Conferences", icon: Presentation },
  { title: "Schools", icon: School },
  { title: "Hospitals", icon: Hospital },
  { title: "NGOs", icon: HeartHandshake },
  { title: "Panels", icon: Mic },
];

export function SpeakingAppearances() {
  return (
    <section className="w-full bg-[#FAF8F8] py-16 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-6.5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center px-4">
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start pr-0 lg:pr-6 text-center lg:text-left">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#E61F4D] font-extrabold text-xs sm:text-sm tracking-widest uppercase">
              SPEAKING &amp; APPEARANCES
            </span>
            <span className="w-8 h-0.5 bg-[#E61F4D] inline-block" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#111111] leading-[1.12] mb-5">
            Available for meaningful conversations
          </h2>

          <p className="text-[#555555] text-sm sm:text-base leading-relaxed mb-8 max-w-110 ">
            We are available to speak, collaborate, and share insights on sickle
            cell awareness, advocacy, and community impact.
          </p>

          <Link
            href="mailto:contact@beingsickled.org"
            className="bg-[#E61F4D] hover:bg-[#c9183f] text-white font-bold px-6 py-3.5 rounded-lg transition-colors text-sm sm:text-base inline-flex items-center gap-2.5 shadow-sm"
          >
            <Mail className="w-5 h-5" />
            <span>Invite us to speak</span>
          </Link>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-dashed border-red-200 pt-10 lg:pt-0 lg:pl-10">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-0 divide-x-0 sm:divide-x divide-dotted divide-red-200">
            {appearanceCategories.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-3 text-center"
                >
                  <div className="w-12 h-12 flex items-center justify-center text-[#E61F4D] mb-2">
                    <IconComponent className="w-8 h-8 stroke-[1.75]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#333333]">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="w-full h-px bg-red-100 my-8" />

          <div className="flex items-start gap-3 text-center lg:text-left">
            <CheckCircle2 className="w-5 h-5 text-[#E61F4D] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-[#444444] leading-relaxed font-medium ">
              <strong className="text-[#111111] font-semibold">
                Topics include:
              </strong>{" "}
              Sickle cell awareness and education, living well with sickle cell,
              stigma and discrimination, youth leadership, health advocacy and
              more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
