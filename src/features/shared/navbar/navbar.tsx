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
            {navData.map((menu, i) => (
              <li key={i}>
                <Link
                  href={"#"}
                  className={`font-bold text-xl xl:text-[1.75rem] flex items-center gap-2.5 text-white p-3  xl:py-3.5 xl:px-5 rounded-lg focus-visible:ring-2`}
                  style={{ backgroundColor: menu.bgColor }}
                >
                  <menu.icon className="text-3xl" />
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </RootWrapper>
      </nav>
      <Sheet open={showSidebar} onOpenChange={setShowSidebar}>
        <SheetContent side="left" className="p-4 sm:w-auto w-full">
          <SheetHeader className="hidden">
            <SheetTitle>sidebar</SheetTitle>
          </SheetHeader>
          <ul className="flex flex-col gap-3 mt-10 ">
            {navData.map((menu, i) => (
              <li key={i}>
                <Link
                  href={"#"}
                  className={`font-bold text-[1.75rem] flex items-center gap-2.5 text-white p-3  py-3.5 px-5 rounded-lg focus-visible:ring-2`}
                  style={{ backgroundColor: menu.bgColor }}
                >
                  <menu.icon className="text-3xl" />
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default Navbar;
