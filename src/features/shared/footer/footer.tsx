import RootWrapper from "@/layouts/root-wrapper";
import { footerData } from "./footer-data";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="pt-[5.625rem] pb-[5.375rem] bg-[#434645] overflow-hidden">
        <RootWrapper className="grid grid-cols-6 lg:grid-cols-12 gap-20 lg:gap-0">
          <div className=" col-span-6">
            <div className="pb-3 border-b border-white w-max lg:w-full">
              <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white leading-[1.16] uppercase ">
                Find Solutions
              </h4>
            </div>
            <div className="mt-[1.625rem] flex sm:flex-row flex-col flex-wrap gap-[4rem]">
              <ul>
                <p className="text-[1.375rem] font-bold text-white mb-3">
                  {footerData.mobile.label}
                </p>
                {footerData.mobile.lists.map((list, i) => (
                  <li key={i}>
                    <Link
                      className="text-lg !leading-[1.66] text-white mb-1"
                      href={list.href}
                    >
                      {list.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul>
                <p className="text-[1.375rem] font-bold text-white mb-3">
                  {footerData.cloud.label}
                </p>
                {footerData.cloud.lists.map((list, i) => (
                  <li key={i}>
                    <Link
                      className="text-lg !leading-[1.66] text-white mb-1"
                      href={list.href}
                    >
                      {list.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul>
                <p className="text-[1.375rem] font-bold text-white mb-3">
                  {footerData.analytics.label}
                </p>
                {footerData.analytics.lists.map((list, i) => (
                  <li key={i}>
                    <Link
                      className="text-lg !leading-[1.66] text-white mb-1"
                      href={list.href}
                    >
                      {list.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className=" col-span-6">
            <div className="pb-3 lg:pl-[6rem] xl:pl-[11.375rem] border-b border-white w-max lg:w-full">
              <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white leading-[1.16] uppercase">
                Insights
              </h4>
            </div>
            <div className="mt-[1.625rem] flex sm:flex-row flex-col flex-wrap gap-[4rem] lg:pl-[6rem] xl:pl-[11.375rem]">
              <ul>
                {footerData.insight1.lists.map((list, i) => (
                  <li key={i}>
                    <Link
                      className="text-lg !leading-[1.66] text-white mb-1"
                      href={list.href}
                    >
                      {list.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul>
                {footerData.insight2.lists.map((list, i) => (
                  <li key={i}>
                    <Link
                      className="text-lg !leading-[1.66] text-white mb-1"
                      href={list.href}
                    >
                      {list.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul>
                {footerData.insight3.lists.map((list, i) => (
                  <li key={i}>
                    <Link
                      className="text-lg !leading-[1.66] text-white mb-1"
                      href={list.href}
                    >
                      {list.name}
                    </Link>
                  </li>
                ))}
              </ul>
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
