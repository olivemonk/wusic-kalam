import Image from "next/image";
import { Yatra_One } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Yatra_One({
  subsets: ["latin"],
  weight: ["400"],
});

const Logo = () => {
  return (
    <div className="flex items-center gap-x-2 ">
      <Image
        src="/logo.svg"
        alt="logo"
        width={40}
        height={40}
        className="object-cover"
      />
    </div>
  );
};

export default Logo;
