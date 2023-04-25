import NavItem from "../NavItem";
import { IoHome } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";
import { BsPencilSquare } from "react-icons/bs";
import { ImSoundcloud2 } from "react-icons/im";
import RedirectItem from "./redirectitems";

const Footer = () => (
  <footer className="z-10 fixed inset-x-0 bottom-0 left-1/2 flex h-[70px] w-[calc(100%_-_64px)] max-w-max -translate-x-1/2 -translate-y-1/2 justify-between rounded-[23px] border-2 border-slate-50 border-primary-200 bg-primary-100 px-[10px]  text-sm shadow-primary backdrop-blur dark:border-primary-400 dark:border-opacity-20 dark:bg-mirage-900 dark:bg-opacity-[0.08]">
    <div className="flex w-full shrink-0 items-center gap-x-2 overflow-x-auto text-center">
      <NavItem
        href="/"
        icon={<IoHome className="h-6 w-6 text-gray-400" />}
        title={"Home"}
      />
      <NavItem
        href="/photos"
        icon={<FaCamera className="h-6 w-6 text-gray-400" />}
        title={"Photos"}
      />

      <RedirectItem
        href="https://soundcloud.com/wwwnam"
        target="_blank"
        icon={<ImSoundcloud2 className="h-6 w-6 text-gray-400" />}
        title={"SoundCloud"}
      />

      <RedirectItem
        href="https://github.com/hnlp1997"
        target="_blank"
        icon={<RxGithubLogo className="h-6 w-6 text-gray-400" />}
        title={"Github"}
      />

      <NavItem
        href="/posts"
        icon={<BsPencilSquare className="h-6 w-6 text-gray-400" />}
        title={"Blog"}
      />
      <NavItem
        href="/about"
        icon={<IoPerson className="h-6 w-6 text-gray-400" />}
        title={"About Me"}
      />
    </div>
  </footer>
);

export default Footer;
