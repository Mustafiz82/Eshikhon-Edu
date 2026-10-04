"use client"
import { navDropdowns, staticNavLinks } from "@/Data/nav";
import NavMenuClient from "./NavMenuClient";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  return (
    <header className="sticky top-0 bg z-40 w-full bg-white backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl relative bg-white/95 mx-auto px-4">
        <div className="flex w-full items-center justify-between h-20">
          {/* Left Brand Logo */}
          <div className="shrink-0">
           <Link href={"/"}>  <img className="h-16" src="/logo.png" alt="Logo" /></Link>
          </div>

          {/* Right Navigation & Interactive Island */}
          <NavMenuClient
            dropdowns={navDropdowns}
            staticLinks={staticNavLinks}
            setDrawerOpen={setDrawerOpen}
            drawerOpen={drawerOpen}
          />
        </div>
      </div>

      {/* MOBILE DRAWER CONTAINER (FIXED POSITIONING) */}
      <div 
        className={`fixed inset-x-0 top-20 h-[calc(100dvh-5rem)] bg-black/40 backdrop-blur-sm z-50 lg:hidden transition-all duration-300 ${
          drawerOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)} // Closes drawer when clicking the background
      >
        <aside 
          onClick={(e) => e.stopPropagation()} // Prevents clicks inside the menu from closing it
          className={`w-full max-w-sm h-full bg-white flex flex-col justify-between shadow-2xl border-r border-slate-100 font-sans transition-transform duration-300 ${
            drawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Navigation Links Body */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2.5">
            {/* Dropdowns (Pure CSS Accordions using details/summary) */}
            {navDropdowns.map((dropdown) => (
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
                  {/* Main Program Overview Link */}
                  <Link
                    href={dropdown.href}
                    onClick={() => setDrawerOpen(false)}
                    className="flex items-center justify-between px-3 py-2 text-xs font-bold text-[#F26724] hover:bg-[#F26724]/10 rounded-lg transition-colors"
                  >
                    <span>{dropdown.title} Program Overview</span>
                    <span>→</span>
                  </Link>

                  {/* Sub-item Courses */}
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

            {/* Regular Static Text Links */}
            <div className="pt-2 space-y-1">
              {staticNavLinks
                .filter((link) => !link.isButton)
                .map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    onClick={() => setDrawerOpen(false)}
                    className="block px-4 py-2.5 text-sm font-semibold text-[#186774] hover:bg-slate-50 rounded-xl transition-colors"
                  >
                    {link.title}
                  </Link>
                ))}
            </div>

            <div className="pt-4 border-t border-slate-100">
              {staticNavLinks
                .filter((link) => link.isButton)
                .map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    onClick={() => setDrawerOpen(false)}
                    className="w-full flex items-center justify-center py-3 text-sm font-bold text-white bg-[#F26724] hover:bg-[#df5613] rounded-xl shadow-md shadow-[#F26724]/20 active:scale-[0.98] transition-all"
                  >
                    {link.title}
                  </Link>
                ))}
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}