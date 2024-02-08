"use client";

import Logo from "@/components/logo";
import {
  Disc3,
  Download,
  FileAudio2,
  Heart,
  HomeIcon,
  LibraryBig,
  SidebarCloseIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "@react-hook/media-query";
import { useEffect, useMemo, useState } from "react";
import SidebarItem from "./sidebar-item";
import { useRecoilValue } from "recoil";
import { currentSongState } from "@/components/providers/recoil-context-provider";
import Image from "next/image";

const SideNavbar = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HomeIcon,
        label: "Home",
        active: pathname === "/",
        href: "/",
      },
      {
        icon: Disc3,
        label: "Discover",
        active: pathname === "/discover",
        href: "/discover",
      },
      {
        icon: LibraryBig,
        label: "Collections",
        active: pathname === "/collections",
        href: "/collections",
      },
    ],
    [pathname]
  );

  const extraRoutes = useMemo(
    () => [
      {
        icon: Download,
        label: "Download",
        active: pathname === "/downloads",
        href: "/downloads",
      },
      {
        icon: Heart,
        label: "Favourites",
        active: pathname === "/favourites",
        href: "/favourites",
      },
      {
        icon: FileAudio2,
        label: "Local Files",
        active: pathname === "/local-files",
        href: "/local-files",
      },
    ],
    [pathname]
  );

  const currentSong = useRecoilValue(currentSongState);

  const [isClosed, setIsClosed] = useState(true);

  const handleSidebarClose = () => {
    setIsClosed((prev) => !prev);
  };

  const screen = useMediaQuery("(max-width: 913px)");

  useEffect(() => {
    if (screen) {
      setIsClosed(true);
    } else {
      setIsClosed(false);
    }
  }, [screen]);

  return (
    <div className="select-none">
      {isClosed ? (
        <div className="">
          <div className="h-screen bg-zinc-200 dark:bg-black w-[60px] p-2 flex flex-col items-center justify-between">
            <div className="flex flex-col items-center">
              <div
                className="mt-3 "
                onClick={!screen && isClosed ? handleSidebarClose : () => {}}
              >
                <Logo />
              </div>
              <div className="flex flex-col gap-3 mt-6">
                <div className="border-t border-zinc-700 h-full"></div>
                {routes.map((item) => (
                  <SidebarItem key={item.label} {...item} isClosed={isClosed} />
                ))}
              </div>
              <div className="flex flex-col gap-3 mt-6">
                <div className="border-t border-zinc-700 h-full"></div>
                {extraRoutes.map((item) => (
                  <SidebarItem key={item.label} {...item} isClosed={isClosed} />
                ))}
              </div>
            </div>
            {currentSong.poster && (
              <div>
                <Image
                  className="mb-[78px]"
                  src={currentSong.poster}
                  alt={currentSong.songName}
                  width={60}
                  height={60}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="h-screen bg-zinc-200 dark:bg-black w-[230px] p-2 flex justify-between flex-col">
          <div className="">
            <div className="flex items-center justify-between mt-3 ">
              <Logo />
              <SidebarCloseIcon
                onClick={handleSidebarClose}
                className="text-muted-foreground hover:text-blue-500"
              />
            </div>
            <div className="flex flex-col gap-3 mt-8 mb-4">
              <p className="text-xs text-muted-foreground">FEATURES</p>
              {routes.map((item) => (
                <SidebarItem key={item.label} {...item} isClosed={isClosed} />
              ))}
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <p className="text-xs text-muted-foreground">LIBRARY</p>
              {extraRoutes.map((item) => (
                <SidebarItem key={item.label} {...item} isClosed={isClosed} />
              ))}
            </div>
          </div>
          {currentSong.poster && (
            <div>
              <Image
                className="mb-[78px]"
                src={currentSong.poster}
                alt={currentSong.songName}
                width={220}
                height={220}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SideNavbar;
