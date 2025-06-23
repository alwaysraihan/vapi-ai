import SectionHeading from "@/components/common/section-heading";
import RootWrapper from "@/layouts/root-wrapper";
import Image from "next/image";
import ourSolutionImage from "@/assets/ourSolutionImage.svg";

function OurSolution() {
  return (
    <>
      <section className="py-[6.25rem] bg-[#F9FAFB]">
        <RootWrapper>
          <SectionHeading
            title="Our Solutions"
            subTitle="Comprehensive Political Strategy: From Insight to Victory"
          />
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black mt-6">
            Leveraging Patented Technology & Cutting-Edge AI for Unrivaled
            Campaign Success.
          </p>
          <div className="mt-12 p-8 flex items-center justify-between flex-wrap-reverse md:flex-nowrap border border-[#CBD5E0] gap-10 rounded-[20px]">
            <p className="text-black text-base sm:text-lg md:text-xl lg:text-2xl ">
              Ring2Poll offers an end-to-end suite of strategic solutions
              designed to empower political parties and candidates at every
              stage of the electoral cycle. Our unique blend of patented
              technology, deep analytical expertise, and pioneering AI
              integration ensures that your campaign is not just run, but won.
            </p>
            <Image
              src={ourSolutionImage}
              alt="solution"
              className="md:min-w-[19.375rem] mx-auto md:mx-0"
            />
          </div>
        </RootWrapper>
      </section>
    </>
  );
}

export default OurSolution;
