import RootWrapper from "@/layouts/root-wrapper";
import { servicesData } from "./service-data";

function ServicesSection() {
  return (
    <>
      <section className="py-10 md:py-[4rem] lg:py-[6.25rem] bg-white">
        <RootWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesData.map((service, i) => (
              <div
                key={i}
                className="bg-[#F9FAFB] border border-[#CBD5E0] rounded-[1.25rem] p-8 flex flex-col gap-5"
              >
                <service.icon className="size-[7.5rem]" />
                <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.625rem] font-bold !leading-[1.19] text-[#10182B]">
                  {service.title}
                </h4>
                <p className="text-base sm:text-lg md:text-xl lg:text-[1.75rem] leading-[1.28] text-black">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </RootWrapper>
      </section>
    </>
  );
}

export default ServicesSection;
