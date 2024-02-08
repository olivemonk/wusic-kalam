import { Play } from "lucide-react";
import Image from "next/image";

interface SongCardProps {
  name: string;
  poster: string;
  description: string;
}

const SongCard = ({ name, poster, description }: SongCardProps) => {
  return (
    <div className=" p-3 rounded-md group hover:bg-zinc-950 transition hover:shadow-xl">
      <div className="relative">
        <Image src={poster} alt={name} height={210} width={210} />
        <div className="absolute right-3 bottom-3 hidden group-hover:block transition ease-in p-3 bg-blue-500 rounded-full">
          <Play className="fill-white" />
        </div>
      </div>
      <div className="mt-2">
        <h1 className="text-lg font-medium">{name}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default SongCard;
