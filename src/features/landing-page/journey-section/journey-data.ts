import journey1 from "./assets/journey1.svg";
import journey2 from "./assets/journey2.svg";
import journey3 from "./assets/journey3.svg";

export type Journey = {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  img: string;
  isImgFirst: boolean;
};

export const journeyData: Journey[] = [
  {
    id: "1",
    title: "The Genesis",
    subTitle: "Digitally Transformed Psephology",
    description:
      "In 2010, Ring2Poll revolutionized traditional polling with the world's first patented digital automation for quantitative opinion surveys. By capturing insights through simple, cost-free missed calls, we eliminated human bias and scaled public sentiment analysis to unprecedented levels. This foundational leap set a new standard for accuracy and reach in political intelligence.",
    img: journey1,
    isImgFirst: false,
  },
  {
    id: "2",
    title: "The Present",
    subTitle: "AI-Automated Strategic Insights",
    description:
      " Today, Ring2Poll stands at the forefront of AI innovation in political strategy. Our advanced AI seamlessly integrates into our processes, automating deep qualitative research, streamlining data analysis, and providing real-time strategic insights. This powerful combination allows us to uncover nuances and actionable intelligence that traditional methods simply can't match.",
    img: journey2,
    isImgFirst: true,
  },
  {
    id: "3",
    title: "The Future",
    subTitle: "Blockchain-Secured Verifiable Data",
    description:
      "Looking ahead, Ring2Poll is committed to future-proofing political analysis with the adoption of blockchain technology. By integrating blockchain, we're ensuring the unquestionable integrity, transparency, and verifiability of all survey data and findings. This commitment to secure, immutable data sets a new global benchmark for trust and accountability in political polling and elections",
    img: journey3,
    isImgFirst: false,
  },
];
