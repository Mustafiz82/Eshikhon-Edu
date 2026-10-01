"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function NavMenuClient({
  dropdowns = [],
  staticLinks = [],
  setDrawerOpen,
  drawerOpen,
}) {
  //   const [drawerOpen, setDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  //   useEffect(() => {
  //     if (drawerOpen) {
  //       document.body.style.overflow = "hidden";
  //     } else {
  //       document.body.style.overflow = "unset";
  //     }
  //   }, [drawerOpen]);

  return (
    <>
      <div>
        {/* ================= DESKTOP NAVIGATION ================= */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {dropdowns.map((dropdown) => (
            <div
              key={dropdown.title}
              className="relative"
              onMouseEnter={() => setOpenDropdown(dropdown.title)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {/* Top Level Dropdown Item */}
              <div className="flex items-center">
                <Link
                  href={dropdown.href}
                  className="px-3 py-2 text-[14.5px] font-semibold text-[#0b3238] hover:text-[#F26724] transition-colors rounded-md"
                >
                  {dropdown.title}
                </Link>
                <button
                  type="button"
                  aria-label={`Toggle ${dropdown.title} menu`}
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === dropdown.title ? null : dropdown.title,
                    )
                  }
                  className="pr-2 pl-0.5 py-2 text-[#186774] hover:text-[#F26724] transition-colors"
                >
                  <svg
                    className={`w-3.5 h-3.5 transform transition-transform duration-200 ${
                      openDropdown === dropdown.title
                        ? "rotate-180 text-[#F26724]"
                        : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              {/* Desktop Dropdown Flyout Panel */}
              <div
                className={`absolute left-0 top-full pt-2 w-82 transition-all duration-200 z-50 ${
                  openDropdown === dropdown.title
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden ring-1 ring-black/5">
                  {/* Header Link */}
                  <div className="bg-slate-50/80 px-4 py-2.5 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      {dropdown.title} Courses
                    </span>
                    <Link
                      href={dropdown.href}
                      className="text-[11px] text-nowrap font-semibold text-[#F26724] hover:underline"
                    >
                      Program Page →
                    </Link>
                  </div>

                  {/* Sub-item Links */}
                  <div className="py-2">
                    {dropdown.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="group flex items-center justify-between px-4 py-2.5 text-sm text-slate-700 hover:bg-[#186774]/5 hover:text-[#186774] transition-colors"
                      >
                        <span className="font-medium group-hover:translate-x-1 transition-transform duration-150">
                          {item.title}
                        </span>
                        {/* {item.badge && (
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-[#F26724]/10 text-[#F26724] rounded-full border border-[#F26724]/20">
                          {item.badge}
                        </span>
                      )} */}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Static Direct Links */}
          {staticLinks.map((link) =>
            link.isButton ? (
              <Link
                key={link.title}
                href={link.href}
                className="ml-2 px-5 py-2 text-sm font-bold text-white bg-[#F26724] hover:bg-[#df5613] active:scale-95 transition-all rounded-full shadow-md shadow-[#F26724]/20"
              >
                {link.title}
              </Link>
            ) : (
              <Link
                key={link.title}
                href={link.href}
                className="px-3 py-2 text-[14.5px] font-semibold text-[#0b3238] hover:text-[#F26724] transition-colors rounded-md"
              >
                {link.title}
              </Link>
            ),
          )}
        </div>

        {/* ================= MOBILE HAMBURGER BUTTON ================= */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            type="button"
            aria-label="Toggle mobile menu"
            className="p-2.5 rounded-lg text-[#186774] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#186774]"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
