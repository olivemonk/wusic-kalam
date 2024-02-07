"use client";

import { RecoilRoot, atom } from "recoil";
export const currentSongState = atom({
  key: "currentSongState",
  default: {
    songName: "Night we met",
    poster: "/poster.jpg",
    artist: "Lord Huron",
  },
});

export default function RecoilContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
