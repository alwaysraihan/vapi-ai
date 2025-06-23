import Image from "next/image";
import { Solution } from "./solution-data";
import { hexToRgba } from "@/lib/helper/color-converter";

function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <div
      className="rounded-[1.25rem]  p-8 flex flex-col gap-5"
      style={{ backgroundColor: hexToRgba(solution.color, 0.15) }}
    >
      <Image src={solution.img} alt="solution" />
      <h4
        className="text-xl sm:text-2xl lg:text-[2rem] font-bold !leading-[1.19] my-1"
        style={{ color: solution.color }}
      >
        {solution.title}
      </h4>
      <p className="text-base sm:text-lg md:text-xl  !leading-[1.28]">
        {solution.description}
      </p>
    </div>
  );
}

export default SolutionCard;
