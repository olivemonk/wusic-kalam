import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  href: string;
  isClosed: boolean;
}

const SidebarItem = ({
  icon: Icon,
  label,
  active,
  href,
  isClosed,
}: SidebarItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-row  items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-blue-500 transition hover:bg-zinc-900 text-neutral-400 px-2 py-1.5 rounded-sm",
        active && "text-blue-500"
      )}
    >
      <Icon  />
      {!isClosed && <p className="">{label}</p>}
    </Link>
  );
};

export default SidebarItem;
