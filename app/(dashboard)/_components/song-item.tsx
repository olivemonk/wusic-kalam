'use client';

import { currentSongState } from "@/components/providers/recoil-context-provider";
import Image from "next/image";
import { useSetRecoilState } from "recoil";

interface SongItemProps {
  poster: string;
  name: string;
  artist?: string;
  time: string;
  isPlaylist?: boolean;
  noOfSongs?: number;
}

const SongItem = ({
  name,
  artist,
  time,
  poster,
  isPlaylist,
  noOfSongs,
  
}: SongItemProps) => {
  const song = useSetRecoilState(currentSongState);

  const handlePlay = () => {
    song({
      songName: name,
      artist: artist || "Unknown",
      poster: poster,
    });
  };

  return (
    <div className="flex items-center justify-between select-none p-1.5 hover:bg-zinc-900 rounded-md">
      <div
        className="flex items-center gap-4 cursor-pointer w-[70%]"
        onClick={isPlaylist ? () => {} : handlePlay}
      >
        <Image src={poster} alt={name} height={50} width={50} />
        <div className="w-[55%]">
          <p className="text-sm truncate">{name}</p>
          {isPlaylist ? (
            <p className="text-xs text-muted-foreground">{noOfSongs} songs</p>
          ) : (
            <p className="text-xs text-muted-foreground">{artist}</p>
          )}
        </div>
      </div>
      <div className="text-xs text-muted-foreground">
        {isPlaylist ? <p>{time}</p> : <p>{time} ago</p>}
      </div>
    </div>
  );
};

export default SongItem;
