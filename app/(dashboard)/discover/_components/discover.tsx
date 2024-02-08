import SongCard from "../../_components/song-card";
import DiscoverCard from "./discover-card";
import SearchCard from "./discover-card";

const Discover = () => {
  const songs = [
    {
      name: "Music",
      description: "Lord Huron",
      poster: "/poster.jpg",
    },
    {
      name: "Podcasts",
      description: "Lord Huron",
      poster: "/lsd.jpg",
    },
    {
      name: "New Releases",
      description: "MGMT",
      poster: "/lt.jpg",
    },
    {
      name: "Made For You",
      description: "Lord Huron",
      poster: "/st.jpg",
    },
    {
      name: "Live Radio",
      description: "Lord Huron",
      poster: "/ll.jpg",
    },
  ];

  return (
    <div className="px-10 mx-auto mt-2">
      <div className=" flex items-center justify-between ">
        <p className="text-3xl font-semibold">Discover</p>
        <p className="text-sm text-muted-foreground hover:underline">See all</p>
      </div>
      <div
        className="grid 
        grid-cols-2 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-3 
        xl:grid-cols-4 
        2xl:grid-cols-5
        gap-2
        mt-2"
      >
        {songs.map((song, index) => (
          <DiscoverCard key={index} {...song} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
