"use client";

import { useRecoilValue } from "recoil";
import { currentSongState } from "./providers/recoil-context-provider";
import Image from "next/image";
import { Heart, PlusSquare } from "lucide-react";
import PlayerControls from "./player-controls";
import Controls from "./controls";

const Player = () => {
  const song = useRecoilValue(currentSongState);
  return (
    <div>
      {song.songName && (
        <div className="fixed bottom-0 border-t-2 bg-black w-full py-1 h-[80px] px-2 flex items-center justify-between">
          <div className="flex items-center gap-10 ml-1">
            <div className="hidden md:block">
              <p className="text-zinc-100 text-lg">{song.songName}</p>
              <p className="text-xs text-muted-foreground">{song.artist}</p>
            </div>
            <div className="hidden md:flex items-center gap-4 text-muted-foreground">
              <Heart className="hover:text-blue-500" />
              <PlusSquare className="hover:text-blue-500" />
            </div>
          </div>
          <PlayerControls />
          <Controls />
        </div>
      )}
    </div>
  );
};

export default Player;
