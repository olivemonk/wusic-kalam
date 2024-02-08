import {
  Pause,
  Play,
  Repeat2,
  Share,
  Shuffle,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { useState } from "react";
import { Slider } from "./ui/slider";
import { cn } from "@/lib/utils";

const PlayerControls = () => {
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    setPlay((prev) => !prev);
  };

  return (
    <div className="w-[540px] flex flex-col items-center gap-3">
      <div className="flex items-center gap-8 ">
        <Shuffle className="cursor-pointer hover:text-blue-500" />
        <SkipBack className="cursor-pointer hover:text-blue-500" />
        <div
          className="cursor-pointer bg-white p-1.5 rounded-full text-black hover:text-blue-500"
          onClick={handlePlay}
        >
          {play ? <Pause /> : <Play />}
        </div>
        <SkipForward className="cursor-pointer hover:text-blue-500" />
        <Repeat2 className="cursor-pointer hover:text-blue-500" />
      </div>
      <Slider
        className="md:w-[80%] lg:w-[90%]"
        defaultValue={[22]}
        max={100}
        step={0.1}
      />
    </div>
  );
};

export default PlayerControls;
