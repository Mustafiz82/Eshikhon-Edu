"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function NavMenuClient({
  dropdowns = [],
  staticLinks = [],
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <>
      {/* ================= DESKTOP NAVIGATION ================= */}
      <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
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
                    openDropdown === dropdown.title ? null : dropdown.title
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
              className={`absolute left-0 top-full pt-2 w-72 transition-all duration-200 z-50 ${
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
                    className="text-[11px] whitespace-nowrap font-semibold text-[#F26724] hover:underline"
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
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Static Direct Links */}
        {staticLinks.map((link) => {
          const isExternal = link.href.includes("eshikhon.com.bd");
          return link.isButton ? (
            <Link
              key={link.title}
              href={link.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="ml-2 px-5 py-2 text-sm font-bold text-white bg-[#F26724] hover:bg-[#df5613] active:scale-95 transition-all rounded-full shadow-md shadow-[#F26724]/20"
            >
              {link.title}
            </Link>
          ) : (
            <Link
              key={link.title}
              href={link.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="px-3 py-2 text-[14.5px] font-semibold text-[#0b3238] hover:text-[#F26724] transition-colors rounded-md"
            >
              {link.title}
            </Link>
          );
        })}
      </nav>

      {/* ================= MOBILE HAMBURGER BUTTON ================= */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setDrawerOpen((prev) => !prev)}
          type="button"
          aria-expanded={drawerOpen}
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
              d={
                drawerOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* ================= MOBILE DRAWER CONTAINER ================= */}
      <div
        className={`fixed inset-x-0 top-20 h-[calc(100dvh-5rem)] bg-black/40 backdrop-blur-sm z-50 lg:hidden transition-all duration-300 ${
          drawerOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
      >
        <aside
          onClick={(e) => e.stopPropagation()}
          className={`w-full max-w-sm h-full bg-white flex flex-col justify-between shadow-2xl border-r border-slate-100 font-sans transition-transform duration-300 ${
            drawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Navigation Links Body */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2.5">
            {dropdowns.map((dropdown) => (
              <details
                key={dropdown.title}
                className="group border border-slate-200/80 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden transition-colors duration-200"
              >
                <summary className="flex items-center justify-between px-4 py-3 bg-slate-50/70 hover:bg-slate-100/70 cursor-pointer select-none">
                  <span className="text-sm font-bold text-[#186774]">
                    {dropdown.title}
                  </span>
                  <svg
                    className="w-4 h-4 text-slate-400 group-open:rotate-180 group-open:text-[#F26724] transition-transform duration-200"
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
                </summary>

                <div className="px-3 py-2 space-y-1 bg-white border-t border-slate-100">
                  <Link
                    href={dropdown.href}
                    onClick={() => setDrawerOpen(false)}
                    className="flex items-center justify-between px-3 py-2 text-xs font-bold text-[#F26724] hover:bg-[#F26724]/10 rounded-lg transition-colors"
                  >
                    <span>{dropdown.title} Program Overview</span>
                    <span>→</span>
                  </Link>

                  {dropdown.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setDrawerOpen(false)}
                      className="flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-600 hover:text-[#186774] hover:bg-[#186774]/5 rounded-lg transition-colors"
                    >
                      <span className="truncate pr-2">{item.title}</span>
                      {item.badge && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 bg-[#F26724]/10 text-[#F26724] rounded-full shrink-0 border border-[#F26724]/20">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </details>
            ))}

            {/* Static Links */}
            <div className="pt-2 space-y-1">
              {staticLinks
                .filter((link) => !link.isButton)
                .map((link) => {
                  const isExternal = link.href.includes("eshikhon.com.bd");
                  return (
                    <Link
                      key={link.title}
                      href={link.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      onClick={() => setDrawerOpen(false)}
                      className="block px-4 py-2.5 text-sm font-semibold text-[#186774] hover:bg-slate-50 rounded-xl transition-colors"
                    >
                      {link.title}
                    </Link>
                  );
                })}
            </div>

            {/* CTA Button Links */}
            <div className="pt-4 border-t border-slate-100">
              {staticLinks
                .filter((link) => link.isButton)
                .map((link) => {
                  const isExternal = link.href.includes("eshikhon.com.bd");
                  return (
                    <Link
                      key={link.title}
                      href={link.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      onClick={() => setDrawerOpen(false)}
                      className="w-full flex items-center justify-center py-3 text-sm font-bold text-white bg-[#F26724] hover:bg-[#df5613] rounded-xl shadow-md shadow-[#F26724]/20 active:scale-[0.98] transition-all"
                    >
                      {link.title}
                    </Link>
                  );
                })}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}