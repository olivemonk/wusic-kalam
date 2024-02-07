import Image from "next/image";
4;

interface UserProps {
  src: string;
  username: string;
}

const User = ({ src, username }: UserProps) => {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={src}
        alt={username}
        width={40}
        height={40}
        className="object-contain rounded-full cursor-pointer"
      />
      <p className="text-zinc-100 text-lg font-semibold cursor-pointer">{username}</p>
    </div>
  );
};

export default User;
