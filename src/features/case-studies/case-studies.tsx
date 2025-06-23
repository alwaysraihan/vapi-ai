import SectionHeading from "@/components/common/section-heading";
import { caseData } from "./case-data";
import { Button } from "@/components/ui/button";
import RootWrapper from "@/layouts/root-wrapper";

function CaseStudies() {
  return (
    <>
      <section className="pt-[13.9375rem] pb-[7.5rem]">
        <RootWrapper>
          <SectionHeading
            title="Case Studies:"
            subTitle="Proven Impact: Our Track Record of Electoral Success"
          />
          <div className="mt-12 ">
            <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] text-black">
              Data-Driven Victories Across India&apos;s Political Landscape.
            </h4>
            <p className="text-base sm:text-lg md:text-xl  text-black mt-6">
              At Ring2Poll, our success is measured by the victories of our
              clients. We are proud to have consistently delivered accurate
              insights and strategic advantages that have shaped electoral
              outcomes.
            </p>
          </div>
          <div className="mt-[4rem] md:mt-[7.1875rem] flex flex-col gap-[3rem] md:gap-[6.8125rem]">
            {caseData.map((study, i) => (
              <div key={i}>
                <h3 className="text-2xl sm:text-3xl md:text-[2rem]">
                  {study.title}
                </h3>
                <p className="text-black text-base sm:text-lg md:text-xl  my-6">
                  {study.description}
                </p>
                <Button className="bg-project-primary text-white h-[2.625rem] font-bold text-2xl md:text-3xl lg:text-4xl">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </RootWrapper>
      </section>
    </>
  );
}

export default CaseStudies;
