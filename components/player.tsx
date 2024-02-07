"use client";

import { useRecoilValue } from "recoil";
import { currentSongState } from "./providers/recoil-context-provider";
import Image from "next/image";
import { Heart, PlusSquare } from "lucide-react";

const Player = () => {
  const song = useRecoilValue(currentSongState);
  return (
    <div>
      {song.songName && (
        <div className="fixed bottom-0 border-t-2 bg-black w-full py-1 h-[80px] px-1 flex items-center">
          <div className="flex items-center gap-10">
            <div>
              <p>{song.songName}</p>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <Heart className="hover:text-blue-500" />
              <PlusSquare className="hover:text-blue-500" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Player;
