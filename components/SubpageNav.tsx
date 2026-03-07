"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const subpages = [
  { name: "Fur Suchende", href: "/christ-werden/fuer-suchende" },
  { name: "Fur Muslime", href: "/christ-werden/fuer-muslime" },
  { name: "Fur Protestanten", href: "/christ-werden/fuer-protestanten" },
];

export function SubpageNav() {
  const pathname = usePathname();

  return (
    <div className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-[72px] z-30">
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Link
          href="/christ-werden"
          className="flex items-center gap-2 text-primary/60 hover:text-primary transition-colors font-body text-sm shrink-0"
        >
          <ArrowLeft className="w-4 h-4" />
          Ubersicht
        </Link>
        <div className="flex gap-2 overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0 scrollbar-hide">
          {subpages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-subheading transition-colors ${
                pathname === page.href
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-primary hover:bg-gray-200"
              }`}
            >
              {page.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
