import Image from "next/image";

interface SearchCardProps {
    name: string;
  poster: string;
  description: string;
}



const DiscoverCard = ({name, poster, description}:SearchCardProps) => {
    return ( 
        <div className=" relative h-52 w-52 bg-red-600 rounded-md p-3 overflow-hidden">   
            <p className="text-xl font-bold">{name}</p>
            <Image className="absolute -bottom-8 -right-10 rotate-[30deg] drop-shadow-lg" src={poster} alt={name} width={150} height={150} />
        </div>
     );
}
 
export default DiscoverCard;