import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import SearchBox from "./search-box";

const Navbar = () => {
    return ( 
        <div className="flex items-center justify-between mx-auto px-10 py-4 select-none">
            <div className="flex items-center gap-4">
                <ChevronLeft/>
                <ChevronRight/>
            </div>
            <SearchBox/>
            <MoreHorizontal/>
        </div>
     );
}
 
export default Navbar;