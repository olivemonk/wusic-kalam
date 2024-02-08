import SongCard from "./song-card";

type Song = {
  name: string;
  description: string;
  poster: string;
};

interface HomeSongsProps {
  title: string;
  songs: Song[];
}

const HomeSongs = ({title, songs}:HomeSongsProps) => {
  

  return (
    <div className="px-2 lg:px-10 mx-auto mt-6">
      <div className="flex items-center justify-between mb-1">
        <p className="text-xl md:text-3xl font-semibold">{title}</p>
        <p className="text-sm text-muted-foreground hover:underline cursor-pointer">
          See all
        </p>
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
          <SongCard key={index} {...song} />
        ))}
      </div>
    </div>
  );
};

export default HomeSongs;
