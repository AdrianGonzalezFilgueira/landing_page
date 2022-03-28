import Image from "next/image";

export default function Card({ profile }: any) {
  return (
    <article className="bg-blue-200 flex flex-col mx-auto p-8 rounded-[3.5rem] shadow-xl w-[20rem]">
      <header className="flex justify-center py-8">
        <Image
          className="rounded-full"
          width="100"
          height="100"
          src="https://via.placeholder.com/100"
          alt="profile"
        />
      </header>
      <h3 className="font-bold text-cyan-400 text-xl text-center">
        {"profile.name"}
      </h3>
      <h4 className="font-bold text-cyan-400 text-xl text-center">
        {"profile.position"}
      </h4>
      <div className="flex justify-evenly font-bold py-4 px-1 text-cyan-400 text-center text-xl">
        <Image
          className="rounded-full"
          width="48"
          height="48"
          src="https://via.placeholder.com/48"
          alt="profile"
        />
        <Image
          className="rounded-full"
          width="48"
          height="48"
          src="https://via.placeholder.com/48"
          alt="profile"
        />
        <Image
          className="rounded-full"
          width="48"
          height="48"
          src="https://via.placeholder.com/48"
          alt="profile"
        />
        <Image
          className="rounded-full"
          width="48"
          height="48"
          src="https://via.placeholder.com/48"
          alt="profile"
        />
      </div>
    </article>
  );
}
