import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import SearchBox from "./search-box";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-auto px-10 py-4 select-none">
      <div className="flex items-center gap-2">
        <div className="p-2 hover:bg-zinc-950 rounded-full">
          <ChevronLeft />
        </div>
        <div className="p-2 hover:bg-zinc-950 rounded-full">
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
