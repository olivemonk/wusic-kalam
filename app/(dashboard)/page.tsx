'use client';
import { ModeToggle } from "@/components/mode-toggle";
import { currentSongState } from "@/components/providers/recoil-context-provider";
import Image from "next/image";
import { useRecoilValue } from "recoil";

export default function Home() {
  const song = useRecoilValue(currentSongState);
  return (
    <div className="bg-zinc-300 w-full p-3 dark:bg-zinc-800">
      Hello from Wusic!
      {JSON.stringify(song)}
      <ModeToggle/>
    </div>
  );
}
