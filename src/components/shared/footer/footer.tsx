import RootWrapper from "@/layouts/root-wrapper";
import { footerData } from "./footer-data";
import Link from "next/link";
import Image from "next/image";
import footerLogo from "@/assets/footerLogo.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

function Footer() {
  return (
    <>
      <footer className="pt-[5.625rem] pb-[5.375rem] bg-[#434645] overflow-hidden">
        <RootWrapper className=" gap-20 lg:gap-0">
          <div className=" ">
            <div className="pb-3 border-b border-white w-max lg:w-full">
              <Image src={footerLogo} alt="footerLogo" />
            </div>
            <div className="flex flex-wrap gap-[7.1875rem] mt-[1.625rem] ">
              <form className=" rounded-4xl bg-project-background  flex flex-col gap-3 w-full sm:w-[40rem]">
                <h3 className="text-white text-xl font-semibold">Contact Us</h3>
                <label>
                  <label
                    htmlFor="full_name"
                    className="text-sm leading-[1.55] text-white"
                  >
                    Full Name <span className="text-project-error">*</span>
                  </label>
                  <Input
                    name="full_name"
                    id="full_name"
                    className=" py-2.5 pl-5 pr-2.5 mt-1.5 placeholder:text-white/70 text-white"
                    placeholder="Enter full name"
                  />
                </label>
                <label>
                  <label
                    htmlFor="email"
                    className="text-sm leading-[1.55] text-white"
                  >
                    Email <span className="text-project-error">*</span>
                  </label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    className=" py-2.5 pl-5 pr-2.5 mt-1.5 placeholder:text-white/70 text-white"
                    placeholder="Enter your email"
                  />
                </label>

                <label>
                  <label className="text-sm leading-[1.55] text-white">
                    Your Instruction?{" "}
                    <span className="text-project-error">*</span>
                  </label>
                  <Textarea
                    className=" shadow-none rounded-xl placeholder:text-project-grayscale-500 text-project-grayscale-500 placeholder:text-base text-base placeholder:leading-[1.6] leading-[1.6] mt-1.5 pt-2.5 px-3 pb-[1.875rem] min-h-[9.375rem] max-h-[18.75rem] placeholder:text-white/70 text-white"
                    placeholder="Message"
                  />
                </label>
                <Button className="py-3.5 bg-project-primary   font-medium text-base">
                  Submit
                </Button>
              </form>
              <div className="flex gap-12 flex-wrap">
                <ul>
                  {footerData.col1.lists.map((list, i) => (
                    <li className="text-lg !leading-[1.66] text-white" key={i}>
                      <Link href={list.href}>{list.name}</Link>
                    </li>
                  ))}
                </ul>
                {/* <ul>
                  {footerData.col2.lists.map((list, i) => (
                    <li className="text-lg !leading-[1.66] text-white" key={i}>
                      <Link href={list.href}>{list.name}</Link>
                    </li>
                  ))}
                </ul> */}
              </div>
            </div>
          </div>
        </RootWrapper>
      </footer>
      <section className="py-4 bg-[#323232] overflow-hidden">
        <RootWrapper>
          <p className="text-base text-white">
            Copyright &copy; {new Date().getFullYear()} Mobiglobe Technologies
            Ltd. All Rights Reserved.
          </p>
        </RootWrapper>
      </section>
    </>
  );
}

export default Footer;
