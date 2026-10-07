"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/data/site";
import Mascot from "./Mascot";
import Wordmark from "./Wordmark";
import { IconClose, IconMenu } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu after navigating.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname === href.replace(/\/$/, "");

  return (
    <header className="sticky top-0 z-50 bg-wp-cream/95 backdrop-blur-sm border-b-[3px] border-wp-plum">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 btn btn-secondary z-50"
      >
        Skip to content
      </a>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-[72px] flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-1 no-underline shrink-0" aria-label="Wonkypops home">
          <Mascot className="h-12 w-auto -my-1" />
          <Wordmark className="text-[1.9rem] pb-1" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`font-display font-medium px-3 py-2 rounded-full no-underline text-[0.98rem] text-wp-plum hover:bg-wp-peach hover:text-wp-plum inline-flex min-h-[44px] items-center ${
                    isActive(item.href) ? "bg-wp-peach outline-2 outline-wp-plum" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="lg:hidden btn btn-secondary !px-3 !min-h-[48px] !shadow-none"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <IconClose className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Main"
        hidden={!open}
        className="lg:hidden border-t-[3px] border-wp-plum bg-wp-cream"
      >
        <ul className="mx-auto max-w-6xl px-4 py-3 grid gap-1">
          <li>
            <Link
              href="/"
              className="block font-display font-bold text-xl px-3 py-3 rounded-2xl no-underline text-wp-plum hover:bg-wp-peach"
              aria-current={pathname === "/" ? "page" : undefined}
            >
              Home
            </Link>
          </li>
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`block font-display font-bold text-xl px-3 py-3 rounded-2xl no-underline text-wp-plum hover:bg-wp-peach ${
                  isActive(item.href) ? "bg-wp-peach" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
