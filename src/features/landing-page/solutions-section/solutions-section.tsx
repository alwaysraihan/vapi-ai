import SectionHeading from "@/components/common/section-heading";
import RootWrapper from "@/layouts/root-wrapper";
import SolutionCard from "./solution-card";
import { solutionData } from "./solution-data";

function SolutionsSection() {
  return (
    <>
      <section
        id="solutions"
        className="py-10 md:py-[4rem] lg:py-[6.25rem] bg-[#F9FAFB]"
      >
        <RootWrapper>
          <SectionHeading
            title="Pioneering Solutions"
            subTitle="Our Policy Blueprints"
          />
          <p className="text-black text-xl sm:text-2xl lg:text-[2rem] leading-[1.33] max-w-[69.125rem] mt-6">
            Ring2Poll develops groundbreaking policy frameworks designed for a
            progressive and prosperous future.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
            {solutionData.map((solution, i) => (
              <SolutionCard solution={solution} key={i} />
            ))}
          </div>
        </RootWrapper>
      </section>
    </>
  );
}
export default SolutionsSection;
