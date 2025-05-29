import RootWrapper from "@/layouts/root-wrapper";
import Image from "next/image";
import info from "@/assets/info.svg";

function MilestoneSection() {
  return (
    <>
      <section className="pb-[6.25rem] bg-white">
        <RootWrapper>
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold text-[#10182B]">
            Key Milestones
          </h2>
          <Image src={info} alt="info" className="mt-20 mb-[3.125rem]" />
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold text-[#10182B]">
            Overall
          </h2>
          <p className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black">
             5 Million+ Opinions Gathered, 15 Years of Experience.
          </p>
        </RootWrapper>
      </section>
    </>
  );
}

export default MilestoneSection;
