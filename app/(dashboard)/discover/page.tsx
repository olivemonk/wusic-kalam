import { ScrollArea } from "@/components/ui/scroll-area";
import Navbar from "../_components/navbar";
import HomeSongs from "../_components/home-songs";
import Discover from "./_components/discover";

const DiscoverPage = () => {
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

  return (
    <div className="bg-zinc-300 w-full px-3 dark:bg-neutral-900 ">
      <Navbar />
      <ScrollArea className="h-[89vh] w-full">
        <Discover/>
      </ScrollArea>
    </div>
  );
};

export default DiscoverPage;
