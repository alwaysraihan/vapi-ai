import RootWrapper from "@/layouts/root-wrapper";
import JourneyCard from "./journey-card";
import { journeyData } from "./journey-data";
import SectionHeading from "@/components/common/section-heading";

function JourneySection() {
  return (
    <>
      <section className="py-10 md:py-[4rem] lg:py-[6.25rem] bg-white">
        <RootWrapper>
          <SectionHeading
            title="Our Technological Journey:"
            subTitle="Pioneering Political Intelligence"
          />
          <div className="mt-[4rem] flex flex-col gap-20 md:gap-12">
            {journeyData.map((journey, i) => (
              <JourneyCard journey={journey} key={i} />
            ))}
          </div>
        </RootWrapper>
      </section>
    </>
  );
}

export default JourneySection;
