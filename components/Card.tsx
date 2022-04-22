import { Profile } from "../interfaces/Profile";
import Image from "next/image";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import WebPageIcon from "./icons/WebPageIcon";
import { AnimatePresence, motion } from "framer-motion";
import ChevronLeft from "./icons/ChevronLeft";
import ChevronRight from "./icons/ChevronRight";

export default function Card({ profile }: { profile: Profile }) {
  return (
    <article className=" flex w-72 flex-col p-4">
      <header className="flex justify-center">
        <AnimatePresence>
          <Image
            className="rounded-lg"
            width={250}
            height={250}
            key={profile.image}
            src={profile.image || "https://via.placeholder.com/100"}
            alt={profile.name}
          />
        </AnimatePresence>
      </header>
      <h3 className="text-center text-xl font-bold text-cyan-400">
        {profile.name}
      </h3>
      <h4 className="text-center text-xl font-bold text-cyan-400">
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
