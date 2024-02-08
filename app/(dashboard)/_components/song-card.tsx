import Image from "next/image";

interface SongCardProps {
  name: string;
  poster: string;
  description: string;
}

const SongCard = ({ name, poster, description }: SongCardProps) => {
  return (
    <div className="p-3 rounded-md bg-zinc-900 hover:bg-zinc-950 shadow-md">
      <Image src={poster} alt={name} height={210} width={210} />
      <div className="mt-2">
        <h1 className="text-lg font-medium">{name}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default SongCard;
