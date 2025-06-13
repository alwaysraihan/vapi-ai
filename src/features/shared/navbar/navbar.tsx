"use client";
import RootWrapper from "@/layouts/root-wrapper";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { navData } from "./nav-data";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function Navbar() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [isDark, setIsDark] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    if (pathName === "/case-studies") {
      setIsDark(true);
    }
  }, [pathName]);

  return (
    <>
      <nav className="py-9 bg-[#949494]/10 backdrop-blur-sm absolute top-0 left-0 w-full z-30 max-h-[10.6875rem]">
        <RootWrapper className="flex items-center justify-between gap-8">
          <Link href={"/"} className="w-max">
            <Image src={logo} alt="logo" />
            <p
              className={`text-sm  font-medium ${
                isDark ? "text-black" : "text-white"
              }`}
            >
              Bridging People&apos;s Gaps, Building Political Victories
            </p>
          </Link>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="hover:bg-transparent cursor-pointer lg:hidden"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <Menu className="size-10" />
          </Button>
          <ul className="lg:flex items-center gap-3 hidden ">
                   {/* AI Survey Agent Button */}
        <Link href={'/survey-agent'} className="group relative bg-white hover:bg-gray-50 text-gray-600 font-normal py-4 px-8 rounded-full border border-gray-300 shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-4 min-w-[280px] justify-center">
          <div className="flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/>
              <path d="M8.5 12h2v6h-2z"/>
              <path d="M13.5 12h2v6h-2z"/>
            </svg>
          </div>
          <span className="text-sm font-medium tracking-wide">TALK TO AI-SURVEY AGENT</span>
        </Link>
        {/* AI Ring2Poll Button */}
        <button className="group relative bg-white hover:bg-gray-50 text-gray-600 font-normal py-4 px-8 rounded-full border border-gray-300 shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-4 min-w-[280px] justify-center">
          <div className="flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/>
              <path d="M8.5 12h2v6h-2z"/>
              <path d="M13.5 12h2v6h-2z"/>
            </svg>
          </div>
          <span className="text-sm font-medium tracking-wide">Talk to Ring2Poll</span>
        </button>

          </ul>
        </RootWrapper>
      </nav>
      <Sheet open={showSidebar} onOpenChange={setShowSidebar}>
        <SheetContent side="left" className="p-4 sm:w-auto w-full">
          <SheetHeader className="hidden">
            <SheetTitle>sidebar</SheetTitle>
          </SheetHeader>
          <ul className="flex flex-col gap-3 mt-10 ">
                         {/* AI Survey Agent Button */}
        <button className="group relative bg-white hover:bg-gray-50 text-gray-600 font-normal py-4 px-8 rounded-full border border-gray-300 shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-4 min-w-[280px] justify-center">
          <div className="flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/>
              <path d="M8.5 12h2v6h-2z"/>
              <path d="M13.5 12h2v6h-2z"/>
            </svg>
          </div>
          <span className="text-sm font-medium tracking-wide">TALK TO AI-SURVEY AGENT</span>
        </button>
        {/* AI Ring2Poll Button */}
        <button className="group relative bg-white hover:bg-gray-50 text-gray-600 font-normal py-4 px-8 rounded-full border border-gray-300 shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-4 min-w-[280px] justify-center">
          <div className="flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/>
              <path d="M8.5 12h2v6h-2z"/>
              <path d="M13.5 12h2v6h-2z"/>
            </svg>
          </div>
          <span className="text-sm font-medium tracking-wide">Talk to Ring2Poll</span>
        </button>
          </ul>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default Navbar;
