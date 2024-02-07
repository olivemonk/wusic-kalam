import { ScrollArea } from "@/components/ui/scroll-area";
import SongItem from "./song-item";

type Song = {
  name: string;
  artist: string;
  poster: string;
  time: string;
  isPlaylist: boolean;
};

interface PlayListProps {
  name: string;
  songs: Song[];
}

const PlayList = ({ name, songs }: PlayListProps) => {
  return (
    <div className="mt-4 pb-2">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-lg">{name}</p>
        <p className="text-xs text-muted-foreground cursor-pointer hover:underline">
          See all
        </p>
      </div>
      <ScrollArea className="h-56 w-full rounded-md ">
        <div className="flex flex-col gap-1 mt-2">
          {songs.map((song, index) => (
            <SongItem key={index} {...song} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default PlayList;
