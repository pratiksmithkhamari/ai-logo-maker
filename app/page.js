import Hero from "./_components/Hero";
import HeroInput from "./_components/HeroInput";

export default function Home() {
  return (
    <div>
      <div className="min-h-[400px] flex flex-col pb-5 sm:pb-20 rounded-xl items-center justify-center  bg-gradient-to-b from-[#aae77fc6] to-[#caebb2c6]">
        <Hero />

        <HeroInput />
      </div>
    </div>
  );
}
