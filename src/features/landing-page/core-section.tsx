import SectionHeading from "@/components/common/section-heading";
import RootWrapper from "@/layouts/root-wrapper";

function CoreSection() {
  const missionLists = [
    "Identifying critical societal gaps through unparalleled research and AI-driven insights.",
    "Developing innovative, implementable policy solutions across all sectors, from 'Learning & Earning Together' education reforms to 'Less Tax, More Revenue' economic policies.",
    "Guiding leaders to implement these solutions in government or to present compelling proofs of concept to voters.",
    "Fostering 'People's Leaders First' who champion the welfare of their communities.",
    "Ultimately, ensuring that political victories directly lead to tangible improvements for every citizen.",
  ];
  return (
    <>
      <section className="py-10 md:py-[4rem] lg:py-[6.25rem] bg-[#F9FAFB]">
        <RootWrapper>
          <SectionHeading
            title="Our Core:"
            subTitle="Values, Vision & Mission"
          />
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black leading-[1.33] mt-6">
            At Ring2Poll, our work is driven by a fundamental belief: true
            political success emerges from genuinely serving the people.
            We&apos;re not just strategists; we&apos;re problem-solvers
            dedicated to fostering a better society through healthier politics.
          </p>
          <div className="mt-12 flex flex-col gap-6">
            <div className="p-8 border border-[#CBD5E0] rounded-[1.25rem]">
              <h5 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.625rem] font-bold text-[#10182B]">
                Our Vision
              </h5>
              <p className="text-base sm:text-lg md:text-xl lg:text-[1.75rem] leading-[1.28] mt-5 text-black">
                We envision a future where politics directly translates into a
                better society. A society built on responsive governance,
                empowered citizens, and sustainable progress. We believe in
                creating a political landscape where leaders are truly connected
                to the public&apos;s pulse, driving positive change through
                evidence-based policies and transparent action.
              </p>
            </div>
            <div className="p-8 border border-[#CBD5E0] rounded-[1.25rem]">
              <h5 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.625rem] font-bold text-[#10182B]">
                Our Mission
              </h5>
              <ul className="text-base sm:text-lg md:text-xl lg:text-[1.75rem] leading-[1.28] mt-5 text-black list-disc">
                <p>
                  Our mission is to empower political leaders and parties to
                  achieve this vision. We do this by:
                </p>
                {missionLists.map((mission, i) => (
                  <li key={i} className="ml-9">
                    {mission}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 border border-[#CBD5E0] rounded-[1.25rem]">
              <h5 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.625rem] font-bold text-[#10182B]">
                Our Guiding Values
              </h5>
              <p className="text-base sm:text-lg md:text-xl lg:text-[1.75rem] leading-[1.28] mt-5 text-black">
                Our operations are rooted in a distinctive approach:
                People&apos;s Solutions First, Politics Parallel. This means we
                prioritize understanding and addressing the real needs of
                communities above all else. Political strategy, for us, is the
                parallel pathway to implementing these solutions and achieving a
                mandate to serve. We build campaigns from the ground up, based
                on what genuinely improves lives.
              </p>
            </div>
          </div>
        </RootWrapper>
      </section>
    </>
  );
}

export default CoreSection;
