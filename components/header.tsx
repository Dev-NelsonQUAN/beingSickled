"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Sickle Cell Animations", href: "/resources/animations" },
      { label: "Educational Materials", href: "/resources/materials" },
      {
        label: "ShopUsefully",
        href: "https://shopusefully.com",
        external: true,
      },
    ],
  },
  { label: "Media & Features", href: "/media" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const getLinkClasses = (href: string) => {
    return isActive(href)
      ? "text-pink font-bold transition-colors"
      : "text-[#1b1b1d] font-semibold hover:text-pink transition-colors";
  };

  return (
    <header className="sticky top-0 z-50 flex h-16 lg:h-20 w-full items-center justify-between bg-white px-[5%] border-b border-gray-100 shadow-xs">
      <Link
        href="/"
        className="flex items-center shrink-0 z-20"
        aria-label="Being Sickled Health Foundation"
        onClick={closeMenu}
      >
        <img
          src="/beingSikcledLogo.png"
          alt="Being Sickled Health Foundation Logo"
          className="h-8 md:h-10 lg:h-12 w-auto object-contain"
        />
      </Link>

      <button
        type="button"
        className="block lg:hidden text-pink p-2 focus:outline-none z-20"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <nav
        className={`
          absolute lg:static top-16 left-0 right-0 
          flex flex-col lg:flex-row items-center justify-center 
          gap-6 xl:gap-8 
          bg-white lg:bg-transparent p-6 lg:p-0 
          shadow-lg lg:shadow-none 
          text-base lg:text-[15px] xl:text-[16px] 
          transition-all duration-200 ease-in-out z-10
          ${menuOpen ? "flex" : "hidden lg:flex"}
        `}
      >
        {NAV_LINKS.map((link) => {
          if (link.children) {
            return (
              <div
                key={link.label}
                className="relative group flex flex-col lg:flex-row items-center"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 ${getLinkClasses(link.href)}`}
                  onClick={closeMenu}
                >
                  <span>{link.label}</span>
                  <ChevronDown
                    size={15}
                    className="mt-0.5 transition-transform group-hover:rotate-180"
                  />
                </Link>

                {/* Dropdown Menu */}
                <div
                  className={`
                    static lg:absolute top-full left-0 w-48 bg-white lg:shadow-md lg:rounded-md py-2 mt-2 lg:mt-0
                    border border-gray-100 lg:opacity-0 lg:invisible group-hover:opacity-100 group-hover:visible
                    transition-all duration-150 flex flex-col gap-1 text-sm
                    ${dropdownOpen ? "block" : "hidden lg:block"}
                  `}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      target={child.external ? "_blank" : "_self"}
                      className="px-4 py-2 text-gray-700 hover:text-pink hover:bg-pink/5 transition-colors font-medium block"
                      onClick={closeMenu}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <Link
              key={link.label}
              href={link.href}
              className={getLinkClasses(link.href)}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          );
        })}

        <Link
          className="mt-4 lg:hidden w-full inline-flex items-center justify-center rounded-md bg-pink px-7 py-3 text-center text-white font-semibold hover:bg-[#e00036] transition-colors shadow-sm"
          href="/donate"
          onClick={closeMenu}
        >
          Donate
        </Link>
      </nav>

      <div className="hidden lg:flex items-center shrink-0 z-20">
        <Link
          className="inline-flex items-center justify-center rounded-md bg-pink px-7 py-2.5 text-center text-white font-semibold hover:bg-[#e00036] transition-colors shadow-sm text-sm lg:text-base"
          href="/donate"
        >
          Donate
        </Link>
      </div>
    </header>
  );
}

// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { ChevronDown, Menu, X } from 'lucide-react'

// export function Header() {
//   const [menuOpen, setMenuOpen] = useState(false)
//   const pathname = usePathname()
//   const [activeHash, setActiveHash] = useState('')

//   useEffect(() => {
//     setActiveHash(window.location.hash)

//     const handleHashChange = () => {
//       setActiveHash(window.location.hash)
//     }

//     window.addEventListener('hashchange', handleHashChange)
//     return () => window.removeEventListener('hashchange', handleHashChange)
//   }, [])

//   const closeMenu = () => setMenuOpen(false)

//   const isActive = (href: string) => {
//     if (href === '/') {
//       return pathname === '/' && activeHash === ''
//     }
//     if (href.startsWith('/#')) {
//       return pathname === '/' && activeHash === href.replace('/', '')
//     }
//     return pathname === href
//   }

//   const getLinkClasses = (href: string) => {
//     const active = isActive(href)
//     return active
//       ? 'text-pink font-bold transition-colors'
//       : 'text-[#1b1b1d] font-semibold hover:text-pink transition-colors'
//   }

//   return (
//     <header className="sticky top-0 z-50 flex h-14 md:h-22 w-full items-center justify-between bg-white px-[5%] border-b border-gray-100">

//       <Link
//         href="/"
//         className="flex items-center shrink-0 z-20"
//         aria-label="Being Sickled Health Foundation"
//         onClick={() => setActiveHash('')}
//       >
//         <img
//           src="/beingSikcledLogo.png"
//           alt="Being Sickled Health Foundation Logo"
//           className="h-8 md:h-12 w-auto object-contain"
//         />
//       </Link>

//       <button
//         type="button"
//         className="block md:hidden text-pink p-2 focus:outline-none z-20"
//         aria-label={menuOpen ? 'Close menu' : 'Open menu'}
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         {menuOpen ? <X size={28} /> : <Menu size={28} />}
//       </button>

//       <nav
//         className={`
//           absolute md:static top-20 left-0 right-0
//           flex flex-col md:flex-row items-center justify-center
//           gap-6 lg:gap-8
//           bg-white md:bg-transparent p-6 md:p-0
//           shadow-lg md:shadow-none
//           text-base md:text-[15px] lg:text-[16px]
//           transition-all duration-200 ease-in-out z-10
//           ${menuOpen ? 'flex' : 'hidden md:flex'}
//         `}
//       >
//         <Link
//           className={getLinkClasses('/')}
//           href="/"
//           onClick={() => { setActiveHash(''); closeMenu(); }}
//         >
//           Home
//         </Link>

//         <Link
//           className={getLinkClasses('/#about')}
//           href="/#about"
//           onClick={() => { setActiveHash('#about'); closeMenu(); }}
//         >
//           About
//         </Link>

//         <Link
//           className={`flex items-center gap-1 ${getLinkClasses('/#resources')}`}
//           href="/#resources"
//           onClick={() => { setActiveHash('#resources'); closeMenu(); }}
//         >
//           Resources <ChevronDown size={15} className="mt-0.5" />
//         </Link>

//         <Link
//           className={getLinkClasses('/#media')}
//           href="/#media"
//           onClick={() => { setActiveHash('#media'); closeMenu(); }}
//         >
//           Media &amp; Features
//         </Link>

//         <Link
//           className={getLinkClasses('/#involved')}
//           href="/#involved"
//           onClick={() => { setActiveHash('#involved'); closeMenu(); }}
//         >
//           Get Involved
//         </Link>

//         <Link
//           className={getLinkClasses('/#contact')}
//           href="/#contact"
//           onClick={() => { setActiveHash('#contact'); closeMenu(); }}
//         >
//           Contact
//         </Link>

//         <Link
//           className="mt-4 md:hidden w-full inline-flex items-center justify-center rounded-md bg-pink px-7 py-3 text-center text-white font-semibold hover:bg-[#e00036] transition-colors shadow-sm"
//           href="/donate"
//           onClick={closeMenu}
//         >
//           Donate
//         </Link>
//       </nav>

//       <div className="hidden md:flex items-center shrink-0 z-20">
//         <Link
//           className="inline-flex items-center justify-center rounded-md bg-pink px-7 py-2.5 text-center text-white font-semibold hover:bg-[#e00036] transition-colors shadow-sm text-sm lg:text-base"
//           href="/donate"
//         >
//           Donate
//         </Link>
//       </div>

//     </header>
//   )
// }
