import Image from "next/image";
import Link from "next/link";
import { navDropdowns, staticNavLinks } from "@/Data/nav";
import NavMenuClient from "./NavMenuClient";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex w-full items-center justify-between h-20">
          {/* Left Brand Logo - Optimized with next/image */}
          <div className="shrink-0">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Logo"
                width={180}
                height={64}
                priority
                className="h-16 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Right Navigation & Interactive Island */}
          <NavMenuClient
            dropdowns={navDropdowns}
            staticLinks={staticNavLinks}
          />
        </div>
      </div>
    </header>
  );
}