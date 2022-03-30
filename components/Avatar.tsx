import Image from "next/image";

export default function Avatar({ profile, onMouseEnter, onLoad }: any) {
  return (
    <>
      <Image
        className="rounded-lg"
        width={100}
        height={100}
        src={profile.image || "https://via.placeholder.com/100"}
        alt={profile.name}
        onLoad={onLoad}
        onMouseEnter={onMouseEnter}
      />
    </>
  );
}
