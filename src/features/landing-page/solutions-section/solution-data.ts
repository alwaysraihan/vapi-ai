import solution1 from "./assets/solution1.svg";
import solution2 from "./assets/solution2.svg";
import solution3 from "./assets/solution3.svg";

export type Solution = {
  id: string;
  img: string;
  title: string;
  description: string;
  color: string;
};

export const solutionData: Solution[] = [
  {
    id: "1",
    img: solution1,
    title: "Education \nReforms",
    description:
      "Our 'Learning & Earning Together' policy fosters holistic development, ensuring education directly translates into economic opportunity.",
    color: "#7FBF80",
  },
  {
    id: "2",
    img: solution2,
    title: "Employment & Empowerment (Tax Policy)",
    description:
      "We champion a 'Less Tax, More Revenue' single-tax policy that accelerates economic zone development. This strategy attracts significant investment, rapidly generates 20 lakh jobs, and empowers citizens.",
    color: "#009DDD",
  },
  {
    id: "3",
    img: solution3,
    title: "Leadership \nPolicy:",
    description:
      "Our ethos centers on cultivating 'People's Leaders first, Political Leaders second.' We guide leaders to connect authentically with communities, building trust and a lasting impact.",
    color: "#DD5350",
  },
];
