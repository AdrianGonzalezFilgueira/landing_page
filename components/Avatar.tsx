import Image from "next/image";

export default function Avatar({
  profile,
  onClick,
  onLoad,
  isActive,
  width = 100,
  height = 100,
}: any) {
  return (
    <Image
      className={`rounded-lg ${isActive && "grayscale cursor-pointer"}`}
      width={width}
      height={height}
      src={profile.image || "https://via.placeholder.com/200"}
      alt={profile.name}
      onLoad={onLoad}
      onClick={onClick}
    />
  );
}
