import { heroSectionData } from "../utils/Data";
import { Libre_Baskerville, Macondo } from "next/font/google";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: "400",
});

const macondo = Macondo({
  subsets: ["latin"],
  weight: "400",
});

const Hero = () => {
  return (
    <div className="min-h-[400px] flex flex-col   rounded-xl items-center justify-center">
      <h1
        className={` ${libreBaskerville.className} text-[#4e8e20]  text-3xl sm:text-5xl mb-3 font-bold`}
      >
        {heroSectionData.headingText}
      </h1>
      <h2
        className={`${libreBaskerville.className} sm:text-4xl px-1 sm:px-0 text-center text-2xl text-slate-700`}
      >
        {heroSectionData.subHeadingText}
      </h2>
      <h3
        className={`${libreBaskerville.className} px-10 mt-3 text-sm sm:text-xl text-slate-500 text-center`}
      >
        {heroSectionData.description}
      </h3>
    </div>
  );
};

export default Hero;
