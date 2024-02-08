"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { currentSongState } from "@/components/providers/recoil-context-provider";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import { ScrollArea } from "@/components/ui/scroll-area";
import HomeSongs from "./_components/home-songs";
import { cn } from "@/lib/utils";

export default function Home() {
  const songs = [
    {
      name: "Night we met",
      description: "Lord Huron",
      poster: "/poster.jpg",
    },
    {
      name: "Lonesome Dreams",
      description: "Lord Huron",
      poster: "/lsd.jpg",
    },
    {
      name: "Little dark age",
      description: "MGMT",
      poster: "/lt.jpg",
    },
    {
      name: "Strange Trails",
      description: "Lord Huron",
      poster: "/st.jpg",
    },
    {
      name: "Long Lost",
      description: "Lord Huron",
      poster: "/ll.jpg",
    },
  ];
  const song = useRecoilValue(currentSongState);
  return (
    <div className="bg-zinc-300 w-full px-3 dark:bg-neutral-900 ">
      <Navbar />
      <ScrollArea className="h-[89vh] w-full">
        <Hero />
        <div className={cn("max-h-[100vh] w-full ", song.songName && "mb-[90px]")}>
          <HomeSongs songs={songs} title="Hello, Olivemonk" />
          <HomeSongs songs={songs} title="New releases for you" />
        </div>
      </ScrollArea>
    </div>
  );
}
