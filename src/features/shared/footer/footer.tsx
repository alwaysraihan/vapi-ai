import RootWrapper from "@/layouts/root-wrapper";
import { footerData } from "./footer-data";
import Link from "next/link";
import Image from "next/image";
import footerLogo from "@/assets/footerLogo.svg";

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
              <div className="flex  flex-col flex-wrap gap-1">
                <div className="text-lg !leading-[1.66] text-white flex items-center gap-4">
                  <h6 className="font-bold">Email :</h6>
                  <p className="font-normal">ucankishore@gmail.com</p>
                </div>
                <div className="text-lg !leading-[1.66] text-white flex items-center gap-4">
                  <h6 className="font-bold">Phone :</h6>
                  <p className="font-normal">+44 20 7946 0958</p>
                </div>
                <div className="text-lg !leading-[1.66] text-white flex items-center gap-4">
                  <h6 className="font-bold">Address :</h6>
                  <p className="font-normal">
                    2nd Floor, Orion Tech Park, Sector 62, Noida, UP 201309,
                    India
                  </p>
                </div>
              </div>
              <div className="flex gap-12 flex-wrap">
                <ul>
                  {footerData.col1.lists.map((list, i) => (
                    <li className="text-lg !leading-[1.66] text-white" key={i}>
                      <Link href={list.href}>{list.name}</Link>
                    </li>
                  ))}
                </ul>
                <ul>
                  {footerData.col2.lists.map((list, i) => (
                    <li className="text-lg !leading-[1.66] text-white" key={i}>
                      <Link href={list.href}>{list.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </RootWrapper>
      </footer>
      <section className="py-4 bg-[#323232] overflow-hidden">
        <RootWrapper>
          <p className="text-base text-white">
            Copyright &copy; 2016 Mobiglobe Technologies Ltd. All Rights
            Reserved.
          </p>
        </RootWrapper>
      </section>
    </>
  );
}

export default Footer;
