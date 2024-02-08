import { Mic, MonitorSmartphone, Share2, Volume2, VolumeX } from "lucide-react";
import { Slider } from "./ui/slider";
import { useState } from "react";

const Controls = () => {
  const [mute, setMute] = useState(false);
  const [volume, setVolume] = useState(22);

  const handleMute = () => {
    setMute((prev) => !prev);
    setVolume(0);
  };

  return (
    <div className="hidden md:flex items-center gap-8 mr-1 ">
      <div className="flex items-center gap-2">
        <div onClick={handleMute}>
          {mute ? (
            <VolumeX
              className="text-muted-foreground hover:text-blue-500 cursor-pointer"
              size={28}
            />
          ) : (
            <Volume2
              className="text-muted-foreground hover:text-blue-500 cursor-pointer"
              size={28}
            />
          )}
        </div>
        <Slider
          defaultValue={[volume]}
          max={100}
          step={0.1}
          className="min-w-20"
        />
      </div>
      <div className="flex items-center gap-4">
        <Mic className="text-muted-foreground hover:text-blue-500 cursor-pointer hidden lg:block" />
        <MonitorSmartphone className="text-muted-foreground hover:text-blue-500 cursor-pointer hidden lg:block" />
        <Share2 className="text-muted-foreground hover:text-blue-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default Controls;
