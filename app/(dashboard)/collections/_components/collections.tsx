"use client";

import { Plus } from "lucide-react";
import { Collection, CollectionTable } from "./collection-table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCreate } from "@/hooks/useCreate";

interface CollectionsProps {
  collections: Collection[];
  isPlusVisible?: boolean;
  title: string;
}

const Collections = ({
  collections,
  isPlusVisible,
  title,
}: CollectionsProps) => {
  const create = useCreate();
  return (
    <div className="px-2 md:px-4 lg:px-10 mx-auto mt-2">
      <div className="flex items-center justify-between">
        <p className="text-xl md:text-3xl font-semibold">{title}</p>
        {isPlusVisible && (
          <div
            className="p-2 hover:bg-zinc-950 rounded-full text-muted-foreground hover:text-white transition cursor-pointer"
            onClick={create.onOpen}
          >
            <Plus />
          </div>
        )}
      </div>
      <div className="mt-4">
        <ScrollArea className="h-[68vh] w-full select-none mb-[100px]">
          <CollectionTable collections={collections} />
        </ScrollArea>
      </div>
    </div>
  );
};

export default Collections;
