"use client";
import RootWrapper from "@/layouts/root-wrapper";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { navData } from "./nav-data";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
export const languages = [
  { assistantId: "818c01a0-5fb3-48e1-8f95-db49ee98ea8b", title: "English" },
  { assistantId: "8c036e17-eab7-452d-aeff-e303e6748ab7", title: "Hindi" },
  { assistantId: "8e34ec3f-8c44-4ca8-a4c6-c01e85e10dd7", title: "Telugu" },
  { assistantId: "c39d5546-98b2-4df7-a32c-7b6a2eab8258", title: "Tamil" },
  { assistantId: "cdbddf68-ad96-420a-a7fe-8c3a930130ae", title: "Kannada" },
  { assistantId: "8c73ae03-de02-4ce1-909f-c2c157e2803a", title: "Malayalam" },
];

function Navbar() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [isDark, setIsDark] = useState(false);
  const pathName = usePathname();
  const router = useRouter();
  useEffect(() => {
    if (pathName === "/case-studies") {
      setIsDark(true);
    }
  }, [pathName]);

  const [openLanguageSelector, setOpenLanguageSelector] =
    useState<boolean>(false);

  const handleLanguageSelect = (title: string) => {
    router.push(`/assistant?language=${title}`);
  };

  return (
    <>
      <AlertDialog open={openLanguageSelector}>
        <AlertDialogContent className="max-w-sm rounded-2xl p-6">
          <AlertDialogHeader>
            {/* Close Icon */}
            <button
              onClick={() => setOpenLanguageSelector(false)}
              className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-gray-700 transition"
            >
              <X size={20} />
            </button>
            <AlertDialogTitle className="text-xl text-black font-semibold text-center mb-4">
              Select Your Language
            </AlertDialogTitle>
            <div className="flex flex-col gap-3">
              {languages.map((lang) => (
                <button
                  key={lang.assistantId}
                  onClick={() => {
                    handleLanguageSelect(lang.title);
                  }}
                  className="w-full px-4 py-2 border rounded-lg text-black hover:bg-gray-100 transition text-base font-medium"
                >
                  {lang.title}
                </button>
              ))}
            </div>
          </AlertDialogHeader>
          {/* <div className="mt-6 flex justify-center">
            <button className="px-6 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition text-sm">
              Close
            </button>
          </div> */}
        </AlertDialogContent>
      </AlertDialog>
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
              <li key={i} className="p-2 border border-white rounded-full">
                <button
                  onClick={() => {
                    if (menu.path) {
                      router.push(menu.path);
                    } else {
                      setOpenLanguageSelector(true);
                    }
                  }}
                  className={`font-medium text-lg xl:text-xl leading-[2.25rem] flex items-center gap-2.5 text-[#2E2E2E] bg-white p-3  xl:py-2.5 xl:px-9 rounded-full focus-visible:ring-2 cursor-pointer`}
                  // style={{ backgroundColor: menu.bgColor }}
                >
                  <menu.icon className="text-3xl" />
                  {menu.label}
                </button>
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
              <li key={i} className="p-2 border border-[#2E2E2E] rounded-full">
                <button
                  onClick={() => {
                    if (menu.path) {
                      router.push(menu.path);
                    } else {
                      setOpenLanguageSelector(true);
                    }
                  }}
                  className={`font-medium text-lg xl:text-xl leading-[2.25rem] flex items-center justify-center gap-2.5 text-white bg-[#2E2E2E] p-3  xl:py-2.5 xl:px-9 rounded-full focus-visible:ring-2 cursor-pointer`}
                  // style={{ backgroundColor: menu.bgColor }}
                >
                  <menu.icon className="text-3xl" />
                  {menu.label}
                </button>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default Navbar;
