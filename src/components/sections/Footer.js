import NavItem from "../NavItem";
import { HomeIcon } from "../icons";
import { IoPerson } from "react-icons/io5";
import { CameraIcon } from "../icons";
import { RxGithubLogo } from "react-icons/rx";
import { PenIcon } from "../icons";
import { ImSoundcloud } from "react-icons/im";
import RedirectItem from "./redirectitems";
import { GitHubIcon } from "../icons";

const Footer = () => (
  <footer className="z-10 fixed inset-x-0 left-1/2 flex h-[60px] w-[calc(100%_-_64px)] max-w-max -translate-x-1/2 -translate-y-1/2 justify-between rounded-[48px] border-2 border-slate-50 border-primary-200 bg-primary-100 text-sm shadow-primary backdrop-blur dark:border-primary-400 dark:border-opacity-20 dark:bg-mirage-900 dark:bg-opacity-[0.08] px-2 -mt-3">
    <div className="flex w-full shrink-0 items-center gap-x-3 overflow-x-auto text-center">
      <NavItem
        href="/"
        icon={<HomeIcon className="h-5 w-5 text-gray-400" />}
        title={"Home"}
      />
      <NavItem
        href="/photos"
        icon={<CameraIcon className="h-5 w-5 text-gray-400" />}
        title={"Photos"}
      />
      <NavItem
        href="/posts"
        icon={<PenIcon className="h-5 w-5 text-gray-400" />}
        title={"Posts"}
      />
      <RedirectItem
        href="https://soundcloud.com/wwwnam"
        target="_blank"
        icon={<ImSoundcloud className="h-5 w-5 text-gray-400" />}
        title={"SoundCloud"}
      />

      <RedirectItem
        href="https://github.com/hnlp1997"
        target="_blank"
        icon={<GitHubIcon className="h-5 w-5 text-gray-400" />}
        title={"GitHub"}
      />

      <NavItem
        href="/about"
        icon={<IoPerson className="h-5 w-5 text-gray-400" />}
        title={"About Me"}
      />
    </div>
  </footer>
);

export default Footer;
