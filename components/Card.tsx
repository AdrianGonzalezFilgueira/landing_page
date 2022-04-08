import { Profile } from "../interfaces/Profile";
import Image from "next/image";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import WebPageIcon from "./icons/WebPageIcon";
import { AnimatePresence, motion } from "framer-motion";

export default function Card({ profile }: { profile: Profile }) {

  return (
    <article className=" flex flex-col p-4 w-72">
      <header className="flex justify-center">
          <AnimatePresence>
            <motion.img
              className="rounded-lg"
              width={250}
              height={250}
              key={profile.image}
              src={profile.image || "https://via.placeholder.com/100"}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ "easeInOut": [0.17, 0.67, 0.83, 0.67]}}
              exit={{ x: 100, opacity: 0 }}
              alt="profile"
            />
          </AnimatePresence>
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
