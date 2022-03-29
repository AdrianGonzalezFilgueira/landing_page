import Image from "next/image";
import LinkedinIcon from "./icons/LinkedinIcon";
import GithubIcon from "./icons/GithubIcon";
import WebPageIcon from "./icons/WebPageIcon";
import { Profile } from "../interfaces/Profile";

export default function Card({ profile }: { profile: Profile }) {
  return (
    <article className="bg-glass flex flex-col mx-auto p-8 w-[20rem]">
      <header className="flex justify-center py-8">
        <Image
          className="rounded-full"
          width="100"
          height="100"
          src={profile.image}
          alt="profile"
        />
      </header>
      <h3 className="font-bold text-cyan-400 text-xl text-center">
        {profile.name}
      </h3>
      <h4 className="font-bold text-cyan-400 text-xl text-center">
        {profile.bio}
      </h4>
      <div className="flex justify-center space-x-4 fill-slate-500 p-2">
        <a href={profile.website} target="_blank" rel="noreferrer">
          <WebPageIcon />
        </a>
        <a
          href={`https://www.linkedin.com/in/${profile.linkedin}/`}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinIcon />
        </a>
        <a
          href={`https://github.com/${profile.github}`}
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon />
        </a>
      </div>
    </article>
  );
}
