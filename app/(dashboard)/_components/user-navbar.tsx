import { Bell, ChevronDown, Plus } from "lucide-react";
import User from "./user";
import PlayList from "./playlist";
import { Button } from "@/components/ui/button";

const songs = [
  {
    name: "Night we met an dluagh",
    artist: "Artist 1",
    duration: "3:45",
    poster: "/poster.jpg",
    time: "4 min",
    isPlaylist: false,
  },
  {
    name: "Song 1",
    artist: "Artist 1",
    duration: "3:45",
    poster: "/poster.jpg",
    time: "7 min",
    isPlaylist: false,
  },
  {
    name: "Song 1",
    artist: "Artist 1",
    duration: "3:45",
    poster: "/poster.jpg",
    time: "1 hr",
    noOfSongs: 10,
    isPlaylist: true,
  },
];

const UserNavbar = () => {
  return (
    <div>
      <div className="h-screen bg-zinc-200 dark:bg-black w-[280px] p-2 flex justify-start flex-col">
        <div className="flex items-center justify-between">
          <User src={"/user.png"} username="olivemonk" />
          <div className=" flex items-center gap-3">
            <Bell className="text-muted-foreground hover:text-blue-500 cursor-pointer" />
            <ChevronDown className="text-muted-foreground hover:text-blue-500 cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <PlayList songs={songs} name="Recently Played" />
          <PlayList songs={songs} name="My Playlist" />
          <Button variant={"default"} className="w-[90%] mt-2">
            <Plus className="h-5 w-5 mr-2 "/>
            Create New Playlist
          </Button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default UserNavbar;
