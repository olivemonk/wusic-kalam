import Image from "next/image";
import { Yatra_One } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Yatra_One({
  subsets: ["latin"],
  weight: ["400"],
});

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2 ">
      <p
        className={cn(
          "font-extrabold text-4xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text select-none cursor-pointer",
          font.className
        )}
      >
        W
      </p>
    </div>
  );
};

export default Logo;
