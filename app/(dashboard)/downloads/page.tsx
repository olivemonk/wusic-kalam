import { ScrollArea } from "@/components/ui/scroll-area";
import Navbar from "../_components/navbar";
import Discover from "../discover/_components/discover";
import Collections from "../collections/_components/collections";

const DownloadsPage = () => {
  const collections = [
    {
      name: "Long Lost",
      poster: "/ll.jpg",
      type: "Album",
      createdBy: "Lord Huron",
      dateAdded: "20 Dec 2019",
      played: "3 days ago",
    },
    {
      name: "Motivational",
      poster: "/pl1.jpg",
      type: "Playlist",
      createdBy: "Olivemonk",
      dateAdded: "12 May 2021",
      played: "2 week ago",
    },
    {
      name: "Strange Trails",
      poster: "/st.jpg",
      type: "Album",
      createdBy: "Lord Huron",
      dateAdded: "28 Jan 2023",
      played: "3 weeks ago",
    },
  ];

  return (
    <div className="bg-zinc-300 w-full px-3 dark:bg-neutral-900 select-none ">
      <Navbar />
      <ScrollArea className="h-[89vh] w-full">
        <Collections
          title="Your Downloads"
          collections={collections}
        />
      </ScrollArea>
    </div>
  );
};

export default DownloadsPage;
