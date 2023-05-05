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
  <footer className="fixed bottom-6 left-1/2 z-[1] box-content flex h-[40px] max-w-[calc(100%-64px)] -translate-x-1/2 items-end gap-3 rounded-2xl border border-[#00000012] bg-white/70 p-[10px] pb-[6px] will-change-contents [transform-origin:center_bottom] [backdrop-filter:blur(100px)_saturate(400%)_brightness(100%)] [box-shadow:0_30px_60px_rgba(0,0,0,0.12)] dark:border-[#ffffff14] dark:bg-[#161616cc] dark:[box-shadow:0_0_02px#ffffff07]">
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

  </footer>
);

export default Footer;
