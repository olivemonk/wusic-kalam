import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

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
  return (
    <Table>
      <TableHeader className="border">
        <TableRow className=" hidden md:block">
          <TableHead>Title</TableHead>
          <TableHead>Date added</TableHead>
          <TableHead className="text-right">Played</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="border-b">
        {collections.map((collection, index) => (
          <TableRow key={index} className="cursor-pointer">
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
            <TableCell className="hidden md:block">
              {collection.dateAdded}
            </TableCell>
            <TableCell className="text-right hidden md:block">
              {collection.played}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
