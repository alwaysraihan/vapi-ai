import SectionHeading from "@/components/common/section-heading";
import { GradientBorderIcon } from "@/icons/icons";
import RootWrapper from "@/layouts/root-wrapper";
import img1 from "@/assets/1.svg";
import img2 from "@/assets/2.svg";
import img3 from "@/assets/3.svg";
import img4 from "@/assets/4.svg";
import img5 from "@/assets/5.svg";
import Image from "next/image";

function CoreSection() {
  const missionLists = [
    {
      id: "1",
      text: "Identifying critical societal gaps through unparalleled research and AI-driven insights.",
      width: 100,
      infoIndex: img1,
    },
    {
      id: "2",
      text: "Developing innovative, implementable policy solutions across all sectors,\n from 'Learning & Earning Together' education reforms to 'Less Tax, More Revenue' economic policies.",
      width: 95,
      infoIndex: img2,
    },
    {
      id: "3",
      text: "Guiding leaders to implement these solutions in government or to present compelling proofs of\n concept to voters.",
      width: 90,
      infoIndex: img3,
    },
    {
      id: "4",
      text: "Fostering 'People's Leaders First' who champion the welfare of their communities.",
      width: 100,
      infoIndex: img4,
    },
    {
      id: "5",
      text: "Ultimately, ensuring that political victories directly lead to tangible improvements for every citizen.",
      width: 95,
      infoIndex: img5,
    },
  ];
  return (
    <>
      <section className="py-10 md:py-[4rem] lg:py-[6.25rem] bg-[#F9FAFB]">
        <RootWrapper>
          <SectionHeading
            title="Our Core:"
            subTitle="Values, Vision & Mission"
          />
          <p className="text-black text-xl sm:text-2xl lg:text-[1.75rem] leading-[1.33]  mt-6">
            At Ring2Poll, our work is driven by a fundamental belief: true
            political success emerges from genuinely serving the people.
            We&apos;re not just strategists; we&apos;re problem-solvers
            dedicated to fostering a better society through healthier politics.
          </p>

          <div className="mt-12 flex flex-col gap-6">
            <div className="p-8 border border-[#CBD5E0] rounded-[1.25rem]">
              <h5 className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-bold text-[#10182B]">
                Our Vision
              </h5>
              <p className="text-base sm:text-lg md:text-xl  leading-[1.28] mt-5 text-black">
                We envision a future where politics directly translates into a
                better society. A society built on responsive governance,
                empowered citizens, and sustainable progress. We believe in
                creating a political landscape where leaders are truly connected
                to the public&apos;s pulse, driving positive change through
                evidence-based policies and transparent action.
              </p>
            </div>
            <div className="p-8 border border-[#CBD5E0] rounded-[1.25rem]">
              <h5 className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-bold text-[#10182B]">
                Our Mission
              </h5>
              <p className="text-left text-base sm:text-lg md:text-xl  leading-[1.28] mt-5 text-black">
                Our mission is to empower political leaders and parties to
                achieve this vision. We do this by:
              </p>
              <ul className="text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.28] mt-12 text-black flex flex-col items-end ">
                {missionLists.map((mission, i) => (
                  <li
                    key={i}
                    className="text-right pb-[1.875rem] lg:py-[1.875rem] pr-9 bg-[#F5F5F5] relative isolate whitespace-pre-line"
                    style={{ width: `${mission.width}%` }}
                  >
                    <Image
                      src={mission.infoIndex}
                      alt={`img${i + 1}`}
                      className="lg:absolute -top-5 h-full"
                    />
                    {mission.text}
                    <GradientBorderIcon className="absolute bottom-0 w-full" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 border border-[#CBD5E0] rounded-[1.25rem]">
              <h5 className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-bold text-[#10182B]">
                Our Guiding Values
              </h5>
              <p className="text-base sm:text-lg md:text-xl  leading-[1.28] mt-5 text-black">
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
