import NavItem from "../NavItem";
import { BiHomeSmile } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { ImCamera } from "react-icons/im";
import { RxGithubLogo } from "react-icons/rx";
import { BsPencilSquare } from "react-icons/bs";

const Footer = () => (
  <footer className="z-10 fixed inset-x-0 bottom-0 left-1/2 flex h-[70px] w-[calc(100%_-_64px)] max-w-max -translate-x-1/2 -translate-y-1/2 justify-between rounded-[23px] border border-primary-200 bg-primary-100 px-[10px]  text-sm shadow-primary backdrop-blur dark:border-primary-400 dark:border-opacity-20 dark:bg-mirage-900 dark:bg-opacity-[0.08]">
    <div className="flex w-full shrink-0 items-center gap-x-2 overflow-x-auto text-center">
      <NavItem
        href="/"
        icon={<BiHomeSmile className="h-6 w-6" />}
        title={"Home"}
      />
      <NavItem
        href="/gallery"
        icon={<ImCamera className="h-6 w-6" />}
        title={"Photos"}
      />
      <NavItem
        href="https://github.com/hnlp1997" target="_blank"
        icon={<RxGithubLogo className="h-6 w-6" />}
        title={"Github"}
      />
      {" "}
      <NavItem
        href="/posts"
        icon={<BsPencilSquare className="h-6 w-6" />}
        title={"Blog"}
      />
      <NavItem
        href="/about"
        icon={<BsPerson className="h-6 w-6" />}
        title={"About Me"}
      />
    </div>
  </footer>
);

export default Footer;
