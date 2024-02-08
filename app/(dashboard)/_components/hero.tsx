import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full px-2 lg:px-10 mx-auto select-none mt-1 md:mt-4 ">
      <div className="bg-orange-700 w-[100%] h-auto flex flex-col-reverse md:flex-row items-center justify-between rounded-md">
        <div className=" p-4 md:p-10">
          <p className="mb-2 ml-1 text-xs text-zinc-100">New Album</p>
          <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-7xl font-bold">
            Massa Yo
          </h1>
          <h3 className="ml-1 text-lg">by Kalam&apos;s</h3>
          <Button className="mt-4">Listen Now</Button>
        </div>
        <div className="">
          <Image
            src={"/ph.png"}
            alt="poster"
            height={355}
            width={702}
            className="object-cover p-1 hidden lg:block"
          />
          <Image
            src={"/hero-s.png"}
            alt="poster"
            height={452}
            width={552}
            className="object-cover p-1 block lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
