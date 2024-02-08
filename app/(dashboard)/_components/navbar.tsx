'use client';

import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import SearchBox from "./search-box";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleNext = () => {
    router.forward();
  };
  const handlePrev = () => {
    router.back();
  };

  return (
    <div className="flex items-center justify-between mx-auto px-0 lg:px-10 py-4 select-none gap-3">
      <div className="flex items-center gap-0 md:gap-1 lg:gap-2">
        <div
          className="p-2 hover:bg-zinc-950 rounded-full hidden md:block"
          onClick={handlePrev}
        >
          <ChevronLeft />
        </div>
        <div
          onClick={handleNext}
          className="p-2 hover:bg-zinc-950 rounded-full hidden md:block"
        >
          <ChevronRight />
        </div>
      </div>
      <SearchBox />
      <div className="p-2 hover:bg-zinc-950 rounded-full">
        <MoreHorizontal />
      </div>
    </div>
  );
};

export default Navbar;
