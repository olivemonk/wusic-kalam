import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full px-10 mx-auto select-none ">
      <div className="bg-orange-700 w-[100%] h-auto flex items-center justify-between rounded-md">
        <div className="p-10">
          <p className="mb-2 ml-1 text-xs text-zinc-100">New Album</p>
          <h1 className="text-7xl font-bold">Massa Yo</h1>
          <h3 className="ml-1 text-lg">by Kalam's</h3>
          <Button className="mt-4">
            Listen Now
          </Button>
        </div>
        <div className="">
          <Image src={"/ph.png"} alt="poster" height={355} width={702} className="object-cover p-1" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
