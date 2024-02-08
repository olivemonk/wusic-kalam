import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const SearchBox = () => {
    return ( 
        <div className="flex items-center bg-white rounded-3xl px-2 py-1 w-[80%]">
            <SearchIcon className="text-muted-foreground ml-1"/>
            <Input className="bg-white w-full text-black " placeholder='Search artists, songs and albums' />
        </div>
     );
}
 
export default SearchBox;