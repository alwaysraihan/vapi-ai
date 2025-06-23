import SectionHeading from "@/components/common/section-heading";
import RootWrapper from "@/layouts/root-wrapper";

function AboutUs() {
  const text = `"Founded in 2010 by Kishore Keerthi under Mobiglobe Technology, Ring2Poll emerged from a deep understanding of the inherent flaws in traditional psephology. Recognizing these challenges since 2009, we developed a revolutionary, patented solution (3062/CHE/2010) to transform quantitative opinion polling. We introduced the world's first automated, digitally transformed survey platform, capturing public opinion through a simple, cost-free missed call mechanism.
\nOver the past 15 years, Ring2Poll has evolved into a powerhouse of political strategy. In 2018, we established Ring2Poll Analytics Pvt Ltd, solidifying our specialization in advanced data analysis. Today, with over 5 million opinions gathered and a proud strategic partnership with NFO Research Pvt Ltd, we are pushing boundaries even further.
\nIn 2025, Ring2Poll is again leading the charge as the world's first to integrate AI & ML for deeper qualitative insights, addressing the limitations of traditional research with multilingual AI agents, automated analysis, and dynamic learning.
\nOur core team, including industry veterans like Ramesh BM (Ex-KPCC IT CELL & VP, Advisor & COO) and Nageswar Rao Vanboju (Former Founder, National Family Opinions Pvt Ltd, Director), along with V. Phanindra (CEO @ Trigun Infolabs, Stakeholder & Advisor), brings unparalleled expertise to every campaign."`;
  return (
    <>
      <section className="py-10 md:py-[4rem] lg:py-[6.25rem] bg-white">
        <RootWrapper>
          <SectionHeading
            title="About Us"
            subTitle={`The Ring2Poll Journey: \nPioneering Political Analytics for Over a Decade`}
          />
          <p className=" text-lg sm:text-xl  text-black whitespace-pre-line mt-6">
            {text}
          </p>
        </RootWrapper>
      </section>
    </>
  );
}

export default AboutUs;
