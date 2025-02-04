"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-green-800 text-white flex items-center justify-center">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="hidden font-bold sm:inline-block">
                مدرسہ عبداللہ بن مسعود
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/" className="hover:text-green-300">
                Home
              </Link>
              <Link href="/about" className="hover:text-green-300">
                About
              </Link>
              <Link href="/services" className="hover:text-green-300">
                Services
              </Link>
              <Link href="/contact" className="hover:text-green-300">
                Contact
              </Link>
            </nav>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <MobileNav />
            </SheetContent>
          </Sheet>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Link
                href="/"
                className="mr-6 flex items-center space-x-2 md:hidden"
              >
                <span className="font-bold">مدرسہ عبداللہ بن مسعود</span>
              </Link>
            </div>
            <nav className="flex items-center">
              <Button
                variant="secondary"
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Donate Now
              </Button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

function MobileNav() {
  return (
    <div className="flex flex-col space-y-3">
      <Link href="/" className="hover:text-green-300">
        Home
      </Link>
      <Link href="/about" className="hover:text-green-300">
        About
      </Link>
      <Link href="/services" className="hover:text-green-300">
        Services
      </Link>
      <Link href="/contact" className="hover:text-green-300">
        Contact
      </Link>
    </div>
  );
}
