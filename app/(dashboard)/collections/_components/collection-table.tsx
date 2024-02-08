import { currentSongState } from "@/components/providers/recoil-context-provider";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { useSetRecoilState } from "recoil";

export type Collection = {
  name: string;
  type: string;
  createdBy: string;
  dateAdded: string;
  played: string;
  poster: string;
};

interface CollectionTableProps {
  collections: Collection[];
}

export function CollectionTable({ collections }: CollectionTableProps) {
  const song = useSetRecoilState(currentSongState);

  const handlePlay = (collection: Collection) => {
    song({
      songName: collection.name,
      poster: collection.poster,
      artist: collection.name,
    });
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden lg:table-cell">Title</TableHead>
          <TableHead className="hidden lg:table-cell">Date added</TableHead>
          <TableHead className="text-right hidden lg:table-cell">
            Last played
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="border-b">
        {collections.map((collection, index) => (
          <TableRow
            key={index}
            className="cursor-pointer"
            onClick={() => handlePlay(collection)}
          >
            <TableCell className="font-medium">
              <div className=" flex items-center gap-4">
                <Image
                  src={collection.poster}
                  alt={collection.name}
                  width={60}
                  height={60}
                  className="rounded-sm object-cover"
                />
                <div>
                  <p className="text-lg">{collection.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {collection.type} • {collection.createdBy}
                  </p>
                </div>
              </div>
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              {collection.dateAdded}
            </TableCell>
            <TableCell className="text-right hidden lg:table-cell">
              {collection.played}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
