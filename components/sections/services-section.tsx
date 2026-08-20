import { BookOpen, Check, Megaphone, ShoppingBag, Users } from "lucide-react";

const services = [
  {
    title: "Education",
    icon: BookOpen,
    color: "bg-[#fff0f2]",
    items: [
      "Animations",
      "Carousels",
      "Articles",
      "Guides",
      "Social media education",
    ],
  },
  {
    title: "Advocacy",
    icon: Megaphone,
    color: "bg-[#fff5e9]",
    items: ["Public awareness", "Speaking", "Campaigns", "Media engagement"],
  },
  {
    title: "Community",
    icon: Users,
    color: "bg-[#f3faed]",
    items: ["Paint Beyond Pain", "Support initiatives", "Future programs"],
  },
  {
    title: "Resources",
    icon: ShoppingBag,
    color: "bg-[#eef6ff]",
    items: [
      "ShopUsefully",
      "Caregiver resources",
      "Product recommendations",
      "Hospital preparation",
      "Emergency checklist",
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="resources" className="px-[6%] md:px-[4%] py-9 pb-15">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-black tracking-[-1.5px] text-[#1b1b1d] m-0">
          What We Do
        </h2>
        <span className="block w-21.25 h-1 bg-pink mx-auto mt-4 mb-7 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {services.map(({ title, icon: Icon, color, items }) => (
          <article
            className={`p-[24px_22px] min-h-auto lg:min-h-82.5 rounded-[10px] ${color}`}
            key={title}
          >
            <div className="flex items-center gap-4.5">
              <div className="w-12 h-12 rounded-full bg-pink text-white grid place-items-center shrink-0">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-[20px] sm:text-[28px] font-bold text-[#1b1b1d] m-0">
                {title}
              </h3>
            </div>

            <ul className="list-none p-0 pt-5 m-0 grid gap-4.5">
              {items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3.25 text-[15px] font-medium text-[#1b1b1d]"
                >
                  <Check className="w-4.75 h-4.75 bg-pink text-white rounded-full p-0.75 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
