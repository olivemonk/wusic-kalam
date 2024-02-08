"use client";

import { RecoilRoot, atom } from "recoil";
export const currentSongState = atom({
  key: "currentSongState",
  default: {
    songName: "",
    poster: "",
    artist: "",
  },
});

export default function RecoilContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
