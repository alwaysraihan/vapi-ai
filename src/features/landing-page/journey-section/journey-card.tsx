import Image from "next/image";
import { Journey } from "./journey-data";

function JourneyCard({ journey }: { journey: Journey }) {
  return (
    <div
      className={`flex justify-between  gap-7 ${
        journey.isImgFirst ? "text-right" : "text-left"
      }`}
    >
      {journey.isImgFirst === true && (
        <Image
          src={journey.img}
          alt="journey"
          className="min-w-[15.625rem] md:block hidden"
        />
      )}
      <div>
        <h3 className="text-project-primary text-2xl sm:text-text-3xl md:text-4xl lg:text-5xl !leading-[1.16] font-bold">
          {journey.title}
        </h3>
        <h3 className=" text-xl sm:text-2xl md:text-3xl lg:text-[2.625rem] !leading-[1.16] text-black">
          {journey.subTitle}
        </h3>
        <p className=" text-base sm:text-lg md:text-xl lg:text-[1.75rem] text-black max-w-[58.75rem] mt-6">
          {journey.description}
        </p>
      </div>
      {journey.isImgFirst === false && (
        <Image
          src={journey.img}
          alt="journey"
          className="min-w-[15.625rem] md:block hidden"
        />
      )}
    </div>
  );
}

export default JourneyCard;
