function SectionHeading({
  title,
  subTitle,
}: {
  title: string;
  subTitle?: string;
}) {
  return (
    <div>
      <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-project-primary leading-[1.12]">
        {title}
        <span className="text-[#4B4B4B] font-medium block whitespace-pre-line">
          {subTitle}
        </span>
      </h2>
    </div>
  );
}

export default SectionHeading;
